import { browser } from 'protractor';
import actions from '../actions';
import { IPageSearchParams } from '../utilities/types';
import { testData } from './testData';

describe('Search on main page', (): void => {

    beforeAll(async (): Promise<any> => {
        await browser.waitForAngularEnabled(false);
    });
    testData.forEach((param: IPageSearchParams) => {
        it(`should only show results for ${param.destination}`, async (): Promise<any> => {
            await actions.Search.mainPageSearch(param);
            await actions.SearchAssertions.checkSearchResultsDisplayed();
            await actions.SearchAssertions.checkSearchResultsContainsAddress(param.destination);
        });
    });

});