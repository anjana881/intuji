describe("Add to Cart page", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/products");
  });

  it("Add to Cart", () => {
    //Adding first product to cart fro 5 times 
    cy.addToCart("1","5");
    //verfiy the quantity of the product is 5
    cy.verifyProductInCart('Blue Top',"5");
    
   });
});
