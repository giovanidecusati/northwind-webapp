import { NorthwindWebappPage } from './app.po';

describe('northwind-webapp App', () => {
  let page: NorthwindWebappPage;

  beforeEach(() => {
    page = new NorthwindWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
