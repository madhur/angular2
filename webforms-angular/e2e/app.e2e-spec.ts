import { WebformsAngularPage } from './app.po';

describe('webforms-angular App', () => {
  let page: WebformsAngularPage;

  beforeEach(() => {
    page = new WebformsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
