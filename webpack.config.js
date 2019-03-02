// module.exports = {
//     entry: './src/app.js',
//     output: 
//     {filename: './app.bundle.js'}
// }


var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-react']
                  ]
                }
              }]
            },
           {
            test: /\.css$/,
            use: ['style-loader','css-loader']
           },
           {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
           },
           {
            test: /\.(jpe?g|svg|png|gif)$/i,
            use: ['file-loader']
           }
          ]
    }
}
