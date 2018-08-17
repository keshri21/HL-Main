import { HlUiPage } from './app.po';

describe('hl-ui App', function() {
  let page: HlUiPage;

  beforeEach(() => {
    page = new HlUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
