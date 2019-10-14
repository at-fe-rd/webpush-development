# Web push JS
=========================
> Version 1.0.9

> This is a node module for push notifications, integrated with Nodejs Server & Webpush

> This is node module can support for many framework. [Angular, Vue, pure JS]

## Install
### Requirements

- A project created from the list: [Angular, Vue, pure JS]

  - Init project (click) [Vuejs](https://cli.vuejs.org/guide/creating-a-project.html#vue-create), [Angular](https://angular.io/cli)

- Run: 
```bash
npm install web-push-js
```

- add this line `"webpush": "wpush"` to `scripts` section in `package.json`:
```
"scripts": {
  ...
  "webpush": "wpush"
  ...
}
```
- Run command line to init our services:
```
npm run webpush
```

- You will see the list of frameworks, please make the proper choice!

- Let take a look with some environment variables:
  - apiUrl: we need an apiUrl for send `POST` request each time init push-notifications successful in order to register device.
  - serverKey: with the same keys in both side, it let our frontend project and server contact each others.

### Vuejs

- When you choose `vuejs`, You will see the `wp-worker.js` created in public folder. Vuejs auto copy all files in public folder to their build folder.
- Thus, you just need to setup some environment for it in `main.js`

```bash
import webPush from 'web-push-js'

const apiUrl = 'https://web-push-js-server.herokuapp.com';
const serverKey = 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI';
webPush.settingEnv(`${apiUrl}/save-subscription`, serverKey);
webPush.requestNotiPermission();
```

### Angular

when you choose `angular`, You will see the `wp-worker.js` created in `src` folder.

- add: `src/wp-worker.js` in `assets` of `angular.json`.

You need to setup some environment for it in `main.ts` like Vue:

```bash
import webPush from 'web-push-js'

const apiUrl = 'https://web-push-js-server.herokuapp.com';
const serverKey = 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI';
webPush.settingEnv(`${apiUrl}/save-subscription`, serverKey);
webPush.requestNotiPermission();
```

### Pure Js
comming soon



### Build and Test
- Service worker will not run in Development, so to test it, you need to build your project with `npm run build`.

- Check your `dist` folder. Try to run it with `http-server` or install plugin [`web server for chrome`](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-ntp-launcher)


### Server Push Notifications
- Check out our server in: `https://web-push-js-server.herokuapp.com/`.

- Now we can push notifcations with `title`, `body` and `icon`.
- Let have your experiences!

## Licence

> Usage is under provisioned of @AsianTechInc

UNLICENSED
