import { defineConfig } from '@farmfe/core';
import { VarletImportResolver } from '@varlet/import-resolver'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import icon from '@varlet/unplugin-icon-builder/vite'
import unoCSS from 'unocss/vite'
import { EditableTreeNode } from 'unplugin-vue-router/types'
import { fileURLToPath } from 'url';
import less from '@farmfe/js-plugin-less'
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);
import postcss from '@farmfe/js-plugin-postcss';
export default defineConfig({
  plugins: [less(), postcss()],
  compilation: {
    input: {
      index: 'index.html'
      // desktop: fileURLToPath(new URL('./desktop.html', import.meta.url))
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  },
  server: {
    port: 1420,
    host: mobile ? "0.0.0.0" : false,
  },
  vitePlugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          video: ['src'],
          audio: ['src'],
          'var-image': ['src'],
          'var-avatar': ['src'],
          'var-card': ['src'],
          'var-app-bar': ['image']
        }
      }
    }),

    jsx(),

    // unoCSS(),

    icon({ dir: 'src/assets/icons', onDemand: true }),

    components({
      resolvers: [VarletImportResolver()]
    }),

    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n',
        {
          '@/use': ['useAppRouter']
        }
      ],
      resolvers: [VarletImportResolver({ autoImport: true })],
      eslintrc: { enabled: true }
    }),

    vueRouter({
      routesFolder: [
        {
          src: 'src/pages'
        },
        {
          src: 'src/stacks',
          path: 'stacks/'
        }
      ],
      exclude: ['**/components/**', '**/use/**'],
      extendRoute(route) {
        const stacks = (route.meta?.stacks ?? []) as StackRoute[]
        const processStacks = (route: EditableTreeNode, stacks: (StackRoute | string)[]) => {
          stacks.forEach((stack) => {
            const isStringifyStack = typeof stack === 'string'
            const name = isStringifyStack ? stack : stack.name
            const newRoute = route.insert(name, `/src/stacks/${name}.vue`)

            if (!isStringifyStack && stack.children) {
              processStacks(newRoute, stack.children)
            }
          })
        }

        processStacks(route, stacks)
      }
    })
  ]
});


export interface StackRoute {
  name: string
  children?: StackRoute[]
}
