const Code = require("../specs/SwagLabsFunctions");
const Data = require("../ConfigData/SwagLabsData");
const Locator = require("../specs/SwagLocators"); 
const { checkoutcomplete } = require("../ConfigData/Locators");
var expectChai = require('chai').expect;

class CHECKOUT
{
    async checkout()
    {
    let price1 = await Locator.Item3.getText();
    let price2 = await Locator.Item4.getText();
    let price3 = price1.substr(1);
    let price4 = price2.substr(1);
    let Price1 = parseFloat(price3);
    let Price2 = parseFloat(price4);
    let PRICE1 = Price1 + Price2;

    let price5 = await Locator.SummaryPrice.getText();
    let price6 = price5.substr(13);
    let Price3 = parseFloat(price6);
    let PRICE2 = Price3;
    await expectChai(PRICE1).to.equal(PRICE2);

    await expectChai(await Locator.PaymentInformation.getText()).to.include(Data.paymentinformation);
    await expectChai(await Locator.ShippingInformation.getText()).to.include(Data.shippinginformation);

    
    let tax1 = await Locator.Tax.getText();
    let total1 = await Locator.Total.getText();
    let tax2 = tax1.substr(6);
    let total2 = total1.substr(8);
    let TAX = parseFloat(tax2);
    let TOTAL1 = parseFloat(total2);
    let TOTAL2 = TAX + PRICE2;
    await expectChai(TOTAL1).to.equal(TOTAL2);
    await Locator.Finish.click();
    }

      async checkoutcomplete()
 {
    await expectChai(await Locator.CheckOutComplete.getText()).to.equal(Data.checkoutcomplete);
    await expectChai(await Locator.ThankYou.getText()).to.equal(Data.thankyou);
    await expectChai(await Locator.Logo.isDisplayed()).to.equal(true);
    await Locator.HomePage.click();

    
}

}
module.exports = new CHECKOUT();