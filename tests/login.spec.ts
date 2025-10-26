import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PASSWORD, USERNAME } from '../playwright.config';

test('Login with username/password', async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginUsernamePassword(USERNAME, PASSWORD);

    await expect(page).toHaveURL(`${baseURL}`);
});
