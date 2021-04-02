import puppetteer from 'puppeteer';

jest.setTimeout(30000);// default puppeteer timeout
describe('popover check', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('check popover', async () => {
    await page.goto(baseUrl);
    const submit = await page.$('.btn');
    submit.click();
    await page.waitForSelector('.popover:not(.hidden)');
  });
});
