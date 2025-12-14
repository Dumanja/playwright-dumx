import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PASSWORD, USERNAME } from '../playwright.config';
import { DashboardPage } from '../pages/dashboard.page';

test('Login successfully as Admin to the OrangeHRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto(loginPage.url);
    await expect(loginPage.headingTitle).toBeVisible();
    await loginPage.login(USERNAME, PASSWORD);

    await expect(page).toHaveURL(dashboardPage.url);
    await expect(dashboardPage.headingTitle).toBeVisible();
});
