import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear'
import minify from 'rollup-plugin-babel-minify';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/shellComponent.js',
    output: {
        dir: 'roll/src',
        format: 'esm'
    },
    watch: {
        exclude: ['node_modules/**', 'roll/**']
    },
    plugins: [
        minifyHTML(),
        minify({
            comments: false
        }),
        clear({
            targets: ['roll']
        }),
        copy({
            targets: {
                'index.html': 'roll/index.html',
                'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js': 'roll/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
            }
        }),
        filesize(),
        resolve(),
        serve('roll'),
        livereload('roll'),

    ]
};