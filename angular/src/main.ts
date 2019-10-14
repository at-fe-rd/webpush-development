import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import webPush from '../lib/web-push-js';


if (environment.production) {
  enableProdMode();
}

const apiUrl = 'http://localhost:3000';
webPush.settingEnv(`${apiUrl}/save-subscription`, 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI')
webPush.requestNotiPermission();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
