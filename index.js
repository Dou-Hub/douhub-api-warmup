//  COPYRIGHT:       Perk Labs Inc. (C) 2020 All Right Reserved
//  COMPANY URL:     https://www.perkhero.com//  CONTACT:         developer@perkhero.com
//
//  This source is subject to the Glance Technologies License Agreements.
//
//  Our EULAs define the terms of use and license for each Glance Technologies product.
//  Whenever you install a Glance Technologies product or research Glance Technologies source code file, you will be prompted to review and accept the terms of our EULA.
//  If you decline the terms of the EULA, the installation should be aborted and you should remove any and all copies of our products and source code from your computer.
//  If you accept the terms of our EULA, you must abide by all its terms as long as our technologies are being employed within your organization and within your applications.
//
//  THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY
//  OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT
//  LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
//  FITNESS FOR A PARTICULAR PURPOSE.
//
//  ALL OTHER RIGHTS RESERVED
import _ from '../../util/base';
import { getWebPage } from '../../util/web';
import { HTTPERROR_500 } from '../../../shared/util/constants';

export const home = async (event) => {
    const caller = await _.checkCaller(event, { ignoreAuthentication: true, skipUserProfile: true });
    if (caller.error) return caller.error;
    const url = `https://www.bandup.io/home`;
    try {
        const result = {url, content: (await getWebPage(url, false)).length};
        console.log(result);
        return _.onSuccess(event, result);
    } catch (err) {
        console.error(err);
        return _.onError(HTTPERROR_500, {
            name: 'ERROR_API_WARMUP_HOME'
        });
    }
};

export const search = async (event) => {

    const caller = await _.checkCaller(event, { ignoreAuthentication: true, skipUserProfile: true });
    if (caller.error) return caller.error;

    const q = _.getPropValueOfEvent(event, 'q', 'warmup');
    const url = `https://www.bandup.io/search/product?q=${q}`;

    try {
        const result = {url, content: (await getWebPage(url, false)).length};
        console.log(result);
        return _.onSuccess(event, result);
    } catch (err) {
        console.error(err);
        return _.onError(HTTPERROR_500, {
            name: 'ERROR_API_WARMUP_SEARCH'
        });
    }
};
