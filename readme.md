#关于jSmarty

jSmarty是一款js模板解析引擎，语法仿照PHP的smarty，达到99%相似度，且插件使用方法也一致；

感谢http://code.google.com/p/jsmart/提供的原生解析引擎代码；

经过简单的移植，将之做为Nodejs的模板解析引擎，经测试，可以正常执行，非常强大；

##使用方法

###安装jSmarty包

```javascript
npm install jsmarty
```

###使用demo
```javascript
	var jsmarty  = require("jsmarty");

	var data = {
       title: '书籍列表',
       books: [
          {
             title  : 'JavaScript犀牛书。',          
             author : 'luffy',                            
             price  : '￥50'
          },
          {
             title  : 'CSS鸵鸟书。',
             author : 'zoro',
			 price  : '￥30'
          },
          {
             title  : 'MVC猫头鹰书。',
             author : 'nami',
             price  : '￥20'
          }
        ]
    };
    fs.readFile("./test.tpl", "UTF-8", function(err, tpl){
        res.write(jsmarty.render(tpl, data));
        res.end();
    });
```

###jsmart源码地址
http://code.google.com/p/jsmart/

###语法使用说明
jSmart语法说明：http://code.google.com/p/jsmart/wiki
php smarty语法说明：http://smarty.net

