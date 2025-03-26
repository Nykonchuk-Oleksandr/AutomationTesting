// Завдання 1: Налаштування проекту
// Ініціалізація проекту
// npm init -y
// npm install selenium-webdriver jest

const { Builder, By, Key, until } = require('selenium-webdriver');

// Налаштування Jest у package.json
// "scripts": {
//   "test": "jest"
// }

describe("Wikipedia Tests", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  // Завдання 2: Базовий тест для Wikipedia
  test("Перевірка наявності елементів на головній сторінці Wikipedia", async () => {
    await driver.get("https://www.wikipedia.org");
    
    // Перевірка поля пошуку
    const searchBox = await driver.findElement(By.name("search"));
    expect(await searchBox.isDisplayed()).toBe(true);
    
    // Перевірка логотипу
    const logo = await driver.findElement(By.css(".central-textlogo__image"));
    expect(await logo.isDisplayed()).toBe(true);
  });

  // Завдання 3: Виконання інтерактивних дій
  test("Пошук терміну 'Selenium' у Wikipedia", async () => {
    await driver.get("https://www.wikipedia.org");
    const searchBox = await driver.findElement(By.name("search"));
    await searchBox.sendKeys("Selenium", Key.RETURN);
    
    await driver.wait(until.titleContains("Selenium"), 5000);
    const title = await driver.getTitle();
    expect(title).toContain("Selenium");
  });

  // Завдання 4: Використання різних способів доступу до елементів
  test("Перевірка статті 'Selenium' у Wikipedia", async () => {
    await driver.get("https://en.wikipedia.org/wiki/Selenium");
    
    // Перевірка заголовка статті
    const titleElement = await driver.findElement(By.xpath("//h1"));
    const titleText = await titleElement.getText();
    expect(titleText).toBe("Selenium");

    // Отримання посилань меню
    const navLinks = await driver.findElements(By.css("#mw-panel a"));
    for (let link of navLinks) {
      const href = await link.getAttribute("href");
      expect(href).toContain("wikipedia.org");
    }
  });

  // Завдання 5: Додаткові дії та перевірки
  test("Клік на внутрішнє посилання та перевірка URL", async () => {
    await driver.get("https://en.wikipedia.org/wiki/Selenium");
    
    const firstLink = await driver.findElement(By.css(".mw-parser-output p a"));
    const linkText = await firstLink.getText();
    await firstLink.click();
    
    await driver.wait(until.titleContains(linkText), 5000);
    const newUrl = await driver.getCurrentUrl();
    expect(newUrl).toContain(linkText.replace(/\s/g, "_"));
  });

  test("Перевірка CSS властивостей", async () => {
    await driver.get("https://www.wikipedia.org");
    const logo = await driver.findElement(By.css(".central-textlogo__image"));
    const fontSize = await logo.getCssValue("font-size");
    expect(fontSize).toBeDefined();
  });
});
