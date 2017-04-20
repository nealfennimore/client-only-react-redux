import path from 'path';

const config = {
    paths: {
        ROOT: path.resolve(__dirname),
        CLIENT: path.resolve(__dirname, 'client'),
        DIST: path.resolve(__dirname, 'dist')
    },
    regex: {
        VENDOR_FILES: /vendor\.(scss|css|js)$/,
        VENDOR_SCSS: /vendor\.scss$/,
        IMAGE_FILES: /.*\.(gif|png|jpe?g|svg)$/i,
        PROJECT_IMAGE_FILES: /projects\/.*\.(gif|png|jpe?g|svg)$/i,
        FONT_FILES: /fonts\/.*\.(eot|svg|ttf|woff2?)(\?.*)?$/,
        FONT_STYLES: /fonts\/style\.scss$/
    },
    webpack: {
        cssModuleName: '[name]-[local]--[hash:base64:5]',
        devServer: {
            hmrPath: '/__webpack_hmr',
            port: 4546,
            ip: '0.0.0.0',
            protocol: 'http'
        }
    }
};

export default config;
