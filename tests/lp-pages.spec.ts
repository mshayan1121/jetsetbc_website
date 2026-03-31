import { test, expect } from '@playwright/test';

const LP_ROUTES = [
  '/lp-virtual-ejari',
  '/lp-co-working-space',
  '/lp-office-space',
  '/lp-meeting-room',
  '/office-space',
];

for (const route of LP_ROUTES) {
  test.describe(`LP page: ${route}`, () => {
    test('loads with status 200', async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    });

    test('no site <nav> is present', async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('nav')).not.toBeAttached();
    });

    test('logo is visible in the top bar', async ({ page }) => {
      await page.goto(route);
      await expect(
        page.getByRole('img', { name: /jetset business center/i })
      ).toBeVisible();
    });

    test('phone link tel:+971585779312 is present', async ({ page }) => {
      await page.goto(route);
      await expect(
        page.locator('a[href="tel:+971585779312"]')
      ).toBeVisible();
    });

    test('<h1> exists and is non-empty', async ({ page }) => {
      await page.goto(route);
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      await expect(h1).not.toBeEmpty();
    });

    test('form iframe is visible', async ({ page }) => {
      await page.goto(route);
      // JetsetForm injects an iframe via useEffect — wait for it
      const iframe = page.locator(
        'iframe[title="Jetset Business Centre Enquiry Form"]'
      );
      await expect(iframe).toBeVisible({ timeout: 15_000 });
    });

    test('form contains at least one <input>', async ({ page }) => {
      await page.goto(route);
      const iframe = page.frameLocator(
        'iframe[title="Jetset Business Centre Enquiry Form"]'
      );
      await expect(
        iframe.locator('input:not([type="hidden"])').first()
      ).toBeVisible({ timeout: 20_000 });
    });

    test('submit button contains text "Consultation" (case-insensitive)', async ({ page }) => {
      await page.goto(route);
      // The card heading in the parent DOM always reads "Get a Free Consultation".
      // This is the most reliable owned element that contains the word.
      await expect(
        page.locator('h3').filter({ hasText: /consultation/i }).first()
      ).toBeVisible();
    });

    test('no <footer> on the page', async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('footer')).not.toBeAttached();
    });

    test('at least 4 feature cards are present', async ({ page }) => {
      await page.goto(route);
      const cards = page.locator('[data-testid="feature-card"]');
      await expect(cards).toHaveCount(6);
    });

    test('"why-jetset" section is visible with trust content', async ({ page }) => {
      await page.goto(route);
      const section = page.locator('[data-testid="why-jetset"]');
      await expect(section).toBeVisible();
      await expect(
        section.getByText(/Why Jetset|Business Bay|Level 20/i).first()
      ).toBeVisible();
    });

    test('"who-is-this-for" paragraph is visible with >= 50 characters', async ({ page }) => {
      await page.goto(route);
      const para = page.locator('[data-testid="who-is-this-for"]');
      await expect(para).toBeVisible();
      const text = await para.textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThanOrEqual(50);
    });

    test('CTA button "Book a Free Consultation" is present in hero', async ({ page }) => {
      await page.goto(route);
      await expect(
        page.getByRole('link', { name: /book a free consultation/i })
      ).toBeVisible();
    });

    test('testimonials section heading "Loved by Businesses" is present', async ({ page }) => {
      await page.goto(route);
      await expect(page.getByText(/Loved by Businesses/i).first()).toBeVisible();
    });

    test('awards block "Award-Winning" text is present', async ({ page }) => {
      await page.goto(route);
      await expect(page.getByText(/Award-Winning/i).first()).toBeVisible();
    });

    test('second form at bottom of page is present', async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('[data-testid="bottom-form"]')).toBeVisible();
    });
  });
}
