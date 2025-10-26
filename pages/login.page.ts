import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        super(page); // Call BasePage constructor
        this.usernameInput = page.getByPlaceholder('Unesi e-mail adresu');
        this.passwordInput = page.getByPlaceholder('Unesi lozinku');
        this.nextButton = page.getByRole('button', { name: 'Dalje' });
        this.signInButton = page.getByRole('button', { name: 'Prijavi se' });
    }

    async gotoLoginPage(): Promise<void> {
        await this.goto("/login");
    }

    async loginUsernamePassword(username: string, password: string): Promise<void> {
        await this.waitForVisible(this.usernameInput);
        await this.usernameInput.fill(username);
        await this.nextButton.click();
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }    

}