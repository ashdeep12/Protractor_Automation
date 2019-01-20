import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

When(/^I type "(.*?)"$/,{timeout:10000}, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

When(/^I click on search button$/,{timeout:10000}, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then(/^I click on google logo$/,{timeout:10000}, async () => {
    await search.logo.click();
});
