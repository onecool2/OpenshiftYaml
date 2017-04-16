<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>
	
<form action="page1" method="post">
<input list="object" name="object">
<datalist id="object">
  <option value={{.Email}}>
  <option value="Service">
  <option value="Route">
  <option value="PV">
  <option value="PVC">
</datalist>
<input type="submit">
</form>
<a class="email" href="mailto:{{.Email}}">{{.Email}}</a>

<p><strong>注意:</strong> This tool is designed to OpenShift V3 configration</p>

</body>
</html>
