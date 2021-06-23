import { afterAll, beforeAll } from "@jest/globals";
import { Builder, Capabilities, By } from "selenium-webdriver";

const { test } = require('@jest/globals');

const chromedriver = require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async ()=> {
    await driver.get('http://localhost:5500/movieList/index.html')
});

afterAll(async ()=> {
    await driver.quit()
});

test('Add a movie to the page', async () => {
    let movieBar = await driver.findElement(By.name('movies'));

    await movieBar.sendKeys('Pans Labrynth\n');

    await movieBar.clear();

    await driver.findElement(By.xpath('//button[contains (text(), "x")]')).click();

    await driver.sleep(5000);

    movieBar = await driver.findElement(By.name('movies'));

    await movieBar.sendKeys('Cabin in the Woods\n');
    await movieBar.sendKeys('test\n');

    await movieBar.clear();

    await driver.findElement(By.xpath('//span[contains(@class, "n")]')).click();

    await driver.sleep(5000);

})

