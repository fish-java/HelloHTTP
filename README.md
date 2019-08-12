# Hello HTTP

1. 相对于图解HTTP协议、HTTP权威指南这种大神作品，这个系列的教程更多的是通过抓包以及代码实战来理解。所以这个项目可以作为上述作品的补充参考
2. 笔者水平有限，所以更多是通过代码来演示，有错误的地方请指出


### 环境准备
为了演示，本文主要是用node + postman + wireshark 来演示。

- node：

  服务端代码使用node的话很简单，所以用它了。

  但是不会node也没有关系，用的都是最简单的语法，几个小时就可以零基础入门

- postman curl ，不用说了，HTTP协议调试神器

- wireshark，HTTP建立在TCP的基础之上的，wireshark是抓包神器

### HTTP版本
HTTP1.1现在是广泛使用的HTTP版本，我默认使用的就是他，HTTP2还有点远。
