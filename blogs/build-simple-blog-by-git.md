> 以下内容仅作个人记录。因为这个项目的简陋和粗糙程度超乎你的想象。

###为什么要搭建一个博客？

因为老是写东西，写得到处都是，QQ，人人，公众号，但没有一个自己汇总的地方，就想弄个地方汇集起来。

###为什么不用其他博客框架

诸如`WordPress`一类的开源框架当然很好的，但我个人有如下考虑：

1. 我不信任在线编辑器，我永远都是用Markdown编辑软件写好文章，然后粘贴到在线编辑器。这个过程很重复，我希望我直接写完文件就完事了。
2. 那文件存哪里就很重要了，存自己服务器增加工作量，万一服务器丢了就啥都没了。
3. 所以选择了存在Git服务器上。
4. 但是展示还是需要的，那就用Node撸一套前端项目。

最后的策略就是如下：

```
前端展示：

客户端请求页面-> 服务端读取对应文章的MD文件->输出页面到客户端

文章更新：

写好文件丢进本Git项目->提交代码->服务端自动更新项目代码

```

###开搞！

先用Express工具直接生成一个web项目，目标就是这么简单明确！

```
$ npm install express-generator -g
```
生成项目：

```
$ express myBlog
```

安装依赖：

```
$ cd myapp 
$ npm install
```

运行起来！

```
$ DEBUG=myapp npm start
```

在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了


### 根据链接返回对应文件

`./routes`下新建一个`blog.js`,然后在修改app.js

```
//require进来！
var blog = require('./routes/blog');

...
//app.use起来
app.use('/blog', blog);
```

现在完善`blog.js`：

```
var express = require('express');//引入express
var router = express.Router();//引入路由组件
var fs = require('fs');//引入文件读取系统
var path = require('path');//引入路径
var marked = require('marked');//引入markdown转换工具

//所有形如/blog/filename的访问都会进入这个方法，根据url读取对应的文件名，并将文件内容转化成html然后render到对应页面上。
router.get('/*', function(req, res, next) {
    var filename = path.join(__dirname, '../blogs' + req.url); 
    fs.readFile(filename + '.md', function(err, data) {
        var html = marked(data.toString()); 
        res.render('blog', {"title":blog.title,mdContent: html });
    })
});

module.exports = router;
```


现在通过blog可以访问到文章了。在做一个首页用来展现列表！


**未完待续**

