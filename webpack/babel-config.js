module.exports = {
    // 声明 babel 可用插件
    // 将来 webpack 在调用 babel-loader 的时候，会先加载plugins 插件来使用
    // plugins: [['@babel/plugin-proposal-decorators',{ legacy: true}]]
    "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }],]
}