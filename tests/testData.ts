import * as moment from 'moment';
import { ISearchArray } from '../utilities/types';

export const testData: ISearchArray = [
    {
        destination: 'New York',
        checkInDate: moment().format('DD/MM/YYYY'),
        checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY'),
    },
    {
        destination: 'Boston',
        checkInDate: moment().format('DD/MM/YYYY'),
        checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY'),
    },
    {
        destination: 'Los Angeles',
        checkInDate: moment().format('DD/MM/YYYY'),
        checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY'),
    },
    {
        destination: 'San José',
        checkInDate: moment().format('DD/MM/YYYY'),
        checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY'),
    },
];
