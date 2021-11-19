// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";



struct PaymentType {
    IERC20 token; // address of the payment Token 
    uint256 amount; // amount of the payment
    address receiver; // address of the receiver
}

struct CollectionType {
  IERC1155 token; // NFT contract
  uint256 tokenId; // tokenId of the NFT
  uint256 QUANTITY; // Total quantity of this item
  uint256 SOLD; // Total quantity of this item sold
  uint256 INVENTORY; // Total quantity of this item in inventory
}

struct SalesType {
  PaymentType payment; // Payment information
  CollectionType collection; // Collection information
  uint256 start_time; // Sales start time
  uint256 end_time; // Sales end time
  address seller; // Seller address
  bool is_active; // Is the sale active
}


contract CollectionSeller is Ownable {
  uint256 lastRegisterId; //
  mapping(uint256 => SalesType) public Goods;
  mapping(address => bool) public SellerWhitelist;

  event bought(address user, uint256 amount);
  event registerNewOne(uint256 id);
  event registerCollection(uint256 id);
  event registerPayment(uint256 id);

  function buy(uint256 id, uint256 amount) public payable isOpen(Goods[id].start_time, Goods[id].end_time) {
    require(Goods[id].is_active, "This sale is not active");
    require(Goods[id].collection.INVENTORY >= amount, "Not enough inventory");
    require(amount > 0, "Amount must be greater than 0");

    Goods[id].payment.token.transferFrom(msg.sender, Goods[id].payment.receiver, amount*Goods[id].payment.amount);

    Goods[id].collection.SOLD += amount;
    Goods[id].collection.INVENTORY -= amount;

    Goods[id].collection.token.safeTransferFrom(Goods[id].seller, msg.sender, Goods[id].collection.tokenId, amount, "0x0");


    emit bought(msg.sender, amount);
  }

  function GoodsRegistration(address erc20_address, address erc1155_address) public onlySeller returns(uint256) {
    uint256 id = lastRegisterId++;

    Goods[id].payment.token = IERC20(erc20_address);
    Goods[id].collection.token = IERC1155(erc1155_address);
    Goods[id].is_active = false;
    Goods[id].seller = msg.sender;

    emit registerNewOne(id);
    return id;
  }

  function GoodsRegCollection(uint256 id, uint256 tokenId, uint256 quantity) public onlySeller {
    require(Goods[id].seller == msg.sender, "You are not the seller of this item");


    Goods[id].collection.tokenId = tokenId;
    Goods[id].collection.QUANTITY = quantity;
    Goods[id].collection.SOLD = 0;
    Goods[id].collection.INVENTORY = quantity;
  }

  function GoodsRegPayment(uint256 id, uint256 amount, address receiver) public onlySeller {
    require(Goods[id].seller == msg.sender, "You are not the seller of this item");

    Goods[id].payment.amount = amount;
    Goods[id].payment.receiver = receiver;
  }

  function GoodsSetTime(uint256 id, uint256 start, uint256 end) public onlySeller {
    require(Goods[id].seller == msg.sender, "You are not the seller of this item");

    Goods[id].start_time = start;
    Goods[id].end_time = end;
  }

  function GoodsSetOpen(uint256 id, bool is_active) public onlySeller {
    require(Goods[id].seller == msg.sender, "You are not the seller of this item");

    Goods[id].is_active = is_active;
  }


  function addSeller(address user) public onlyOwner {
    SellerWhitelist[user] = true;
  }

  function removeSeller(address user) public onlyOwner {
    SellerWhitelist[user] = true;
  }

  modifier onlySeller() {
    require(SellerWhitelist[msg.sender] == true, "Only seller can perform this action");
    _;
  }

  modifier isOpen(uint256 from,uint256 to) {
    require(
      block.timestamp >= from && block.timestamp <= to,
      "The sale has not started yet or already end"
    );
    _;
  }
}
