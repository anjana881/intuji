import productPage from "../pages/products.cy";


describe("Product page", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/products");
  });
     const productobj = new productPage();
  it("Search Product by Keyword", () => {
 
    productobj.searchInput("Tshirt");
    productobj.submitSearch();
  });
  it("Search Product by Category", () => {
    productobj.browseCategoryInput();
    productobj.subcategoryInput();
  });

});
