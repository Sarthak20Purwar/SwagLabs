const Code = require("../specs/SwagLabsFunctions");
const Data = require("../ConfigData/SwagLabsData");
const Locator = require("../specs/SwagLocators"); 
var expectChai = require('chai').expect;

class CART
{
    async cart()
    {
    await Locator.BackPackCart.click();
    await Locator.BackLight.click();
    await Locator.BoltShirt.click();
    await Locator.FleeceJacket.click();
    await Code.wait();
    await Locator.Cart.click();
    await expectChai(await Locator.CartAssert.getText()).to.equal(Data.cartassert);
    await expectChai(await Locator.Item1.isDisplayed()).to.equal(true);
    await expectChai(await Locator.Item2.isDisplayed()).to.equal(true);
    await expectChai(await Locator.Item3.isDisplayed()).to.equal(true);
    await expectChai(await Locator.Item4.isDisplayed()).to.equal(true);
    await Locator.Remove1.click();
    await Locator.Remove2.click();
    await expectChai(await Locator.Item1.isDisplayed()).to.equal(false);
    await expectChai(await Locator.Item2.isDisplayed()).to.equal(false);
    await expectChai(await Locator.Item3.isDisplayed()).to.equal(true);
    await expectChai(await Locator.Item4.isDisplayed()).to.equal(true);
    await Locator.CheckOut.click();
    await expectChai(await Locator.CheckOutInfo.getText()).to.equal(Data.checkoutinfo);
    await Code.wait();
    }

}

module.exports = new CART();