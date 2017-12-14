如今有大量的项目运行在手机端，其中又有相当大一部分运行在微信内，调试的过程中一般都以Chrome Devtool的手机模拟调试为主，在微信中的项目则可以使用[微信开发工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)进行开发调试并预览页面表现。

但最终在真机上仍然会遇到种种Bug，我们仍然希望在开发时就可以通过移动端访问本地开发项目。并且这也是我一直倡导的观念：在开发阶段就尽可能模拟生产环境以提前发现问题。

移动端最终的生产环境是怎么样的？**用户在手机通过域名访问到页面**。

我们分几个步骤一步步实现这个目标

## 一、将前端项目运行在本地，并通过ip:port 访问。

如今Vue、React等框架的盛行这一步基本已经没有任何困难了，大部分时候使用脚手架搭建项目之后，运行命令：

```
npm run dev
```

项目会使用Webpack搭建一个web服务，并监听某个开发者指定的端口，比如：`8000`。此时在本机上你可以通过`localhost:8000`或者`127.0.0.1:8000`访问到页面。

此时如果你的手机和你的开发PC保持在同一个Wifi下，要访问到这个页面也很容易。

Linux系统包括Mac上在命令行运行`ifconfig`，Win上运行`ipconfig`，查看到本机在局域网内的ip，比如：`192.168.1.165`，那么在手机上访问`192.168.1.165:8000`即可访问到页面。

如果前端页面并没有使用此类脚手架，只是一个静态文件夹，入口是一个index.html怎么办？

**使用第二步提及的Nginx，可解决此项问题。**

## 二、使用Nginx+修改Hosts文件，实现通过域名访问项目

`ip:port`访问页面的方式和真实的生产环境访问的方式仍然相去甚远。我们希望可以通过域名访问页面，这样更符合直觉。这里我们使用方案是：**Nginx+修改Hosts**

### 首先修改host文件

Mac系统上运行


```
open /etc
```
在finder窗口内找到hosts文件夹，并使用IDE（比如sublime打开），然后进行修改增加一行：

```
127.0.0.1  test.local.com
```

Win系统则找到文件夹`c:\windows\system32\drivers\etc`，建议将此文件快捷方式放至桌面，同样修改hosts文件，如果提示无法修改，将hosts文件复制到桌面，修改之后，放回原文件夹并覆盖即可。

此时你已经可以通过`test.local.com:8000`的方式访问你的项目了。

但这个端口依然让人觉得不舒服，我们要把端口也干掉。

### 使用Nginx搭建反向代理

Nginx具体的使用方式可以参考：[Nginx安装使用](http://wiki.insomnia-er.com/#/article/7);

搭建Nginx之后，在Nginx中配置：


```
 #静态文件配置如下
server {
   listen 80;
   server_name test.local.com;   
   location / {               
      root /home/projects/static;#静态文件目录
      index index.html; 
   }  
}
 #web服务配置如下
server {
   listen 80;
   server_name test.local.com;   
   location /{
      proxy_pass http://localhost:8000;
   }  
}
```

此时我们已经可以在PC端通过`test.local.com`直接访问到页面了，但是移动端依然没有进展，我们仍然只能通过`ip:port`的方式访问本地项目，是时候着手解决这个问题了。

## 三、使用代理或搭建DNS服务

### 使用代理

首先在PC上搭建代理服务，使用Fiddler或者Charles，这里以Charles为例，下载地址：[Charles](https://www.charlesproxy.com/download/);

打开后依次选择`Proxy`=>`Proxy setting..`,记下`HTTP Proxy`的值：
![Charles-proxy-setting](http://owyx09dkb.bkt.clouddn.com/charles-proxy-setting.jpg)



将手机和PC连入同一个网络，设置网络的http代理。这里以iphone为例：
![iphone-wifi](http://owyx09dkb.bkt.clouddn.com/iphone-wifi.jpeg)

点击网络中的标志进入网络详情设置，在最下方进入Http代理配置：

![iphone-http-proxy](http://owyx09dkb.bkt.clouddn.com/iphone-http-proxy.jpeg)


在服务器中填入之前获取的ip，在端口处填入在charles内配置的端口，然后储存。

现在在手机上访问`test.local.com`，就可以访问到页面了，注意Nginx和hosts必须已经落实。

此时手机的所有http请求会首先通过Charles的代理，由于Charles所在的本机hosts文件已经映射，会将请求发到本机经由Nginx监听后反向代理到本地服务。



### 搭建DNS服务

其实如果我们能方便地修改手机上的hosts文件，在其中加入一条记录


```
#此处ip即为之前获得的机器ip
192.168.1.165 test.local.com  
```
那么不需要代理我们就可以直接通过域名访问了。

安卓上尚且可以通过Root获得hosts的权限，iphone上则不可能修改这个文件。那么我们还可以通过什么样的方法呢？那就是搭建DNS服务。

其实修改Hosts文件就是人工干预了DNS，DNS服务负责将我们访问的域名解析到正确的ip，如果DNS出错，我们常常会遇到网页无法打开的情况。

更多内容不在这里展开，简单地说一下如何搭建一个DNS服务，这里介绍一个项目：[Xdns](https://github.com/allenm/xdns);

配置方法类似Hosts文件，可以简单地在本地搭起一个DNS服务。

之后你就可以通过域名正确地访问到本地项目的页面了。

