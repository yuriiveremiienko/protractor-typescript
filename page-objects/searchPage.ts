import {$$, ElementArrayFinder} from 'protractor';
import { promise as wdPromise } from 'selenium-webdriver';

export class SearchPage {
    protected searchItemAddressLinks: ElementArrayFinder;
    protected searchResultBlocks: ElementArrayFinder;

    public constructor() {
        this.searchItemAddressLinks = $$('.district_link');
        this.searchResultBlocks = $$('.sr_item');
    }
    public async getSearchItemsAddresses(): Promise<string[]> {
        const addresses: string[] = [];

        for (let i = 0; i < await this.searchItemAddressLinks.count(); i++) {
            addresses.push(await this.searchItemAddressLinks.get(i).getText());
        }

        return addresses;
    }

    public getSearchResultBlockCount(): wdPromise.Promise<number> {
        return this.searchResultBlocks.count();
    }
}