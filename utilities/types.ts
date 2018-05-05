export interface ISearchPage {
    mainPageSearch(params: IPageSearchParams): Promise<void>;
}

export interface IPageSearchParams {
    destination: string;
    checkInDate: string;
    checkOutDate: string;
}

export interface ISearchArray extends Array<IPageSearchParams> {}