const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { CleanPlugin } = require('webpack');
const { options } = require('less');

module.exports ={
    entry:"./src/index.ts",
    mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename : "bundle.js",
        // 告诉webpack不适用箭头函数
        environment:{
            arrowFunction : false,
            const :false
        }
    },
    module:{
        //指定loader 规则
        rules :[
            {
                // test指定的是规则生效的文件
                //正则表达式
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            //设置预定义的环境 
                            presets:[
                                [
                                    //指定环境的插件
                                    '@babel/preset-env',
                                    //配置信息
                                    {
                                        //要兼容的浏览器
                                        targets:{
                                            "edge": "17"
                                        },
                                        //指定corejs的版本
                                        "corejs":"3",
                                        //使用corejs 的方式  “usage”表示按需加载
                                        "useBuiltIns" : "usage"
                                    }

                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                // 要排除的文件
                exclude:/node_modules/
            },
            //设置less文件的处理
            {
                test: /\.less$/,
                use : [
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                      loader :"postcss-loader",
                      options:{
                        postcssOptions :{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions'
                                    }
                                ]
                            ]
                        }
                      }  
                    },
                    "less-loader"  //从下往上执行 
                ]
            }
        ]
    }, //配置webpack插件
    plugins:[
        new HTMLWebpackPlugin({
            // title:"404 Not Found"
            //使用html网页模板
            template:"./src/index.html"
        }),
        //cleanwebPlugin
        new CleanWebpackPlugin(),
    ],
    //用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}