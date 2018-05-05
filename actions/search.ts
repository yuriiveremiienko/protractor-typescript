import pages from '../page-objects';
import { IPageSearchParams, ISearchPage } from '../utilities/types';

export class Search implements ISearchPage {

    public async mainPageSearch(paramsObj: IPageSearchParams): Promise<void> {
        await pages.MainPage.navigate();
        await pages.MainPage.setDestination(paramsObj.destination);
        await pages.MainPage.setCheckInDate(paramsObj.checkInDate);
        await pages.MainPage.setCheckOutDate(paramsObj.checkOutDate);
        await pages.MainPage.submitSearch();
    }
}
