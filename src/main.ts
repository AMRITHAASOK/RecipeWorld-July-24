import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes, withRouterConfig({})),
    provideAnimations(),
    provideToastr(),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
