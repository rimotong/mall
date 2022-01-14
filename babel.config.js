module.exports = {
        presets: [
            '@vue/cli-plugin-babel/preset'
        ],
        "plugins": [
            [
                "component",
                {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                }
            ]
        ]
    }
    //babel配置文件：可将es6翻译为es5