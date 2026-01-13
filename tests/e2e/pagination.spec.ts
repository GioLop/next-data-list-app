import { test, expect } from "@playwright/test"

test('Load first 20 records after client data loads', async ({ page }) => {
    await page.goto('/');
    
    const clientsList = page.getByTestId('clients-list');
    const items = clientsList.locator('li');

    await expect(items).toHaveCount(20);
});

test('Click to next button and verify the content has changed', async ({ page }) => {
    await page.goto('/');

    const firstClientsList = page.getByTestId('clients-list');
    const firstItems = firstClientsList.locator('li');
    const firstItemsText = await firstItems.allTextContents();

    const nextButtons = page.getByText('Next >>');
    await nextButtons.first().click();
    
    const secondClientsList = page.getByTestId('clients-list');
    const secondItems = secondClientsList.locator('li');
    const secondItemsText = await secondItems.allTextContents();

    await expect(secondItems).toHaveCount(20);
    expect(secondItemsText).not.toEqual(firstItemsText);

    await nextButtons.last().click();
    const thirdClientsList = page.getByTestId('clients-list');
    const thirdItems = thirdClientsList.locator('li');
    const thirdItemsText = await thirdItems.allTextContents();

    await expect(secondItems).toHaveCount(20);
    expect(thirdItemsText).not.toEqual(secondItemsText);
    expect(thirdItemsText).not.toEqual(firstItemsText);
});

