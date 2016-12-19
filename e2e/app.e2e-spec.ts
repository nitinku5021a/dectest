import { DectestPage } from './app.po';

describe('dectest App', function() {
  let page: DectestPage;

  beforeEach(() => {
    page = new DectestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
