import { test } from "@playwright/test"

test("Register user", async({ page }) => {

    //Register
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[normalize-space()='My account']");
    await page.click("//span[normalize-space()='Register']");

    await page.fill("input[id='input-firstname']", "Jane");
    await page.fill("input[id='input-lastname']","Doe");
    await page.fill("input[id='input-email']", "janedoeuble@email.com");
    await page.fill("input[id='input-telephone']", "+6391234567890");
    await page.fill("input[id='input-password']","pass123");
    await page.fill("input[id='input-confirm']", "pass123");

    await page.click("label[for='input-newsletter-no']");
    await page.click("label[for='input-agree']");

    await page.click("input[value='Continue']");
})