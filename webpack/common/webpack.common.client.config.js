import merge from 'lodash/merge';
import autoprefixer from 'autoprefixer';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    name: 'client',
    target: 'web',
    context: config.paths.CLIENT,

    entry: {
        app: [
            './app'
        ],

        vendor: [
            './scss/vendor/vendor.scss'
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: null,
        outputPath: '/'
    },

    plugins: null,

    postcss: function () {
        return [autoprefixer];
    },
    imageWebpackLoader: {
        pngquant: {
            quality: '65-90',
            speed: 4
        },
        svgo: {
            plugins: [{
                removeViewBox: false
            }, {
                removeEmptyAttrs: false
            }]
        }
    }
});