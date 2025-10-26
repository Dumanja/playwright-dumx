import { Locator, Page } from '@playwright/test';

export class BasePage {
    constructor(public page: Page) {} // BasePage constructor

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }
}