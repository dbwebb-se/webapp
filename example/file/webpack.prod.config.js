const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './www/js/index.js',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www/dist'),
    }
};
