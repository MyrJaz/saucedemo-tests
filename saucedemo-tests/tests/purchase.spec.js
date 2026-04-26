const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');

test(qase(1, 'Compra en SauceDemo'), async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Verificar botón "Add to cart"
  await expect(page.locator('.btn_inventory').first()).toBeVisible();

  // 3. Agregar producto al carrito
  await page.locator('.btn_inventory').first().click();

  // 4. Ir al carrito
  await page.click('.shopping_cart_link');

  // 5. Checkout
  await page.click('#checkout');

  // 6. Llenar datos de envío
  await page.fill('#first-name', 'Myriam');
  await page.fill('#last-name', 'Muruato Sánchez');
  await page.fill('#postal-code', '31216');
  await page.click('#continue');

  // 7. Finalizar compra
  await page.click('#finish');

  // 8. Verificar confirmación
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});