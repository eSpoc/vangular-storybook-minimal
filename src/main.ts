import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { translations } from '@zxcvbn-ts/language-en';
import {
  provideZxvbnServiceForPSM,
  ZxvbnConfigType,
} from 'angular-password-strength-meter/zxcvbn';
import 'global';
import { provideTinymce } from 'ngx-tinymce';
import { RootComponent } from 'root.component';

const zxvbnConfig: ZxvbnConfigType = {
  translations: translations,
};

await bootstrapApplication(RootComponent, {
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideTinymce({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.3/',
    }),
    provideZxvbnServiceForPSM(zxvbnConfig),
  ],
});
