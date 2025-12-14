import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { APP_BASE } from '../playwright.config';
import { text } from 'stream/consumers';

export class AdminPage extends BasePage {
    readonly url: string;
    readonly headingTitle: Locator;
    readonly addButton: Locator;
    readonly userRoleDropdown: Locator;
    readonly adminRole: (role: string) => Locator;


    constructor(page: Page) {
        super(page); // Call BasePage constructor
        this.url = `${APP_BASE}/admin/viewSystemUsers`;
        this.headingTitle = page.getByRole('heading', {level: 6, name: 'Admin'});
        this.addButton = page.getByRole('button', {name: 'Add'});
        this.userRoleDropdown = page.locator('xpath=//label[contains(text(), "User Role")]/parent::div/following-sibling::div');
        this.adminRole = (role: string) => page.getByText(role, { exact: true });
    }

    async createSystemUser(role: string): Promise<void> {
        await this.addButton.click();
        await this.userRoleDropdown.click();
        this.adminRole(role);
    } 
}