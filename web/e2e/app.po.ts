import { browser, by, element } from 'protractor';

export class AngularMaterialAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('byl-root h1')).getText();
  }
}
