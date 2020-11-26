import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {
    terser
} from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
import {
    utilName
} from './package.json';


var config = {
    input: 'utils/main.js',
    output: [{
            file: 'dist/rutil.js',
            format: 'iife', // iife 表示立即执行函数
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rutil.esm.js',
            format: 'esm',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rutil.umd.js',
            format: 'umd',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rutil.cjs.js',
            format: 'cjs',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rutil.amd.js',
            format: 'amd',
            amd: {
                define: 'define'
            },
            name: utilName,
            sourcemap: false
        }
    ],
    plugins: [
        resolve(), //Rollup 能找到 `ms`
        commonjs(), //Rollup 能转换 `ms` 为一个ES模块
        json(),
        babel({
            exclude: ['node_modules/**']
        })
    ],
    external: [''], //  指出应将哪些模块视为外部模块
    watch: {
        chokidar: {},
        exclude: ['node_modules/**']
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        terser()
    );
}

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(
//         terser({
//             output: {
//                 comments: "all",
//             },
//         })
//     );
// }

module.exports = config;