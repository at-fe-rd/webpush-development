# webpush-development
We can push notification based on `webpush`.

## Integration

- MongoDB
- Nodejs
- Angular
- Vuejs
- Web push JS in `lib` folder is a modules for push notifications.

## Script

Firstly, Please cd `lib/web-push-js` run `npm install` to install packages for web-push-js.

After that, just RUN `docker-compose up` to start our project with server and many websites.

check Angular project in port `4200`.

check Vuejs project in port `8080`.

check dev Server project in port `3000`.

## Want to develop?

### Web Push Js Development
Please check the content of `lib/web-push-js`.

- `wp-worker.js` is service-worker for push notifications.
- `index.js` is a module contains many functions, people can use it to expose `web-push-js`.

In `index.js`, There are 2 functions: `settingEnv(apiUrlParams, serverKeyParams)` and `requestNotiPermission()`
Let take a look with some environment variables:

`apiUrlParams`: we need an apiUrl for send POST request each time init push-notifications successful in order to register device.
`serverKeyParams`: with the same keys in both side, it let our frontend project and server contact each others.

### Web Push Server
Please check the content of `server/src/routes/notifications.js`.
POST `/save-subscription` => save subscription key of website into database when website want to receive notification.
GET `/send-notification` with query `title`, `desc`, `icon` => send notifications for all subscriptions in db.

## Installation in Product
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
