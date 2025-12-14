import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { APP_BASE } from '../playwright.config';

export class DashboardPage extends BasePage {
    readonly url: string;
    readonly headingText: Locator;

    constructor(page: Page) {
        super(page); // Call BasePage constructor
        this.url = `${APP_BASE}/dashboard/index`;
        this.headingText = page.getByRole('heading', {level: 6, name: 'Dashboard'});
    }
}