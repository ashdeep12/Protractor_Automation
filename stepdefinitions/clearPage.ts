import { SearchPageObject } from "../pages/searchPage";
const { Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

Then(/^I clear the search text$/,{timeout:10000}, async () => {
     await search.searchTextBox.clear();
});
