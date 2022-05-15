const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'auto',
        uniqueName: 'host',
        scriptType: 'text/javascript',
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                //profile: 'profile@http://localhost:4201/remoteEntry.js}',
            },
            shared: {
                '@angular/core': { singleton: true },
                '@angular/common': { singleton: true },
                '@angular/router': { singleton: true },
            },
        }),
    ],
};