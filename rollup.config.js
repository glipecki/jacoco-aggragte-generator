import cleanup from 'rollup-plugin-cleanup';

const libName = 'jacoco-aggregate-generator';

// noinspection JSUnusedGlobalSymbols
export default {
    input: './.build/tsc-out/lib/index.js',
    output: [
        {
            name: libName,
            file: 'dist/index.umd.js',
            format: 'umd'
        },
        {
            name: libName,
            file: 'dist/index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        cleanup({})
    ]
};