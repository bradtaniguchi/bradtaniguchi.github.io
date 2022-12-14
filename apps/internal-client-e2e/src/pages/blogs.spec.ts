import { test, expect } from '@playwright/test';

test('blogs table is shown', async ({ page }) => {
  await page.goto('/blog');

  const blogsTable = page.locator('h2');

  await test.step('table is visible', async () => {
    await expect(blogsTable).toBeVisible();
  });
});

test('blogs table has 5 elements shown by default', async ({ page }) => {
  await page.goto('/blog');

  await test.step('list has 5 elements by default', async () => {
    await page.locator('li').first().waitFor();
    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(5);
  });
});

test('show-more expands the list of blogs by 5', async ({ page }) => {
  await page.goto('/blog');

  const showMore = page.locator('text="Show More"');

  await test.step('showMore is visible', async () => {
    await expect(showMore).toBeVisible();
  });

  await test.step('timeline has 5 elements by default', async () => {
    await page.locator('li').first().waitFor();
    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(5);
  });

  await test.step('clicking showMore expands the list by 5', async () => {
    await showMore.click();
    // lower timeout, as this should be quick, but we need to wait
    await page.locator('li').nth(4).waitFor({ timeout: 1000 });
    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(10);
  });
});

test('searching changes results', async ({ page }) => {
  await page.goto('/blog');

  const searchButton = page.locator('[aria-label="show search"]');

  await test.step('search button is visible', async () => {
    await expect(searchButton).toBeVisible();
  });

  await test.step('clicking search button shows search input', async () => {
    await searchButton.click();
    await expect(page.locator('input[name="search"]')).toBeVisible();
  });

  await test.step('searching for "Hello World" shows 1 result', async () => {
    const searchInput = page.locator('input[name="search"]');
    await searchInput.type('Hello World', { delay: 100 });

    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(1);
  });
  // TODO: add show-more + search test
});

test('searching resets show-more', async ({ page }) => {
  await page.goto('/blog');

  const searchButton = page.locator('[aria-label="show search"]');

  await test.step('search button is visible', async () => {
    await expect(searchButton).toBeVisible();
  });

  await test.step('clicking search button shows search input', async () => {
    await searchButton.click();
    await expect(page.locator('input[name="search"]')).toBeVisible();
  });

  await test.step('searching for "Hello World" shows 1 result', async () => {
    const searchInput = page.locator('input[name="search"]');
    await searchInput.type('Hello World', { delay: 100 });

    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(1);
  });

  await test.step('closing search, clears values and re-sets total shown', async () => {
    const closeSearch = page.locator('button[aria-label="close search"]');
    await closeSearch.click();

    // lower timeout, as this should be quick, but we need to wait
    await page.locator('li').nth(4).waitFor({ timeout: 1000 });
    const listItems = await page.locator('li').count();
    expect(listItems).toEqual(5);
  });
});
