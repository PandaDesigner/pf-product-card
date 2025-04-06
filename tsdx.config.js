const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ module: true }),
      images({ include: ['**/*.png', '**/*.jpg'] }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(options.env || 'development'),
        preventAssignment: true,
      }),
      ...config.plugins,
    ];
    return config;
  },
};
