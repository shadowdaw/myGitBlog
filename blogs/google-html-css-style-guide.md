# 1 Background

本文档提供了HTML和CSS的格式规范，旨在改善团队协作，保证代码质量，确保底层基础架构。本文适用于HTML、CSS和GSS（译者并不知道这是啥格式）文件。只要通用代码符合本规范，就可以放心地使用工具混淆、压缩、编译。 

# 2 通用

## 2.1 通用规范

### 2.1.1 协议

**对于可使用HTTPS协议引入的文件资源，一律使用HTTPS**。

**一律**使用HTTPS协议(`https:`)引入图片和其他多媒体文件、样式表（CSS文件）、脚本文件（JS文件），除非对应文件无法通过HTTPS协议访问。

```HTML
<!--不建议使用:省略协议 -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<!--不建议使用:使用HTTP协议 -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```



```HTML
<!-- 建议使用 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```


```CSS
/* 不建议使用: 省略协议 */
@import '//fonts.googleapis.com/css?family=Open+Sans'; 

/* 不建议使用:使用HTTP协议 */
@import 'http://fonts.googleapis.com/css?family=Open+Sans';
```


```CSS
/* 建议使用 */
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
```

## 2.2 通用格式规范



### 2.2.1 缩进

**一次使用2个空格缩进**.

不要使用Tab或者混合使用Tab和空格来缩进。

```
<ul>
  <li>Fantastic
  <li>Great
</ul>
```

```
.example {
  color: blue;
}
```

###2.2.2 大小写

**只使用小写字母**。

所有代码都必须是小写的：包括HTML元素名，属性，属性值(除了`text/CDATA`),CSS的选择器、属性名和属性值（字符串例外）。 

```
<!-- 不建议使用 -->
<A HREF="/">Home</A>
```
```
<!-- 建议使用 -->
<img src="google.png" alt="Google">
```
```
/* 不建议使用 */
color: #E5E5E5;
```
```
/* 建议使用 */
color: #e5e5e5;
```

### 2.2.3 空白结尾

**避免`空白结尾`**。

空白结尾是不必要的，并且会使得文件差异比较变的复杂

```
<!--  不建议使用 -->
<p>What?_
```
```
<!-- 建议使用：使用标点结尾-->
<p>Yes please.
```

## 2.3 通用Meta规范


### 2.3.1 编码

**使用UTF-8(无BOM)编码**.

