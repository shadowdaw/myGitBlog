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

## 3.1 HTML规范

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
<!-- Not recommended -->
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
<!-- Recommended -->
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
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.
```

```
<!-- Recommended -->
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




