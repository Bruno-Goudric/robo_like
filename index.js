const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/');

  await page.click('[aria-label="Fazer login"]');

  await page.click('[name="identifier"]')
  // await page.type('[name="identifier"]', 'brunolfsports@gmail.com')
  // await page.click('[jsname="LgbsSe"]')


  // await browser.close();
})();