const path = require('path');


module.exports ={
    entry:"./src/index.ts",
    mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename : "bundle.js"
    },
    module:{
        //指定loader 规则
        rules :[
            {
                // test指定的是规则生效的文件
                //正则表达式
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                // 要排除的文件
                exclude:/node_modules/
            } 
        ]
    }
}