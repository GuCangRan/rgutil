import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{
            find: '@',
            replacement: path.resolve(__dirname, 'src')
        }]
    },
    base: './',
    build: {
        outDir: 'docs', // 将构建好的文件输出到哪里（或者说将编译的文件）
        assetsDir: './', // 放置静态资源的地方 (js/css/img/font/...)
    },
    //entry: 'public/index.html',
    sourcemap: false,
    plugins: [vue()]
})