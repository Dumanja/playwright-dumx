import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PASSWORD, USERNAME } from '../playwright.config';
import { DashboardPage } from '../pages/dashboard.page';
import { AdminPage } from '../pages/admin.page';

test('Create system user Admin in the OrangeHRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);

    // Login to OrangeHRM
    await loginPage.goto(loginPage.url);
    await loginPage.login(USERNAME, PASSWORD);
    await expect(page).toHaveURL(dashboardPage.url);

    // Navigate to Admin Page
    await adminPage.goto(adminPage.url);
    await expect(page).toHaveURL(adminPage.url);

    // Create system user Admin
    await adminPage.createSystemUser('Admin');
});
