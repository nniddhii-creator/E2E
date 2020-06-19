'use strict'; // necessary for es6 output in node

import { browser } from 'protractor';
import { filterField, bookList, bookCardTitle, bookTitle, bookAuthor, saveButton,
  cancelButton, welcomeMessage, deleteBookButtons } from './pom/library-page';

describe('Library App', () => {
  beforeEach(() => {
    return browser.get('/');
  });

  it('Verify that user is on the library page', () => {
    expect(browser.getTitle()).toBe('E2eTest'); // verify the page title
    expect(welcomeMessage().getText()).toBe('Welcome to our Library!'); // verify the welcome message in the Library home page
  });

  it('Filtering books by name', () => {
    filterField().sendKeys('in'); // filter library by text
    expect(bookList().count()).toEqual(3); // validate if the filter result has 3 items
  });

  it('Search for a book by name and verify the details of the book', () => {
    filterField().sendKeys('infinite jest'); // search for infinite jest
    expect(bookList().count()).toEqual(1); // check if there is only one item in the search result

    bookList().first().click(); // click on the first book in the list
    expect(bookCardTitle().getText()).toBe('infinite jest'); // verify the book name from the header

    // here you can verify other fields if you want like
    expect(bookTitle().getAttribute('value')).toBe('infinite jest');
    expect(bookAuthor().getAttribute('value')).toBe('1');
  });

  it('Edit the book title and save the book', () => {
    filterField().sendKeys('infinite jest'); // search for infinite jest
    bookList().first().click(); // click on the first book in the list

    bookTitle().clear(); // clear book title field
    bookTitle().sendKeys('nidhi-test'); // update title of the book
    saveButton().click(); // save book

    expect(bookCardTitle().getText()).toBe('nidhi-test'); // verify the updated book header
    expect(bookTitle().getAttribute('value')).toBe('nidhi-test'); // verify the updated book title
  });

  it('Edit the book title and do not save the book', () => {
    filterField().sendKeys('desert solitaire'); // search for infinite jest
    bookList().first().click(); // click on the first book in the list

    bookTitle().clear(); // clear book title field
    bookTitle().sendKeys('nidhi-test-cancel'); // update title of the book
    cancelButton().click(); // save book

    expect(bookCardTitle().getText()).toBe('desert solitaire'); // verify that book header is still the old one
    expect(bookTitle().getAttribute('value')).toBe('desert solitaire'); // verify that book title is still the old one
  });

  it('Deleting the last book in the list', () => {
    expect(bookList().count()).toEqual(7); // validate if initially we have 7 books
    deleteBookButtons().last().click(); // delete the last book
    expect(bookList().count()).toEqual(6); // validate if we have total of 6 books after deleting the last book
  });
});
