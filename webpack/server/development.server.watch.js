import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

import { webpack: {devServer} } from '../../config.js';
import webpackClientConfig from '../../webpack/webpack.client.development.config.babel';

const app = express();

// Add hot module reloading
if(!(webpackClientConfig.plugins instanceof Array)){ webpackClientConfig.plugins = []; }
webpackClientConfig.plugins.unshift(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

// Add inline mode
Object.keys(webpackClientConfig.entry).forEach( key => {
    const entry = webpackClientConfig.entry[key];
    entry.push(
        'react-hot-loader/patch',
        `webpack-hot-middleware/client?path=${devServer.protocol}://localhost:${devServer.port}${devServer.hmrPath}`
    );
});

const compiler = webpack(webpackClientConfig);

app.use(
    webpackDevMiddleware(compiler, {
        hot: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
        publicPath: '/'
    })
);

app.use(
    webpackHotMiddleware(compiler, {
        log: console.log,
        path: devServer.hmrPath,
        timeout: 20000
    })
);

app.listen(devServer.port, devServer.ip, ()=>{
    console.log('Development watch server started on', `${devServer.ip}:${devServer.port}`);
});
