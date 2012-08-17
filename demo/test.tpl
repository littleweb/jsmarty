<!DOCTYPE html>
<html>
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<title>jSmarty测试</title>
<style type="text/css">
	li{
		padding-bottom: 10px;
	}
</style>
</head>
<body>
<h1><{$title|upper}></h1>
<{foreach $books as $i => $book}>
  <ul>
     <li>
		<p><strong>书名：</strong><{$book.title}></p>
		<p><strong>作者：</strong><{$book.author}></p>
		<p><strong>价格：</strong><{$book.price}></p>
	</li>
  </ul>
<{/foreach}>
<script type="text/javascript"></script>
</body>
</html>