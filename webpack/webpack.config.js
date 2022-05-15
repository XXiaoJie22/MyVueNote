const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 自动清理dist插件

// 导入html-.. 这个插件
const HtmlPlugin = require('html-webpack-plugin');
// 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定复制出来的文件名和存放路径  复制出来的存放在内存里面
    filename: './index.html'
});


// 使用node.js中的导出语法，导出一个模块
module.exports = {
    mode: 'development', // mode 用来指定构建模式，可选有 development 和production  production 模式会帮忙压缩代码
    // 开发的时候用dev 发布上线的时候用pro

    // 让错误显示的行数显示为打包前的代码行数，方便改错   开发的时候建议写  生产环境(build)建议不写 
    devtool: 'eval-source-map',
    // 指定处理哪个文件
    entry: path.join(__dirname,'./src/index.js'),
    // 指定生成的文件要存放到哪
    output:  {
        // 要存放的目录
        path: path.join(__dirname,'dist'),
        // 生成的文件名
        filename: 'js/bundle.js'
    },
    // 插件的数组，将来webpack 在运行时，会加载并调用这些插件
    plugins: [htmlPlugin,new CleanWebpackPlugin()],
    devServer:{
        // 首次打包成功的时候，自动打开浏览器
        open: true,
        // 时实打包所使用的主机地址
        port: 80,
        // 时实打包所使用的端口号
        host: '127.0.0.1'
    },
    module: {
        
        rules: [
            // 定义不同模块对应的loader
            { test: /\.css$/,use: ['style-loader','css-loader']},
            // 处理.less文件的loader
            { test: /\.less$/,use: ['style-loader','css-loader','less-loader'] },
            // 处理图片文件的loader
            // 配置url-loader的时候，多个参数之间，使用&符号进行分离
            { test: /\.jpg|png|gif$/,use: 'url-loader?limit=22222&outputPath=images' }, // 小于limit的会转成base64字符串，大于的直接路径，单位字节
            // 使用babel-loader 处理高级的js语法
            // 配置的时候，我们只需要把自己的代码进行转换，一定要排除node_modules目录中的js文件
            // 第三方包中js的兼容性问题不需要我们关系
            { test: /\.js$/,use: 'babel-loader',exclude: /node_modules/}

        ]
    },
    resolve: {
        alias: {
            // 告诉webpack 我们写的代码中，@符号表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
};