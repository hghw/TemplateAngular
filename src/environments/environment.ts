// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'testmess-d1ab3',
    appId: '1:665895494717:web:8db7d6d0d5f553d2fd3654',
    storageBucket: 'testmess-d1ab3.appspot.com',
    apiKey: 'AIzaSyATV722eakeAiYZT8Qqncy3YcKEwuCSjOI',
    authDomain: 'testmess-d1ab3.firebaseapp.com',
    messagingSenderId: '665895494717',
    measurementId: 'G-WW5ETG2YPN',
  },
  production: false,
  title: 'Finshop',
  baseURL: 'https://finme.vn/',
  apiURL: 'https://api.finme.vn/',
  enURL: 'https://api-en.finme.vn/',
  vbiURL: 'https://apitest1.evbi.vn/',
  description: 'This is Finshop web in develop environment. Please check your config if something was wrong.'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
