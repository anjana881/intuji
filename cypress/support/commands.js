Cypress.Commands.add("validateBooksData", (index, book) => {
  cy.get(".rt-tbody .rt-tr-group")
    .eq(index)
    .within(() => {
      cy.get(".rt-td")
        .eq(1)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.title);
        });

      cy.get(".rt-td")
        .eq(2)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.author);
        });

      cy.get(".rt-td")
        .eq(3)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.publisher);
        });
    });
});
//Add to Cart
Cypress.Commands.add("addToCart", (productId,quantity) => {
  for(let i=0;i<quantity;i++){
  cy.get(`a.add-to-cart[data-product-id="${productId}"]:visible`).click();
   cy.get(".btn.btn-success.close-modal.btn-block").click();
  }
});
//Verify Product qantity command
Cypress.Commands.add("verifyProductInCart",(productName,expectedQuantity) =>{
cy.visit("https://automationexercise.com/view_cart")
cy.get('.cart_description').find("a[href='/product_details/1']").should("have.text",productName);
cy.get('.cart_quantity').find(".disabled").should("have.text",expectedQuantity);
}
) 

