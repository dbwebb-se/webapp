const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './www/js/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www/dist'),
    }
};
