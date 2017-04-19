<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Openshift configuration UI</title>
  <link rel="stylesheet" href="/static/css/jquery-ui.css">
  <script src="static/js/jquery-1.12.4.js"></script>
  <script src="static/js/jquery-ui.js"></script>
  <script src="static/js/addService.js"></script>
  <script src="static/js/addRoute.js"></script>
  <script src="static/js/addPOD.js"></script>
  <script>
  $( function() {
    $( "#tabs" ).tabs();
  } );
  </script>
</head>
<body>
 
<div id="tabs">
  <ul>
    <li><a href="#tabsPOD">POD</a></li>
    <li><a href="#tabsReplicationController">ReplicationController</a></li>
    <li><a href="#tabsService">Service</a></li>
    <li><a href="#tabsReplica">Replica</a></li>
    <li><a href="#tabsDeployment">Deployment</a></li>
    <li><a href="#tabsDaemonSet">DaemonSet</a></li>
    <li><a href="#tabsConfigMap">ConfigMap</a></li>
    <li><a href="#tabsJob">Job</a></li>
    <li><a href="#tabsPersistentVolume">PV</a></li>
  </ul>
  <div id="tabsPOD">
    <form action="k8s?tabType=pod" method="post">
    	<p>Add description about template.</p>
        <table id="pod">

        </table>
        <br><br> 
	<input type="button" value="add a new POD" onclick="addPOD()" />
        <br>
        <input type="text" id="delPODTextId" />
        <input type="button" value="delete the latest service" onclick="delPOD()" />
        <br><br> 
   	<input type="submit" name="submit_POD" value="submit">   
   </form>
  </div>

  <div id="tabsReplicationController">
    <form action="k8s?tabType=RC" method="post">
    <p>Add description about DeploymentConfig.</p>
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
   <input type="submit" name="submit_RC" value="submit">
   </form>
  </div>

  <div id="tabsService">
    <form action="k8s?tabType=service" method="post">
    <p>Add description about Service.</p>
        <table id="service">

        </table>
        <br><br> 
	<input type="button" value="add a new service" onclick="addService()" />
        <br>
        <input type="text" id="delTextId" />
        <input type="button" value="delete the latest service" onclick="delService()" />

        <br><br> 
   <input type="submit" name="submit_POD" value="submit">   
   </form>
  </div>

  <div id="tabsReplica">
    <form action="k8s?tabType=Replica" method="post">
    <p>Add description about Replica.</p>
        <table id="Replica">

        </table>
        <br><br> 
	<input type="button" value="add a new Replica" onclick="addReplica()" />
        <br>
        <input type="text" id="delReplicaTextId" />
        <input type="button" value="delete the latest Replica" onclick="delReplica()" />

        <br><br> 
   <input type="submit" name="submit_POD" value="submit">   
   </form>
  </div>
 
  <div id="tabsPV">
    <p>Add description about PV.</p>
    <form action="k8s" method="post">
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

  <div id="tabsPVC">
    <p>Add description about PVC.</p>
    <form action="k8s" method="post">
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
<!-- 
<label for="male">Male</label>
<input type="radio" name="sex" id="male" />
<br />
<label for="female">Female</label>
<input type="radio" name="sex" id="female" />
<a class="email" href="mailto:{{.Email}}">{{.Email}}</a>
-->
</div>
 
<br><br> 
<input type="submit">
</body>
</html>
