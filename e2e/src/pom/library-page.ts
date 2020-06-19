import { element, by } from 'protractor';

const filterField = () => {
    return element(by.id('mat-input-0'));
};

const bookList = () => {
    return element.all(by.className('mat-line'));
};

const bookCardTitle = () => {
    return element(by.className('mat-card-title'));
};

const bookTitle = () => {
    return element(by.id('mat-input-1'));
};

const bookAuthor = () => {
    return element(by.id('mat-input-2'));
};

const bookPublisher = () => {
    return element(by.id('mat-input-3'));
};

const bookYear = () => {
    return element(by.id('mat-input-4'));
};

const saveButton = () => {
    return element(by.xpath('//button[@class=\'mat-button mat-button-base mat-primary\']'));
};

const cancelButton = () => {
        return element(by.xpath('//button[@class=\'mat-button mat-button-base\']'));
};

const welcomeMessage = () => {
    return element(by.xpath('//body/app-root/div[1]'));
};

const deleteBookButtons = () => {
    return element.all(by.className('mat-icon notranslate material-icons mat-icon-no-color'));
};

export {
    filterField,
    bookList,
    bookCardTitle,
    bookTitle,
    bookAuthor,
    bookPublisher,
    bookYear,
    cancelButton,
    saveButton,
    welcomeMessage,
    deleteBookButtons
};