译者注：[维基百科:BOM(Byte_order_mark)](https://link.zhihu.com/?target=http%3A//en.wikipedia.org/wiki/Byte_order_mark)

确保你的编辑器使用UTF-8编码作为字符编码，并且没有启用`字节顺序标记(ByteOrderMark)`

使用`<meta charset="utf-8">`在HTML模版或文档中声明编码格式。CSS文件中不需要声明编码格式，因为CSS文件默认使用UTF-8。

（更多关于编码和正确使用它们的方法可以参考：[Handling character encodings in HTML and CSS](https://www.w3.org/International/tutorials/tutorial-char-enc/).)

### 2.3.2 注释

**尽量在必要的地方**对代码做标注解释

使用`注释`以解释代码：它在那些地方使用，它的目的是什么，各自的使用场景和首选方法都有哪些？

（本条目是可选条目，期望完整的代码文档说明通常是不现实的。根据项目的复杂度，HTML和CSS代码中负担可能会尤为沉重。）

### 2.3.3 行动事项

**使用`TODO`标记代办事项或行动事项。**

仅使用关键词`TODO`来高亮标记代办事项，不要使用诸如`@@`之类的标签。

在`TODO`后的括号添加联系人或邮件地址：`TODO(联系方式)`

```
{# TODO(john.doe): revisit centering #}
<center>Test</center>
```

在`TODO`后使用冒号并添加代办事项：`TODO：代办事项`

```
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```


# 3 HTML

## 3.1 HTML语法规范

### 3.1.1 文档类型

**使用HTML5**

推荐所有的HTML文档首选使用HTML5(HTML 语法)：`<!DOCTYPE html>`。

推荐使用HTML文件，使用`text/html`,不要使用标记为`application/xhtml+xml`的XHTML. XHTML文件，此类文件缺乏浏览器和底层支持，相较HTML的优化空间也较少。

虽然HTML可以识别，但不要在自闭合（self-closing）元素的尾部添加斜线。 示例：使用`<br>`, 而不是`<br/>`.

### 3.1.2 HTML 有效性检查

**尽量使用校验后的HTML文件**

除非是为了达到极致的表现而需要控制文件大小，否则尽量使用经过校验的HTML代码。 

使用诸如[W3C HTML 校验器](https://validator.w3.org/nu/)来做HTML校验测试。

使用有效的HTML代码是代码质量的重要基准，而且有助于学习技术要求和规范，并确保恰当的HTML语法。

```
<!-- 不建议使用 -->
<title>Test</title>
<article>This is only a test.
```

```
<!-- 建议使用 -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

### 3.1.3 符合语义

**使用符合HTML元素语义的代码**。

按照符合其语义的方式使用元素（有时候错误地被称为标签）。举例来说：使用头部元素作为头部，使用`p`元素来作为段落，使用`a`元素来作为锚点等等。 

按照符合其语义的方式书写HTML 对于代码的可读性，复用性和代码效率而言至关重要。 

```
<!-- 不建议使用 -->
<div onclick="goToRecommendations();">All recommendations</div>
```

```
<!-- 建议使用 -->
<a href="recommendations/">All recommendations</a>
```

### 多媒体元素的替代文本

**给多媒体元素提供替代文本**

对于诸如图片，视频，动画元素比如`canvas`之类的多媒体元素，确保提供了替代文本。

替代文本(`alt`)，对于图片而言提供了图片的含义，而对于可用的视频及音频元素而言，则提供了标题。


提供替代文本对于提高可读性而言至关重要：如果没有`alt`标签，一个盲人用户几乎没有线索知道一张图片的含义，对于其他用户来说，面对没有`alt`的音视频元素，也会缺乏途径理解该音视频所要表达的内容。 
 
```
<!-- 不建议使用 -->
<img src="spreadsheet.png">
```
```
<!-- 建议使用 -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

### 3.1.5 分离关注点

**将结构、表现、行为三者分离开**

严格地保证结构（HTML标记），表现（样式），和行为（脚本）分离开来，并使得三者之间的相互影响降到最低。

这意味着要确保HTML文档和模版中只包含HTML元素，并且HTML只负责提供页面结构。将表现层的东西都放入样式文件中，将行为层的东西都放入脚本文件。

此外，保证在HTML文档和模版中使用尽可能少的样式文件和脚本文件链接，来保证三者的产生联系的地方尽可能的少。

分离结构、表现、行为，对于项目的可维护性至关重要。修改HTML文档和模版总是比修改样式和脚本更为麻烦。 

```
<!-- 不建议使用 -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>
```
  
  
```
<!-- 不建议使用 -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

### 3.1.6 实体引用(entity references)

**不要使用实体引用(entity references)**。



如果团队内所有的文件和编辑器使用统一的编码（UTF-8）
，那么诸如`&mdash;`:`-`, `&rdquo;`:`"`, or `&#x263a;`:`☺`等字符，不需要使用实体引用。

只有一个例外：在HTML中具有特殊含义的字符 （比如 < 和 & ）或者控制字符和不可见的字符（比如换行符）。

```
<!-- 不建议使用 -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.
```

```
<!-- 不建议使用 -->
The currency symbol for the Euro is “€”.
```

### 3.1.7 可选标签

**（非必要）省略可选标签**

出于文件大小最优化和可搜索性的考虑，可以省略可选标签。[HTML文档说明](https://whatwg.org/specs/web-apps/current-work/multipage/syntax.html#syntax-tag-omission)列举了可以省略的标签。

（这个做法有违Web开发者一直以来接受的教导，需要一个比较长的时间让人们达成共识。因为为了简洁和一致，最好省略所有的可选标签，而不是仅仅省略其中一个。） 

```
<!-- 不建议使用 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>
```

```
<!--建议使用 -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.
```

### 3.1.8 type 属性

**引入CSS文件和Script文件时省略`type`属性**。

对于非CSS格式的样式表和非JavaScript的脚本文件，才使用`type`属性.

由于HTML中将`text/css` 和`text/javascript`作为默认值，所以在此环境中不需要声明`type`属性，即使在低版本浏览器上也能正常工作。 

```
<!-- 不建议使用 -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css"
  type="text/css">
```

```
<!-- 建议使用 -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css">
```

```
<!-- 不建议使用 -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>
```

```
<!-- 建议使用 -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

## 3.2 HTML 格式规范

### 3.2.1 通用格式

**另起一行以创建一个块级元素，列表元素和表单元素，对每一个子元素都做一次缩进**。

根据元素的样式（由于CSS可以通过`display`属性修改元素的表现），每一个块级元素，列表元素和表单元素都应另起一行。

同样的，如果它们是一个块级元素，列表元素和表单元素的子元素则做一次缩进处理。

（如果在使用列表元素时，你遇到了空格的问题，允许将所有的`li`元素放入一行。抛出一个警告总比抛出一个错误来的好。


```
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
```
```
<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>
```
```
<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```

### 3.2.2 HTML Quotation Marks

**使用双引号而不是单引号**。

在一个属性值上上使用(`""`)而不是(`''`)。

```
<!-- 不建议使用 -->
<a class='maia-button maia-button-secondary'>Sign in</a>
```

```
<!-- 建议使用 -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

# CSS

## 4.1 CSS语法规范

### 4.1.1 CSS有效性校验 

**尽量使用校验后的CSS文件**

除非因为CSS校验器的Bug或者需要某种特定的样式，否则尽量使用经过校验的CSS代码。 

使用诸如[W3C CSS 校验器](https://jigsaw.w3.org/css-validator/)来做CSS有效性校验。

使用经过有效性校验的CSS代码是代码质量的重要基准，有助于快速找出CSS代码中可能不生效或者可以移除的部分，以确保恰当的CSS用法。

### 4.1.2 ID和Class类名

**使用释义性或者通用性的ID和class类名**


ID和class的类名不要使用抽象的或者意义模糊的命名方式，确保使用可以反应出元素具体用途或者其通用性的命名。

首选意义具体，能准确反映出元素用途的命名方式，这样最容易理解并且改动的可能性也最小。

通用命名主要用于一些与其他同级元素没有显著区别的元素，这些元素通常是一些辅助元素。

使用功能性或者通用性的命名可以有效减少不必要的文档修改。

```
/* 不建议使用: 意义不明确 */
#yee-1901 {}

/* 不建议使用: 过于抽象 */
.button-green {}
.clear {}
```

```
/* 不建议使用: 意义明确 */
#gallery {}
#login {}
.video {}

/* 不建议使用: 通用 */
.aux {}
.alt {}
```

### 4.1.3 ID与Class类名风格

**ID和class类名需要确保达意的前提下尽可能的短**。

试着使用一些缩写、摘要来表达ID或class类名的含义。 

这种方式有助于提高代码的可读性和效率。

``` 
/* 不建议使用 */
#navigation {}
.atr {}

```

```
/* 建议使用 */
#nav {}
.author {}
```


### 4.1.4 标签选择器

不要ID或class选择器与标签选择器混合使用。

除非必要（比如辅助类），否则不要在元素标签后连接一个ID或者class类名。

减少不必要的父选择器有助于[提高CSS表现](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)

```
/* Not recommended */
ul#example {}
div.error {}
```
```
/* Recommended */
#example {}
.error {}
```

### 4.1.5 属性的简写形式

**尽可能使用属性值的简写形式**.

尽可能地使用CSS提供的属性[简写形式](https://www.w3.org/TR/CSS21/about.html#shorthand)（比如`font`）,哪怕只有定义了一个属性值。 

使用属性值的简写形式有助于提供代码执行效率和可读性。

```
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```
```
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 4.1.6 0的单位值

**除非必要，省略“0”后面的单位值**. 

```
flex: 0px; /*flex-basis属性需要写明单位值 . */
flex: 1 1 0px; /* 可以省略，但是IE11里需要 */
margin: 0;
padding: 0;
```

### 4.1.7 小数前面的 0

**省略大于-1且小于 1的小数前面的 0**. 

```
font-size: .8em;
```

### 4.1.8 十六进制色值

**尽量使用3个字符的简写形式的十六进制**.

对于可以缩写成3个字符的十六进制色值，就使用简写形式使其更简洁短小。 

```
/* Not recommended */
color: #eebbcc;
```
```
/* Recommended */
color: #ebc;
```

### 4.1.9 前缀

**（可选）使用明确的前缀** 

在大型项目、在其他项目中嵌入代码、外部网站等情况下，对ID或class类名使用前缀（作为命名空间）。使用剪短、唯一的标识符，并用短横线`-`连接。 

使用命名空间可以防止命名冲突，也可以使得维护更容易，比如使用搜索／替换操作时。

```
.adw-help {} /* AdWords */
#maia-note {} /* Maia */
```

### 4.1.10 ID 和 Class类名分隔符

在ID 和 Class类名中使用`-`连接符.

为了确保代码的可读性和可扫描性，不要在选择器内使用`-`以外的连接符连接单词，也不要省略连接符。

```
/* Not recommended: 不要省略 “demo” 和 “image”之间的连接符 */
.demoimage {} 
/* Not recommended: 不要使用下划线替代连字符 */
.error_status {}
```
```
/* Recommended */
#video-id {}
.ads-sample {}
```

### 4.1.11 CSS Hack

不要使用 `userAgent` 检测，也不要使用CSS Hack，先尝试一下别的方案。

使用特定的CSS过滤器，工作环境和CSS Hack来使得不同的样式生效看上去非常诱人。

为了确保代码的效率和可管理性，两种方法都应该作为最后迫不得己的手段考虑。换而言之，使用`userAgent` 检测或CSS Hack很容易破坏项目长期来看的最优化，因为允许使用`userAgent` 检测或CSS Hack就会造成更频繁地使用它们，从而一发不可收拾。

## 4.2 CSS 格式

### 4.2.1 声明顺序

**字母顺序声明**.

使用首字母排序声明属性是一个简单有效的方案使得代码易于维护和保持一致。

排序时忽略不同浏览器提供的前缀属性，但同一属性的不同浏览器前缀仍然按照首字母排序。 (比如 -moz prefix comes before -webkit).

```
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

### 4.2.2 声明块缩进

**缩进所有的声明块**.

在[声明块](https://www.w3.org/TR/CSS21/syndata.html#block—)里声明另一个声明块时也同样需要遵守这条规则，它反映出样式的等级并提升可读性。
```
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
```

### 4.2.3 声明语句结尾

**声明语句都应当以分号结尾**.

为了一致性和可扩展性，声明语句都应当以分号结尾。

```
/* Not recommended */
.test {
  display: block;
  height: 100px
}
```
```
/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

### 4.2.4 属性名结尾

**在属性名的冒号`":"`后面添加一个空格**.

在属性名与属性值之间添加单个空格，（但在属性值和冒号之间不要添加），以保持代码一致。


```
/* Not recommended */
h3 {
  font-weight:bold;
}
```

```
/* Recommended */
h3 {
  font-weight: bold;
}
```

### 4.2.5 声明语句与选择器的分隔

在最后一个选择器与声明块之间使用一个空格.

在最后一个选择器和[声明块](https://www.w3.org/TR/CSS21/syndata.html#rule-sets)的左花括号之间添加单个空白符.

声明块的左花括号和最后一个选择器必须在同一行。

```

/* Not recommended: missing space */
#video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video
{
  margin-top: 1em;
}
```
```
/* Recommended */
#video {
  margin-top: 1em;
}
```

### 4.2.6 选择器和声明语句分隔

**每一个选择器和声明语句都必须独占一行**。

```
/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
```

```
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```
### 4.2.7  CSS规则分隔

**另起一行以分隔两条CSS规则**.

```
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

### 4.2.8 CSS引号

**在选择器属性和属性值上使用单引号**.

选择器属性和属性值上使用(`''`)而非使用(`""`) .  在URI值(`url()`)上不要使用引号 .

例外: 如果你要使用 `@charset`，使用双引号：[不推荐使用单引号的原因](https://www.w3.org/TR/CSS21/syndata.html#charset).

```
/* Not recommended */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
```
```
/* Recommended */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

## 4.3 CSS Meta 规则

### 4.3.1 组件注释

**(可选)给组件添加组件注视**.

使用注释来组织组件代码，另起一行以分隔组件.

```
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
```

# 最后的话

**保持一致**.

如果你正在进行编程，花一点看一看项目里已有的代码并鉴别一下代码风格。如果它们在算术运算符周围使用空格，那么你也适用。如果它们用虚线框包裹注释，那么你也用虚线框包裹注释。 

使用代码规范标准的目的是为了有一个统一的语法标准使得人们可以明白你想表达什么而不是关注你表达的方式。我们发布这个公共的规则好让人们都知道这个语法标准，但是本地的标准同样重要。如果你添加的代码和其他人写的代码极其不一样，会让阅读你代码的人产生非常大的困惑。这是应该避免的。

