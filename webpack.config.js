/**
 * Created by Administrator on 2016/9/18.
 */

const webpack=require("webpack");
const os=require("os");
const devConf=require("./hdx-dev-conf");

//配置默认文件
let entry=devConf.webpack.entry?devConf.webpack.entry:{
    //main:"./dev/js/main.js",
    //"vue-mobile":"./dev/js/hdx-mobile/hdx-mobile.js",
    //"hdx-bbx":"./dev/js/hdx-bbx.js",
    //"hdx-new-front-mobile":"./dev/js/hdx-new-front-mobile/hdx-new-front-mobile.js",
    // "hdx-api-mobile":"./dev/js/hdx-new-front-mobile/hdx-api-mobile.js",
    "hdx-new-front-pc":"./dev/js/hdx-new-front-pc/hdx-new-front-pc.js",
    //"hdx-grap":"./dev/js/module/grap.js",
    //"hdx-grap-no-time":"./dev/js/module/grap-no-time.js",
    "hdx-new-admin":"./dev/js/hdx-new-front-pc/hdx-new-admin.js",
    //"hdx-bbx-index":"./dev/js/hdx/hdx-bbx-index.js",
    "new-hd-manage":"./dev/js/hdx-new-front-pc/new-hd-manage.js",
    "new-treasure-case":"./dev/js/hdx-new-front-pc/new-treasure-case.js"
};

module.exports={
    entry,

    externals:{
        "jquery" : "jQuery",
        "monment":"moment",
        "zepto":"Zepto"
    },
    output:{
        filename:"[name].js",
        publicPath:'/'
    },
    // resolve:{
    //     alias: {
    //         'vue': 'vue/dist/vue.js'
    //     },
    // },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                            emitError: true,
                            failOnError: true
                        }
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader',
                        options: {
                            cssSourceMap:false,
                            transformToRequire:{}
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                            emitError: true,
                            failOnError: true
                        }
                    },
                ],
                exclude: /node_modules/
            },
        ],
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            compress: {
                warnings: false,
                //pure_funcs: [ 'console.log' ]
            }
        }),
    ],
    devtool:'source-map'
};



