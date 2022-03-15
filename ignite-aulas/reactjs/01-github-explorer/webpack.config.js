const path = require('path') //função que configura as pastas em qualquer 
                            //sistema 

module.exports = {
    entry: path.resolve(__dirname,'src', 'index.jsx'), //arquivo de entrada
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js' //arquivo de saida, ja convertido pelo babel
    },
    resolve:{
        extensions:['.js', '.jsx'], //extensões que serão aceitas
    },
    module: {
        rules: [
            {
              test: /\.jsx$/, 
              exclude: /node_modules/,
              use: 'babel-loader',
            }
        ],
    }
}