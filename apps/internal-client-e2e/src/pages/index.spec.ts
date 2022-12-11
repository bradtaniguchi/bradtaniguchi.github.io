import { test, expect } from '@playwright/test';

test('profile picture', async ({ page }) => {
  await page.goto('/');

  const profilePicture = page.locator('img[src="/img/github-avatar.jpg"]');

  await test.step('is visible, and has alt', async () => {
    await expect(profilePicture).toBeVisible();
    expect(await profilePicture.getAttribute('alt')).toBeTruthy();
  });
});

test('profile links to github', async ({ page }) => {
  await page.goto('/');

  const profileLink = page.locator('[aria-label="Github profile url"]');

  await test.step('profile is visible', async () => {
    await expect(profileLink).toBeVisible();
  });

  await test.step('profile links to github', async () => {
    expect(await profileLink.getAttribute('href')).toEqual(
      'https://github.com/bradtaniguchi'
    );
  });
});

test('activity list shows 5 by default', async ({ page }) => {
  await page.goto('/');

  const timeline = page.locator('[data-testid="timeline"]');

  await test.step('timeline is visible', async () => {
    await expect(timeline).toBeVisible();
  });

  await test.step('timeline has 5 elements by default', async () => {
    await timeline.locator('.Timeline-Item').first().waitFor();
    const listItems = await timeline.locator('.Timeline-Item').count();
    expect(listItems).toEqual(5);
  });
});

test('show-more expands the list of activities by 5', async ({ page }) => {
  await page.goto('/');

  const timeline = page.locator('[data-testid="timeline"]');
  const showMore = page.locator('text="Show More"');

  await test.step('timeline and showMore are visible', async () => {
    await expect(timeline).toBeVisible();
    await expect(showMore).toBeVisible();
  });

  await test.step('timeline has 5 elements by default', async () => {
    await timeline.locator('.Timeline-Item').first().waitFor();
    const listItems = await timeline.locator('.Timeline-Item').count();
    expect(listItems).toEqual(5);
  });

  await test.step('clicking showMore expands the list by 5', async () => {
    await showMore.click();
    await timeline.locator('.Timeline-Item').first().waitFor();
    const listItems = await timeline.locator('.Timeline-Item').count();
    expect(listItems).toEqual(10);
  });
});
