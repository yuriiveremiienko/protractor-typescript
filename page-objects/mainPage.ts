import {$$, browser, ElementFinder, Key} from 'protractor';
import { promise as wdPromise } from 'selenium-webdriver';

export class MainPage {
    protected destinationField: ElementFinder;
    protected checkInField: ElementFinder;
    protected checkInMonth: ElementFinder;
    protected checkInDay: ElementFinder;
    protected checkInYear: ElementFinder;
    protected checkOutField: ElementFinder;
    protected checkOutMonth: ElementFinder;
    protected checkOutDay: ElementFinder;
    protected checkOutYear: ElementFinder;
    protected searchButton: ElementFinder;

    public constructor() {
        this.destinationField = $$('#ss').first();

        this.checkInField = $$('.--checkin-field').first();
        this.checkInMonth = this.checkInField.$$('[name="checkin_month"]').first();
        this.checkInDay = this.checkInField.$$('[name="checkin_monthday"]').first();
        this.checkInYear = this.checkInField.$$('[name="checkin_year"]').first();

        this.checkOutField = $$('.--checkout-field').first();
        this.checkOutMonth = this.checkOutField.$$('[name="checkout_month"]').first();
        this.checkOutDay = this.checkOutField.$$('[name="checkout_monthday"]').first();
        this.checkOutYear = this.checkOutField.$$('[name="checkout_year"]').first();

        this.searchButton = $$('.sb-searchbox__button').first();
    }

    public navigate(): wdPromise.Promise<void> {
        return browser.get('/');
    }

    public async setDestination(destination: string): Promise<void> {
        await this.destinationField.clear();
        await this.destinationField.sendKeys(destination, Key.TAB);
    }

    public submitSearch(): wdPromise.Promise<void> {
        return this.searchButton.click();
    }

    /**
     * @param {string} date Date in format 'DD/MM/YYYY'.
     */
    public async setCheckInDate(date: string): Promise<void> {
        const day = date.substring(0, 2);
        const  month = date.substring(3, 5);
        const year = date.substring(6, 10);

        await this._setCheckInMonth(month);
        await this._setCheckInDay(day);
        await this._setCheckInYear(year);
    }

    /**
     * @param {string} date Date in format 'DD/MM/YYYY'.
     */
    public async setCheckOutDate(date: string): Promise<void> {
        const day = date.substring(0, 2);
        const  month = date.substring(3, 5);
        const year = date.substring(6, 10);

        await this._setCheckOutMonth(month);
        await this._setCheckOutDay(day);
        await this._setCheckOutYear(year);
    }

    private async _setCheckInMonth(month: string): Promise<void> {
        await this.checkInMonth.clear();
        await this.checkInMonth.sendKeys(month);
    }

    private async _setCheckInDay(day: string): Promise<void> {
        await this.checkInDay.clear();
        await this.checkInDay.sendKeys(day);
    }

    private async _setCheckInYear(year: string): Promise<void> {
        await this.checkInYear.clear();
        await this.checkInYear.sendKeys(year);
    }

    private async _setCheckOutMonth(month: string): Promise<void> {
        await this.checkOutMonth.clear();
        await this.checkOutMonth.sendKeys(month);
    }

    private async _setCheckOutDay(day: string): Promise<void> {
        await this.checkOutDay.clear();
        await this.checkOutDay.sendKeys(day);
    }

    private async _setCheckOutYear(year: string): Promise<void> {
        await this.checkOutYear.clear();
        await this.checkOutYear.sendKeys(year);
    }
}