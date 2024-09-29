const {By, Builder} = require('selenium-webdriver')

async function weatherShopperTest() {
    const driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://weathershopper.pythonanywhere.com/')

    let temperature = await driver.findElement(By.id('temperature')).getText();
    temperature = temperature.slice(0, 2)
    temperature = temperature.trim()

    let moisturizerBtn = await driver.findElement(By.linkText('Buy moisturizers'))
    let sunscreenBtn = await driver.findElement(By.linkText('Buy sunscreens'))
    
    if (Number(temperature) < 19) {
        moisturizerBtn.click();
    } else if (Number(temperature) > 34) {
        sunscreenBtn.click();
    }

    // await driver.quit()
}

weatherShopperTest();

