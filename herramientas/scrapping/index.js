const puppeteer = require('puppeteer');

(async () => {
  // Nuestro codigo
  console.log('Lanzamos Navegador');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');

    return h1.innerText;
  });

  console.log(titulo1);

  console.log('Cerramos Navegador');
  browser.close();
  console.log('Navegador Cerrado');
})();