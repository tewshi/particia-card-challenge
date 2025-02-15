import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        vue(),
        createHtmlPlugin({
            entry: 'src/main.js',
            template: './index.html',
            inject: {
                data: {
                    title: 'index',
                    injectScript: `<script src="./inject.js"></script>`,
                },
            },
        }),
    ],
})