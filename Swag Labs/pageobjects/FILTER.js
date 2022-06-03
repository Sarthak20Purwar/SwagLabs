const Locator = require("../specs/SwagLocators");
const Data = require("../ConfigData/SwagLabsData");
var expectChai = require('chai').expect;

class FILTER
{

async Filter()
{

    //LowToHigh
    await Locator.Filter.click();
    await Locator.LowtoHigh.click();
    await expectChai(await Locator.TextAtoZ.getText()).to.include(Data.textLowtoHigh);





    //HighToLow
    await Locator.Filter.click();
    await Locator.HightoLow.click();
    await Locator.TextAtoZ.getText();
    await expectChai(await Locator.TextAtoZ.getText()).to.include(Data.textHightoLow);





    //AtoZ

    await Locator.Filter.click();
    await Locator.AtoZ.click();
    await expectChai(await Locator.TextAtoZ.getText()).to.include(Data.textAtoZ);



    //ZtoA

    await Locator.Filter.click();
    await Locator.ZtoA.click();
    await expectChai(await Locator.TextAtoZ.getText()).to.include(Data.textZtoA);

}


}



module.exports = new FILTER();