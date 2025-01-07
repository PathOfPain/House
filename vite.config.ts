import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "@/assets/scss/base/variables";
          @import "@/assets/scss/base/reset";
          @import "@/assets/scss/base/fonts";
          @import "@/assets/scss/base/layout";
        `,
			},
			sass: {
				additionalData: `
          @import "@/assets/scss/base/variables";
          @import "@/assets/scss/base/reset";
          @import "@/assets/scss/base/fonts";
          @import "@/assets/scss/base/layout";
        `,
			},
		},
	},
	plugins: [vue(), vueDevTools()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
