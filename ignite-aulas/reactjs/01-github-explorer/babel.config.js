//Arquivo criado por mim para definir os presets do babel

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react',{
            runtime: 'automatic'
        }]
    ]
}