class productPage{
    elements={
        searchInput :()=>cy.get("#search_product"),
        submitSearch :()=> cy.get("#submit_search"),
        browseCategoryInput :()=>  cy.get('#accordian a[href="#Women"]'),
        subcategoryInput:()=> cy.get('#Women a[href="/category_products/1"]')


    }
        searchInput(search){
            this.elements.searchInput().type(search);

        }

submitSearch(){
    this.elements.submitSearch().click();
}
browseCategoryInput(){
    this.elements.browseCategoryInput().click();

}
subcategoryInput(){
    this.elements.subcategoryInput().click();
}

}

export default productPage;
