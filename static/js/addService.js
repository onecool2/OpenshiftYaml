var num = 1;
function addService() {
	var service = document.getElementById("service");
	var rowOfStartLine = service.insertRow();
	var rowOfApiversion = service.insertRow();
	var rowOfKind = service.insertRow();
	var rowOfName = service.insertRow();
	var rowOfDescription = service.insertRow();
	var rowOfPortName = service.insertRow();
	var rowOfPort = service.insertRow();
	var rowOfTargetPort = service.insertRow();
	var rowOfSelectName = service.insertRow();
	//var rowOfEndLine = service.insertRow();

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

	cellStartLine.innerText = "-----------------Service:" + num + "---------------"
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
	num++;

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

	cellApiversion.innerHTML = "<input type='text' name='serviceApiversion' + num value = 'new'>";
	cellKind.innerHTML = "<input type='text' name='serviceKind' + num value = 'new'>";
	cellName.innerHTML = "<input type='text' name='serviceName' + num value = 'new'>";
	cellDescription.innerHTML = "<input type='text' name='serviceDescription' + num value = 'new'>";
	cellPortName.innerHTML = "<input type='text' name='servicePortName' + num value = 'new'>";
	cellPort.innerHTML = "<input type='text' name='servicePort' + num value = 'new'>";
	cellTargetPort.innerHTML = "<input type='text' name='serviceTargetPort' + num value = 'new'>";
	cellSelectName.innerHTML = "<input type='text' name='serviceSelectName' + num value = 'new'>";

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

function delService() {
	var rowIndex = document.getElementById("delTextId").value;
	var servicePorts = document.getElementById("service");
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
	servicePorts.deleteRow(rowIndex-1);
}

