const BasePage = require("./base_page/base_page");

const HomePage = require("./home_page/home_page");
const RegionPage = require("./region_page/region_page");
const ProductsPage = require("./products_page/products_page");
const SearchPage = require("./search_page/search_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Region":
                return new RegionPage();
            case "Products":
                return new ProductsPage();
            case "Search":
                return new SearchPage();
            default:
                return new BasePage();
        };
    };
};

module.exports = PageFactory;