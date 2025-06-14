import { resolve } from 'path';
import serveStatic from 'serve-static';
import { UserConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    'storybook-addon-mock',
    'storybook-addon-mock-date',
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
    const assetsPath = resolve(__dirname, '../src/assets');

    return mergeConfig(config, {
      publicDir: resolve(__dirname, '../src/assets'),
      resolve: {
        alias: {
          assets: resolve(__dirname, '../src/assets'),
        },
      },
      define: {
        STORYBOOK_ANGULAR_OPTIONS: JSON.stringify({
          enableIvy: true,
          strictInjectionParameters: true,
          strictTemplates: true,
          enableNgcc: true,
        }),
      },
      optimizeDeps: {
        include: [
          '@storybook/angular',
          '@angular/compiler',
          '@storybook/addon-docs/blocks',
          'tslib',
        ],
      },
      build: {
        sourceMapsEnabled: false,
      },
      plugins: [
        tsconfigPaths(),
        angular({ jit: true, tsconfig: './.storybook/tsconfig.json' }),
        viteStaticCopy({
          targets: [
            {
              src: resolve(__dirname, '../src/assets/*'), // Source path
              dest: 'assets', // Destination relative to storybook-static
            },
          ],
        }),
        {
          name: 'custom-assets-middleware',
          configureServer(server) {
            server.middlewares.use(
              '/assets',
              serveStatic(assetsPath, {
                index: false,
              })
            );
          },
        },
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
