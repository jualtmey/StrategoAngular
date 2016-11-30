import { StrategoAngularPage } from './app.po';

describe('stratego-angular App', function() {
  let page: StrategoAngularPage;

  beforeEach(() => {
    page = new StrategoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
