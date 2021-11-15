// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArtbCollection is ERC1155PresetMinterPauser, Ownable {
  constructor()
    ERC1155PresetMinterPauser("https://nft.artbshop.co.kr/metadata/{id}.json")
  {}
}
