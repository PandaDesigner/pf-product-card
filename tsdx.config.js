const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');

module.exports = {
    rollup(config, options) {
        config.plugins = [
            postcss({module: true}),
            images({ incude: ['**/*.png', '**/*.jpg']}),
            ...config.plugins,
        ];
        return config;
    },
};
// This is a Rollup configuration file for TSDX, a zero-config CLI for TypeScript libraries.