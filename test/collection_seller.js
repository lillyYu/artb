const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const Collection = artifacts.require("ArtbCollection");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CollectionSeller", function (accounts) {
  it("Could buy", async function () {
    const Seller = await CollectionSeller.deployed();
    const token = await ABCToken.deployed();
    const nft = await Collection.deployed();

    const balance = await token.balanceOf(accounts[1]);
    await token.transfer(accounts[0], balance, { from: accounts[1] });
    await token.transfer(accounts[1], "1000000");

    await token.approve(Seller.address, "1000000", { from: accounts[1] });
    await Seller.buy(0, 1, { from: accounts[1] });
    const result = await nft.balanceOf(accounts[1], 0);

    console.log(result);

    return true;
    // return assert.isTrue(true);
  });
});
