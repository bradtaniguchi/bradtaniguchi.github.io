import { test, expect, Page } from '@playwright/test';

/**
 * Map of tests by their name, to be used by the two different types of
 * tests. By default we assume we are in the "desktop" mode.
 *
 * page.setViewportSize({ width: 600, height: 600 });
 */
const tests: Record<string, (params: { page: Page }) => Promise<void>> = {
  'has header title and link': async ({ page }) => {
    await page.goto('/');

    const headerLink = page.locator('header >> a[href="/"]');
    const headerTitle = page.locator('header >> a >> h1');

    await test.step('are visible', async () => {
      await expect(headerTitle).toBeVisible();
      await expect(headerLink).toBeVisible();
    });
  },
  'has navigation nav': async ({ page }) => {
    await page.goto('/');

    const navMenu = page.locator('header >> nav');

    await test.step('is visible', async () => {
      await expect(navMenu).toBeVisible();
    });

    await test.step('has project', async () => {
      const projectLink = navMenu.locator('a[href="/projects"]');
      await expect(projectLink).toBeVisible();
    });

    await test.step('has blog', async () => {
      const blogLink = navMenu.locator('a[href="/blog"]');
      await expect(blogLink).toBeVisible();
    });

    await test.step('has about', async () => {
      const aboutLink = navMenu.locator('a[href="/about"]');
      await expect(aboutLink).toBeVisible();
    });
  },
  'has theme toggle': async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('#theme-toggle-button');

    await test.step('is visible', async () => {
      await expect(themeToggle).toBeVisible();
    });
  },
};
test.describe('desktop', () => {
  // playwrights default screen size is:
  // 1280x720
  test('has header title and link', tests['has header title and link']);

  test('has navigation nav', tests['has navigation nav']);

  test('has theme toggle', tests['has theme toggle']);

  // TODO: test the actual theme toggle visually
});

test.describe('mobile', () => {
  // mobile specific tests, to test the menu button
  test('has header title and link', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 600 });
    await tests['has header title and link']({ page });
  });

  test('has navigation nav', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 600 });
    await tests['has navigation nav']({ page });
  });

  test('has theme toggle', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 600 });
    await tests['has theme toggle']({ page });
  });
});
