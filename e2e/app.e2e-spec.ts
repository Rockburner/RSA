import { RsaTestPage } from './app.po';

describe('rsa-test App', function() {
  let page: RsaTestPage;

  beforeEach(() => {
    page = new RsaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
