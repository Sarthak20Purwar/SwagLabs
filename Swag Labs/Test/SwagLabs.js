const Code = require("../specs/SwagLabsFunctions");
const Data = require("../ConfigData/SwagLabsData");
const LOGIN = require("../pageobjects/LOGIN");
const Locator = require("../specs/SwagLocators"); 
const NAVBAR = require("../pageobjects/NAVBAR");
const CART = require("../pageobjects/CART");
const DETAILS = require("../pageobjects/DETAILS");
const CHECKOUT = require("../pageobjects/CHECKOUT");
var expectChai = require('chai').expect;
const FILTER = require("../pageobjects/FILTER");


describe('SwagLabs' , async()=>{


it("Login with Locked User" , async()=>
{
    await Code.setUp();
    await Code.title();
    await LOGIN.login(Data.username2 , Data.password);
    await Code.wait();
    await expectChai(await Locator.LockedUserText.getText()).to.equal(Data.lockedUser);
   
})

it("Login with Problem User" , async()=>
{
    await Code.setUp();
    await Code.title();
    await LOGIN.login(Data.username3 , Data.password);
    await Code.wait();
    await LOGIN.lockedUser();
    await Code.wait();
    await Code.wait();

})

it("Login with Standard user" , async()=>
{
    await Code.setUp();
    await Code.title();
    await LOGIN.login(Data.username1 , Data.password);
    await NAVBAR.navbar();
    await CART.cart();
    await DETAILS.details();
    await CHECKOUT.checkout();
    await CHECKOUT.checkoutcomplete();
    await FILTER.Filter();
    await Code.wait();


    })

})