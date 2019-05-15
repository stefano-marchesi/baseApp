import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear'
import minify from 'rollup-plugin-babel-minify';
import minifyHTML from 'rollup-plugin-minify-html-literals';
export default {
    input: 'src/shellComponent.js',
    output: {
        dir: 'roll',
        format: 'esm'
    },
    plugins: [
        minifyHTML(),
        minify({
            comments: false
        }),
        clear({
            targets: ['roll']
        }), filesize(), resolve()
    ]
};