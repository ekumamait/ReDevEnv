import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    entry: [
        path.resolve(__dirname, 'server.js')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'client/index.html',
        inject: true
        })
    ],
    module: {
        loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}






