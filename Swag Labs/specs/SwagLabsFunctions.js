


class Function
{

async setUp()
{
    return browser.url("https://www.saucedemo.com/inventory.html");
}

async title()
{
    return browser.getTitle();
}

async wait()
{
    return browser.pause(3000);
}




}


module.exports = new Function();