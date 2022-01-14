# xiangmu
## eslint关闭校验
在vue.config.js中
```
    module.exports = {
        //关闭eslint
        lintOnSave:false
    }
```
## src文件夹简写 @代表src文件夹
```
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                "@/*":[
                    "src/*"
                ]
            }
        },
        "exclude": [
            "node_modules",
            "dist"
        ]
    }
```
## 清除浏览器默认样式
index.html引入reset.css

https://gitee.com/jch1011/shangpinhui_0415.git
https://gitee.com/jch1011/guigu.git

## 路由传参

1.params不能与path一起使用，需要使用路由name。
2.在配置路由时，path: "/search/:keyword?",path参数后配置？可表示params参数可传可不传
3.params传递空值时，使用undefined解决问题：params:{keyword:''||undefined}
4.给push添加成功与失败回调，可以捕获错误。或者路由中添加
const originalPush = VueRouter.prototype.push
    //第一个参数:往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function push(location) {
    //call||apply 都可以篡改函数的上下文一次  不同点：call传递参数用逗号隔开，apply方法执行，传递数组
    return originalPush.call(this, location).catch(err => err)
}
### 数据优化
接口只执行一次时可以放至App.vue组件中获取

### nextTick
this.$nextTick(() => {})
nextTick官网解释:
在下次DOM更新, 循环结束之后,执行延迟回调。在 修改数据之后 立即使用这个方法，获取更新后的DOM。
注意：组件实例的$nextTick方法，在工作当中经常使用，经常结合第三方插件使用，获取更新后的DOM节点