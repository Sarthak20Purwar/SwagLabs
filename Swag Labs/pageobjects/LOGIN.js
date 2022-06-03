const Data = require("../ConfigData/SwagLabsData");
const Locator = require("../specs/SwagLocators"); 
const Code = require("../specs/SwagLabsFunctions");
var expectChai = require('chai').expect;


class LOGIN 
{
    async login(username , password)
    {
        await Locator.Username.setValue(username);
        await Locator.Password.setValue(password);
        await Locator.LoginButton.click();
        if(username === Data.username1)
        {
            await expectChai(await Locator.StandartAssert.getText()).to.equal(Data.standardassert);
        }
        await Code.wait();

        
    }

    async lockedUser()
    {
        let src1= await Locator.Img1.getAttribute(Data.src); 
        let src2= await Locator.Img2.getAttribute(Data.src);
        if(src1!=src2)
        {console.log(Data.success);}
        else
        {console.log(Data.problem_user);}
        await Locator.NavBar.click();
        await Locator.LogOut.click();
    }
}


module.exports = new LOGIN();