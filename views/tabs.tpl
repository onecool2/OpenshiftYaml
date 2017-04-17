<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Openshift configuration UI</title>
  <link rel="stylesheet" href="/static/css/jquery-ui.css">
  <script src="static/js/jquery-1.12.4.js"></script>
  <script src="static/js/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#tabs" ).tabs();
  } );
  </script>
</head>
<body>
 
<div id="tabs">
  <ul>
    <li><a href="#tabs-0">Create a Template</a></li>
    <li><a href="#tabs-1">Create a POD</a></li>
    <li><a href="#tabs-2">Create a Service</a></li>
    <li><a href="#tabs-3">Create a route</a></li>
    <li><a href="#tabs-4">Create a PV</a></li>
    <li><a href="#tabs-5">Create a PVC</a></li>
  </ul>
  <div id="tabs-0">
    <form action="index" method="post">
    <p>Add description about Deployment.</p>
	apiVersion: <input type="text" name="apiVersion" value="v1">
        <br><br>
	kind: <input type="text" name="kind" value="Template">
        <br><br>
	name: <input type="text" name="name" value="app's name">
        <br><br>
	description: <input type="text" name="describtion" value="app's description">
        <br><br>
	iconClass: <input type="text" name="iconClass" value="icon">
        <br><br>
	tags: <input type="text" name="tags" value="latest">
        <br><br>
   <input type="submit" value="Submit">
   </form>
  </div>

  <div id="tabs-1">
    <p>Add description about POD.</p>
	First name:<br>
    	<input type="text" name="firstname" value="Mickey">
	<br>
	Last name:<br>
        <input type="text" name="lastname" value="Mouse">
    <br><br>
   <input type="submit" value="Submit">
   </form>
  </div>
  <div id="tabs-2">
    <p>Add description about Service.</p>
    <form action="index" method="post">
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
  </div>
  <div id="tabs-3">
    <p>Add description about route.</p>
    <form action="index" method="post">
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
  </div>
  <div id="tabs-4">
    <p>Add description about PV.</p>
    <form action="index" method="post">
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
  </div>
  <div id="tabs-5">
    <p>Add description about PVC.</p>
    <form action="index" method="post">
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
  </div>
 
<label for="male">Male</label>
<input type="radio" name="sex" id="male" />
<br />
<label for="female">Female</label>
<input type="radio" name="sex" id="female" />
<a class="email" href="mailto:{{.Email}}">{{.Email}}</a>
</div>
 
</body>
</html>
