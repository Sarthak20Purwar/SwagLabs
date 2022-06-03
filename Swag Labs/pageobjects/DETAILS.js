const Code = require("../specs/SwagLabsFunctions");
const Data = require("../ConfigData/SwagLabsData");
const Locator = require("../specs/SwagLocators"); 
var expectChai = require('chai').expect;

class DETAILS
{
    async details()
    {
        await Locator.FirstName.setValue("SARTHAK");
        await Locator.LastName.setValue("PURWAR");
        await Locator.PostalCode.setValue("123456");
        await Locator.Continue.click();
        await expectChai(await Locator.CheckOutOverView.getText()).to.equal(Data.checkoutoverview);
        await Code.wait();
    }
}

module.exports = new DETAILS();