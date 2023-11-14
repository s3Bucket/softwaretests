const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

it('selenium test', async() => {
  var searchString = "Techstarter";
  let driver = await new webdriver.Builder().forBrowser("chrome").build();

  try {
   //To fetch http://google.com from the browser with our code.
   await driver.get('https://www.google.de');
   await driver.findElement(webdriver.By.id("L2AGLb")).sendKeys(webdriver.Key.RETURN);
   await new Promise(r => setTimeout(r, 1500));
   //To send a search query by passing the value in searchString.
   await driver.findElement(webdriver.By.name("q")).sendKeys(searchString);
   await new Promise(r => setTimeout(r, 1500));
   await driver.findElement(webdriver.By.name("q")).sendKeys(webdriver.Key.RETURN);
   await new Promise(r => setTimeout(r, 1500));
   //Verify the page title and print it
   var title = await driver.getTitle();
   expect(title).toBe("Techstarter - Google Suche");
  }finally{
   await driver.quit();
  }

}, 60000);