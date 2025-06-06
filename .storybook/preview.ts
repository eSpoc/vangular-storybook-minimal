// import {
//   provideHttpClient,
//   withInterceptorsFromDi,
// } from '@angular/common/http';
// import { inject, provideAppInitializer } from '@angular/core';
// import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { provideNoopAnimations } from '@angular/platform-browser/animations';
import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
// import { translations } from '@zxcvbn-ts/language-en';
// import {
//   provideZxvbnServiceForPSM,
//   ZxvbnConfigType,
// } from 'angular-password-strength-meter/zxcvbn';
// import { provideTinymce } from 'ngx-tinymce';
// prettier-ignore
import '../src/vangular-tailwind.css';
// prettier-ignore
import '../src/styles.scss';
// prettier-ignore
import 'zone.js';
// import { MockDateService } from './MockDate.service';

// const zxvbnConfig: ZxvbnConfigType = {
//   translations: translations,
// };

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        // { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
        // provideNoopAnimations(),
        // provideHttpClient(withInterceptorsFromDi()),
        // provideTinymce({
        //   baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.3/',
        // }),
        // provideZxvbnServiceForPSM(zxvbnConfig),
        // MockDateService,
        // provideAppInitializer(async () => void inject(MockDateService)),
      ],
    }),
  ],
  parameters: {
    chromatic: { diffThreshold: 0.08 },
    options: {
      storySort: {
        order: [
          'docs',
          [
            'Introduction',
            'Code-Organization',
            'APIs',
            'Interactions',
            'Design-System',
          ],
          'features',
          ['Home', 'Login', 'Admin'],
          'shared',
        ],
      },
    },
  },
};

export default preview;
