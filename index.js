const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dpt%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=pt-BR&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin');

  //await page.click('[aria-label="Fazer login"]');

  //await page.click('[name="identifier"]');

  await page.evaluate(async() => {
    try {
      document.getElementsByClassName("whsOnd zHQkBf")[0].value = "paulinho_vtr@live.com";
      document.getElementsByClassName("VfPpkd-RLmnJb")[0].click();
      console.log("Entrou");
    } catch (e) {
        console.log("Erro ao inserir dados: " + e.message);
    }
  });

  // await page.type('[name="identifier"]', 'brunolfsports@gmail.com')
  // await page.click('[jsname="LgbsSe"]')


  // await browser.close();
})();