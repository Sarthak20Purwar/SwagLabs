const Code = require("../specs/SwagLabsFunctions");
const Data = require("../ConfigData/SwagLabsData");
const Func = require("../pageobjects/LOGIN");
const Locator = require("../specs/SwagLocators"); 
var expectChai = require('chai').expect;

class NAVBAR
{

    async navbar()
    {
    //Logout 
    await Locator.NavBar.click();
    await Locator.LogOut.click();
    await Code.wait();

    //About
    await Code.setUp();
    await Code.title();
    await Func.login(Data.username1 , Data.password);
    await Code.wait();
    await Locator.NavBar.click();
    await Locator.About.click();
    await Code.wait();
    await expectChai(await Locator.AboutText.getText()).to.equal(Data.about_text);
    await Code.setUp();
    await Code.wait();

    }
    
}

module.exports = new NAVBAR();