// import {expectedBooks} from '.../fixtures/books'

import { expectedBooks } from "../../fixtures/books";
describe("Book page response test from api", () => {
  it.skip("BookList response Validation from commands.js file", () => {
    cy.intercept("GET", "/BookStore/v1/Books").as("getBooks");
    cy.visit("https://demoqa.com/books");

    cy.wait("@getBooks").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      //response stored in books variable
      const books = interception.response.body.books;
      books.forEach((book, index) => {
        cy.validateBooksData(index, book);
      });
    });
  });

  it("BookList Response Validation from fixture data", () => {
    cy.visit("https://demoqa.com/books");
    //assert all the data that are passed in books.js file
    expectedBooks.forEach((book) => {
      cy.contains(".rt-td", book.title)
        .parents(".rt-tr-group")
        .within(() => {
          cy.get(".rt-td").eq(2).should("have.text", book.author);
          cy.get(".rt-td").eq(3).should("have.text", book.publisher);
        }
      );
    });

    //assert only one data passed in books.js file

    const secondbook = expectedBooks[1];

    cy.contains(".rt-td", secondbook.title)
      .parents(".rt-tr-group")
      .within(() => {
        cy.get(".rt-td").eq(2).should("have.text", secondbook.author);
        cy.get(".rt-td").eq(3).should("have.text", secondbook.publisher);
      });
  });
});
