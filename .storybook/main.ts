import { resolve } from 'path';
import { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    // 'storybook-addon-mock',
    // 'storybook-addon-mock-date',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
    options: {
      // this viteConfig will be merged on top of Storybook’s defaults
      viteConfig: {
        mode: 'development', // tell Vite it’s a dev build
        build: {
          minify: false, // no terser
          sourcemap: false, // skip sourcemaps
          target: 'esnext', // lighter output
        },
      },
    },
  },
  async viteFinal(config: UserConfig) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
    const { default: angular } = await import('@analogjs/vite-plugin-angular');
    const tailwindcss = await import('@tailwindcss/postcss');
    const autoprefixer = await import('autoprefixer');

    return mergeConfig(config, {
      define: {
        STORYBOOK_ANGULAR_OPTIONS: JSON.stringify({
          enableIvy: true,
          strictInjectionParameters: true,
          strictTemplates: true,
          enableNgcc: true,
        }),
      },
      resolve: {
        mainFields: ['browser', 'module', 'main'],
      },
      sourcemap: false,
      optimizeDeps: {
        include: ['@angular/compiler', 'tslib'],
      },
      build: {
        sourceMapsEnabled: false,
      },
      plugins: [
        tsconfigPaths(),
        angular({ jit: true, tsconfig: './.storybook/tsconfig.json' }),
      ],
      css: {
        postcss: {
          plugins: [tailwindcss.default(), autoprefixer.default()],
        },
        preprocessorOptions: {
          scss: {
            includePaths: [
              resolve(__dirname, '../src'),
              resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    });
  },
};
export default config;
