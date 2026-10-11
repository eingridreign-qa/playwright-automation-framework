import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

    const browser = await chromium.launch(
        {
            headless: false
        }
    );

    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://ecommerce-playground.lambdatest.io/");
    await page1.hover("//a[@data-toggle='dropdown']//span[normalize-space()='My account']");
    await page1.click("//span[normalize-space()='Login']"); 

    await page1.fill("input[id='input-email']", "janedoeuble@email.com");
    await page1.fill("input[id='input-password']", "pass123"); 
    await page1.click("input[value='Login']");

    const page2 = await context.newPage();
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await page2.hover("//a[@data-toggle='dropdown']//span[normalize-space()='My account']");

    const context3 = await browser.newContext();
    const page3 = await context3.newPage();
    await page3.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await page3.hover("//a[@data-toggle='dropdown']//span[normalize-space()='My account']");
})