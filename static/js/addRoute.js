var routeNum = 1;
function addRoute() {
	var route = document.getElementById("route");
	var rowOfStartLine = route.insertRow();
	var rowOfApiversion = route.insertRow();
	var rowOfKind = route.insertRow();
	var rowOfName = route.insertRow();
	var rowOfDescription = route.insertRow();
	var rowOfPortName = route.insertRow();
	var rowOfPort = route.insertRow();
	var rowOfTargetPort = route.insertRow();
	var rowOfSelectName = route.insertRow();
	//var rowOfEndLine = route.insertRow();

	var cellStartLine = rowOfStartLine.insertCell();
	var cellApiversion = rowOfApiversion.insertCell();
	var cellKind = rowOfKind.insertCell();
	var cellName = rowOfName.insertCell();
	var cellDescription = rowOfDescription.insertCell();
	var cellPortName = rowOfPortName.insertCell();
	var cellPort = rowOfPort.insertCell();
	var cellTargetPort = rowOfTargetPort.insertCell();
	var cellSelectName = rowOfSelectName.insertCell();
	//var cellEndLine = rowOfEndLine.insertCell();

	cellStartLine.innerText = "-----------------Route:" + routeNum + "---------------"
	cellPort.innerText = "Port:";
	cellApiversion.innerText = "Apiversion:";
	cellKind.innerText = "Kind:";
	cellName.innerText = "Name:";
	cellDescription.innerText = "Description:";
	cellPortName.innerText = "PortName:";
	cellPort.innerText = "Port:";
	cellTargetPort.innerText = "TargetPort:";
	cellSelectName.innerText = "SelectName:";
        //cellEndLine.innerText = "-------------------------"
	routeNum++;

        cellStartLine = rowOfStartLine.insertCell();
	cellApiversion = rowOfApiversion.insertCell();
	cellKind = rowOfKind.insertCell();
	cellName = rowOfName.insertCell();
	cellDescription = rowOfDescription.insertCell();
	cellPortName = rowOfPortName.insertCell();
	cellPort = rowOfPort.insertCell();
	cellTargetPort = rowOfTargetPort.insertCell();
	cellSelectName = rowOfSelectName.insertCell();
	//cellEndLine = rowOfEndLine.insertCell();

	cellApiversion.innerHTML = "<input type='text' name='routeApiversion' + routeNum value = 'new'>";
	cellKind.innerHTML = "<input type='text' name='routeKind' + routeNum value = 'new'>";
	cellName.innerHTML = "<input type='text' name='routeName' + routeNum value = 'new'>";
	cellDescription.innerHTML = "<input type='text' name='routeDescription' + routeNum value = 'new'>";
	cellPortName.innerHTML = "<input type='text' name='routePortName' + routeNum value = 'new'>";
	cellPort.innerHTML = "<input type='text' name='routePort' + routeNum value = 'new'>";
	cellTargetPort.innerHTML = "<input type='text' name='routeTargetPort' + routeNum value = 'new'>";
	cellSelectName.innerHTML = "<input type='text' name='routeSelectName' + routeNum value = 'new'>";

//	apiVersion: <input type="text" name="apiVersion" value="v1">
//        <br><br>
//	kind: <input type="text" name="kind" value="Service">
//        <br><br>
//	name: <input type="text" name="name" value="app's name">
 //       <br><br>
//	description: <input type="text" name="describtion" value="app's description">
 //       <br><br>
//	    port name: <input type="text" name="ports_name" value=" ">
//	    port: <input type="text" name="ports_port" value=" ">
//	    targetPort: <input type="text" name="ports_targetPort" value=" ">
}

function delRoute() {
	var rowIndex = document.getElementById("delRouteTextId").value;
	var route = document.getElementById("route");
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	route.deleteRow(rowIndex-1);
	routeNum--
}

