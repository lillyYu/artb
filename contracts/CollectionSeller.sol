// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

// 추가로 필요한 기능들
// 1. hNFT 토큰 전송
// 2. 가격 변경

contract CollectionSeller is Ownable {
  IERC1155 public NFT;
  IERC20 public PAYMENT;
  uint256 public PRICE = 0;
  uint256 public STARTWHEN = 0; // FIXME this should be a timestamp
  uint256 public STOPWHEN = 0; // FIXME this should be a timestamp
  address public MINTER;

  uint256 public lastSaleId = 0;
  uint256 public lastRegisterId = 0;
  uint256 public limitPerSale = 10;
  mapping(uint256 => uint256) public tokenIdById;
  mapping(uint256 => uint256) public amountBytokenId;

  event bought(address user, uint256 amount);

  constructor(
    address _NFT,
    address _PAYMENT,
    uint256 _PRICE,
    uint256 _STARTWHEN,
    uint256 _STOPWHEN
  ) public {
    NFT = IERC1155(_NFT);
    PAYMENT = IERC20(_PAYMENT);
    PRICE = _PRICE;
    STARTWHEN = _STARTWHEN;
    STOPWHEN = _STOPWHEN;
    MINTER = msg.sender;
  }

  function buy(uint256 tokenId, uint256 amount) public payable isOpen {
    require(
      amount <= amountBytokenId[tokenId],
      "There are no more tokens to buy"
    );
    require(
      amount <= limitPerSale,
      "You can't buy at most limited amount at a time"
    );

    uint256 _before = PAYMENT.balanceOf(address(this));
    PAYMENT.transferFrom(msg.sender, address(this), PRICE * amount);
    uint256 _after = PAYMENT.balanceOf(address(this));
    uint256 value = _after - _before;

    require(value == PRICE * amount, "You must pay the correct amount");

    _buy(msg.sender, amount);

    emit bought(msg.sender, amount);
  }

  function register(uint256 tokenId, uint256 amount) public onlyOwner {
    tokenIdById[lastRegisterId++] = tokenId;
    amountBytokenId[tokenId] = amount;
  }

  function registerById(
    uint256 tokenId,
    uint256 amount,
    uint256 id
  ) public onlyOwner {
    if (tokenIdById[id] == 0) {
      lastRegisterId = lastRegisterId + 1;
    }
    tokenIdById[id] = tokenId;
    amountBytokenId[tokenId] = amount;
  }

  function _buy(address account, uint256 amount) internal {
    NFT.safeTransferFrom(
      MINTER,
      account,
      tokenIdById[lastSaleId++],
      amount,
      "0x0"
    );
  }

  function withdraw(uint256 amount) public onlyOwner {
    PAYMENT.transfer(msg.sender, amount);
  }

  function setRegisterId(uint256 id) public onlyOwner {
    lastRegisterId = id;
  }

  function setLastSaleId(uint256 id) public onlyOwner {
    lastSaleId = id;
  }

  function setLimitPerSale(uint256 amount) public onlyOwner {
    limitPerSale = amount;
  }

  function setPeriod(uint256 start, uint256 end) public onlyOwner {
    STARTWHEN = start;
    STOPWHEN = end;
  }

  modifier isOpen() {
    require(
      block.timestamp >= STARTWHEN && block.timestamp <= STOPWHEN,
      "The sale has not started yet or already end"
    );
    _;
  }
}
