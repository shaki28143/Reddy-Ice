import { ReddyIcePage } from './app.po';

describe('reddy-ice App', () => {
  let page: ReddyIcePage;

  beforeEach(() => {
    page = new ReddyIcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
