
# 运行
复制下面的code保存重命名为hdx-dev-conf.js

```
module.exports={
    "webpack":{
        entry:{
            //main:"./dev/js/main.js",
            //"vue-mobile":"./dev/js/hdx-mobile/hdx-mobile.js",
            //"hdx-bbx":"./dev/js/hdx-bbx.js",
            //"hdx-new-front-mobile":"./dev/js/hdx-new-front-mobile/hdx-new-front-mobile.js",
            //"hdx-api-mobile":"./dev/js/hdx-new-front-mobile/hdx-api-mobile.js",
            //"hdx-new-front-pc":"./dev/js/hdx-new-front-pc/hdx-new-front-pc.js",
            //"hdx-grap":"./dev/js/module/grap.js",
            //"hdx-grap-no-time":"./dev/js/module/grap-no-time.js",
            //"hdx-new-admin":"./dev/js/hdx-new-front-pc/hdx-new-admin.js",
            //"hdx-bbx-index":"./dev/js/hdx/hdx-bbx-index.js",

            //"hdx-wristband":"./dev/js/hdx/hdx-wristband.js",
            //"hdx-wristband-3406341083600":"./dev/js/hdx/wristband/hdx-wristband-3406341083600.js",
            //"hdx-wristband-face":"./dev/js/hdx/wristband/hdx-wristband-face.js",
            "main":"./dev/js/main.js",
            //"hdx-wristband-72861501405":"./dev/js/hdx/wristband/hdx-wristband-72861501405.js",
            //"hdx-wristband-face-ms":"./dev/js/hdx/wristband/hdx-wristband-face-ms.js",
            //"hdx-face-h5":"./dev/js/hdx-new-front-mobile/hdx-face-h5.js"
              //"hdx-face-h5-ms":"./dev/js/hdx-new-front-mobile/hdx-face-h5-ms.js"
        },
    },
    gulp:{
        webPort:"3013",
        nodejsPath:"../hdx-nodejs-web",//copy 文件至nodejs中 nodejs的路径
        gulpBase64File:['main.scss'],//sass文件名存在于此数组内的才会去进行base64打包
        compilePugFile:['dev/jade-html/*.pug'],//按需编译某些pug
        // compilePugFile:['dev/jade-html/**/*.pug'],//按需编译某些pug
        compileSassFile:['dev/sass/output/*'],//按需编译某些sass
    }
};
```

