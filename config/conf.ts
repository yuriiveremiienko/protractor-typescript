import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        shardTestFiles: true,
    },
    specs: [ '../tests/spec.js' ],
    baseUrl: 'https://www.booking.com/',

    directConnect: true,
    allScriptsTimeout: 300000,
    SELENIUM_PROMISE_MANAGER: false,
    noGlobals: true,
};