<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>Document</title>
<script type="text/javascript">
var i = 0;
function addInput(){
	var o = document.createElement('input');
	o.type = 'button';
	o.value = '按钮'+ i++;
	if(o.attachEvent){
		o.attachEvent('onclick',addInput)
	}else{
		o.addEventListener('click',addInput)
	}
	document.body.appendChild(o);
	o = null;
}
</script>
</head>
<body onload="addInput()">
</body>
</html>
