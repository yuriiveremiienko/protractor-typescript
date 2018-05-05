import pages from '../page-objects';

export class SearchAssertions {

    public async checkSearchResultsDisplayed(): Promise<void> {
        expect(await pages.SearchPage.getSearchResultBlockCount()).toBeGreaterThan(0,
            'Search results should be displayed on searchPage',
        );
    }
    public async checkSearchResultsContainsAddress(address: string): Promise<void> {
        const addresses = await pages.SearchPage.getSearchItemsAddresses();

        addresses.forEach((item: string) => {
            expect(item).toContain(address,
                'Search results should contain destination city',
            );
        });
    }
}