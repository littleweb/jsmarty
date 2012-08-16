var http     = require("http"),
    jsmarty  = require("./jsmarty.js"),
    fs       = require("fs");

http.createServer(function(req,res){
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
}).listen(8080);
