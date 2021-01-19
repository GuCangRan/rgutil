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
import '@babel/polyfill';

var config = {
    input: 'index.js',
    output: [{
            file: 'dist/rgutil.js',
            format: 'iife', // iife 表示立即执行函数
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rgutil.esm.js',
            format: 'esm',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rgutil.umd.js',
            format: 'umd',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rgutil.cjs.js',
            format: 'cjs',
            name: utilName,
            sourcemap: false
        },
        {
            file: 'dist/rgutil.amd.js',
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
            exclude: ['node_modules/**'],
            //>=es6版本
            presets: [
                [
                    "@babel/preset-env",
                    {
                        "targets": "> 5%",
                        "useBuiltIns": "usage",
                        "corejs": 3
                    }
                ]
            ]
            //开启兼容ie11等版本直接打包处理,自行配置
            // presets: [
            //     [
            //         '@babel/preset-env',
            //         {
            //             modules: false,
            //             targets: {
            //                 browsers: '> 1%, IE 11, not op_mini all, not dead',
            //                 // node: "current"  
            //             },
            //             corejs: 3,
            //             useBuiltIns: 'usage'
            //         }
            //     ]
            // ]
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