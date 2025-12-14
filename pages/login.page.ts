import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { APP_BASE } from '../playwright.config';

export class LoginPage extends BasePage {
    readonly url: string;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly headingTitle: Locator;

    constructor(page: Page) {
        super(page); // Call BasePage constructor
        this.url = `${APP_BASE}/auth/login`;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.headingTitle = page.getByRole('heading', {level: 5, name: 'Login'});
    }

    async login(username: string, password: string): Promise<void> {
        await this.waitForVisible(this.usernameInput);
        await this.usernameInput.fill(username);
        await this.waitForVisible(this.passwordInput);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }    

}