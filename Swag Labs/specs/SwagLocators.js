const Locators = require("../ConfigData/Locators");      
       
      class Code
    {

        get Username()
        {
            return $(Locators.username);
        }

        get Password()
        {
            return $(Locators.password);
        }

        get LoginButton()
        {
            return $(Locators.loginbutton);
        }

        get NavBar()
        {
            return $(Locators.navbar);
        }

        get LogOut()
        {
            return $(Locators.logout);
        }

        get About()
        {
            return $(Locators.about);
        }

        get LockedUserText()
        {
            return $(Locators.lockedusertext);
        }

        get Img1()
        {
            return $(Locators.img1);
        }

        get Img2()
        {
            return $(Locators.img2);
        }


        get AboutText()
        {
            return $(Locators.abouttext);
        }
        
        get StandartAssert()
        {
            return $(Locators.standardassert);
        }

        get Filter()
        {
            return $(Locators.filter);
        }

        get AtoZ()
        {
            return $(Locators.nameAtoZ);
        }

        get ZtoA()
        {
            return $(Locators.nameZtoA);
        }

        get LowtoHigh()
        {
            return $(Locators.lowToHigh);
        }

        get HightoLow()
        {
            return $(Locators.highTolow);
        }

        get BackPackCart()
        {
            return $(Locators.backpackcart);
        }

        get BackLight()
        {
            return $(Locators.backlight);
        }

        get BoltShirt()
        {
            return $(Locators.bolttshirt);
        }

        get FleeceJacket()
        {
            return $(Locators.fleecejacket);
        }

        get Cart()
        {
            return $(Locators.cart);
        }

        get Item1()
        {
            return $(Locators.item1);
        }

        get Item2()
        {
            return $(Locators.item2);
        }

        get Item3()
        {
            return $(Locators.item3);
        }

        get Item4()
        {
            return $(Locators.item4);
        }

        get  Remove1()
        {
            return $(Locators.remove1);
        }

        get Remove2()
        {
            return $(Locators.remove2);
        }

        get CheckOut()
        {
            return $(Locators.checkout);
        }

        get CartAssert()
        {
            return $(Locators.cartassert);
        }

        get CheckOutInfo()
        {
            return $(Locators.checkoutinfo);
        }

        get FirstName()
        {
            return $(Locators.firstname);
        }

        get LastName()
        {
            return $(Locators.lastname);
        }

        get PostalCode()
        {
            return $(Locators.postalcode);
        }

        get Continue()
        {
            return $(Locators.continue);
        }

        get CheckOutOverView()
        {
            return $(Locators.checkoutoverview);
        }

        get SummaryPrice()
        {
            return $(Locators.summaryprice);
        }

        get PaymentInformation()
        {
            return $(Locators.paymentinformation);
        }

        get ShippingInformation()
        {
            return $(Locators.shippinginformation);
        }

        get Tax()
        {
            return $(Locators.tax);
        }

        get Total()
        {
            return $(Locators.total);
        }

        get Finish()
        {
            return $(Locators.finish);
        }

        get CheckOutComplete()
        {
            return $(Locators.checkoutcomplete);
        }

        get ThankYou()
        {
            return $(Locators.thankyou);
        }

        get Logo()
        {
            return $(Locators.logo);
        }

        get HomePage()
        {
            return $(Locators.homepage);
        }
        
        get TextAtoZ()
        {
            return $(Locators.textAtoZ);
        }


}



module.exports = new Code();