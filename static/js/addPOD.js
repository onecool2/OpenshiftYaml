var podMetaLabelNum = 1;
var podMetaAnnotationNum = 1;
var pod;
var podNum = 0;
var containerNum=0;
var podArray = new Array();
function addPOD() {
	newpod=new POD(podNum);//init();
	podArray[podNum] = newpod;
	podArray[podNum].init(podNum);
	podNum++;
	console.log(podNum);
}

function add_spec_container (){
	pod = document.getElementById("pod");
	var rowIndex = document.getElementById("spec_containers_tr").rowIndex;
	console.log(rowIndex);
	var rowOfspec_container_name = pod.insertRow(rowIndex + 1);
	var cellspec_container_name = rowOfspec_container_name.insertCell();
	cellspec_container_name.innerText = "-name:";
	cellspec_container_name = rowOfspec_container_name.insertCell();
	cellspec_container_name.innerHTML = "<input type='text' name='pod_spec_container_name' + containerNum value = 'container Num'>";
	
	var rowOfspec_container_image = pod.insertRow(rowIndex + 2);
	var cellspec_container_image = rowOfspec_container_image.insertCell();
	cellspec_container_image.innerText = "image:";
	cellspec_container_image = rowOfspec_container_image.insertCell();
	cellspec_container_image.innerHTML = "<input type='text' name='pod_spec_container_image' + containerNum value = 'container Num'>";

	var rowOfspec_container_imagePullPolicy = pod.insertRow(rowIndex + 3);
	var cellspec_container_imagePullPolicy = rowOfspec_container_imagePullPolicy.insertCell();
	cellspec_container_imagePullPolicy.innerText = "imagePullPolicy:";
	cellspec_container_imagePullPolicy = rowOfspec_container_imagePullPolicy.insertCell();
	cellspec_container_imagePullPolicy.innerHTML = "<input type='text' name='pod_spec_container_imagePullPolicy' + containerNum value = 'container Num'>";


	containerNum++;
}

function add_metadata_labels_name (){
		pod = document.getElementById("pod");
		var rowIndex = document.getElementById("metadata_labels_tr").rowIndex;
		console.log(rowIndex);
		var rowOfmeta_label_name = pod.insertRow(rowIndex + 1);
		var cellmeta_label_name = rowOfmeta_label_name.insertCell(0);
		cellmeta_label_name.innerText = "-name:";
		cellmeta_label_name = rowOfmeta_label_name.insertCell(1);
		cellmeta_label_name.innerHTML = "<input type='text' name='pod_metadata_labels_name' + podMetaLabelNum value = 'podMetaLabelNum1'>";
		podMetaLabelNum++;
}

function add_metadata_annotations_name (){
	pod = document.getElementById("pod");
	var rowIndex = document.getElementById("metadata_annotations_tr").rowIndex;
	console.log(rowIndex);
	var rowOfmeta_annotations_name = pod.insertRow(rowIndex + 1);
	var cellmeta_annotations_name = rowOfmeta_annotations_name.insertCell();
	cellmeta_annotations_name.innerText = "-name:";
	cellmeta_annotations_name = rowOfmeta_annotations_name.insertCell();
	cellmeta_annotations_name.innerHTML = "<input type='text' name='pod_metadata_annotations_name' + podNum value = 'new'>";
}

function POD() {
	this.Num;
	this.apiversion;
	this.kind;
	this.metadata;
	this.meta_name;
	this.meta_namespace;
	this.meta_labels;
	this.meta_labels_name;
	this.meta_annotations;
	this.meta_annotations_name;
	this.pod;
	//this.prototype.podNum;

	


//	this.add_spec_container = function (pod) {
///		var rowOfspec_containers_name = pod.insertRow();
//		var rowOfspec_containers_image = pod.insertRow();
//		var rowOfspec_containers_imagePullPolicy = pod.insertRow();
//		var rowOfspec_containers_command = pod.insertRow();
///		var rowOfspec_containers_workingDir = pod.insertRow();
//		var rowOfspec_containers_ports_name = pod.insertRow();
//
//		add_spec_container_volumeMounts(pod)
///			add_spec_container_ports(pod)
//			add_spec_container_env(pod)

//	}

	this.add_spec_container_volumeMounts = function (pod) {
		var rowOfspec_containers_volumeMounts_name = pod.insertRow();
		var rowOfspec_containers_volumeMounts_mountPath = pod.insertRow();
		var rowOfspec_containers_volumeMounts_readOnly = pod.insertRow();
	}

	this.add_spec_container_ports = function (pod) {
		var rowOfspec_containers_ports_name = pod.insertRow();
		var rowOfspec_containers_ports_containerPort = pod.insertRow();
		var rowOfspec_containers_ports_hostPort = pod.insertRow();
		var rowOfspec_containers_ports_protocol = pod.insertRow();

	}
	this.add_spec_container_env = function (pod) {
		var rowOfspec_containers_env_name = pod.insertRow();
		var rowOfspec_containers_env_value = pod.insertRow();

	}
	this.add_spec_container_resources= function (pod) {
		var rowOfspec_containers_resources_limits_cpu = pod.insertRow();
		var rowOfspec_containers_resources_limits_memory = pod.insertRow();

	}

	this.add_spec_volumes = function(pod) {
		var rowOfspec_volumes_name = pod.insertRow();
		var rowOfspec_volumes_ = pod.insertRow();
		var rowOfspec_containers_resources_limits = pod.insertRow();
		var rowOfspec_env_value = pod.insertRow();

	}


	this.init = function(num) {
		this.Num = num;
		this.pod = document.getElementById("pod");
		var rowOfStartLine = this.pod.insertRow();
		//apiVersion
		var rowOfapiversion = this.pod.insertRow();
		var rowOfkind = this.pod.insertRow();
		var rowOfmetadata = this.pod.insertRow();
		var rowOfmeta_name = this.pod.insertRow();
		var rowOfmeta_namespace = this.pod.insertRow();
		var rowOflabels = this.pod.insertRow();
		var rowOfannotations = this.pod.insertRow();
			//spec
		//	add_spec_container(pod)
		//env
		//        add_spec_container_env(pod)
		//resources
		//	add_spec_container_resources(pod)
		//volumes
		//        addPOD_spec_volumes(pod)

		//	var rowOfspec_restartPolicy = pod.insertRow();
		//	var rowOfspec_dnsPolicycontainers_name = pod.insertRow();
		//	var rowOfspec_nodeSelector = pod.insertRow();
		//	var rowOfspec_imagePullSecrets = pod.insertRow();
		//	//var rowOfEndLine = pod.insertRow();

		var cellStartLine = rowOfStartLine.insertCell();
		var cellapiversion = rowOfapiversion.insertCell();
		var cellkind = rowOfkind.insertCell();
		var cellmetadata = rowOfmetadata.insertCell();
		var cellmeta_name = rowOfmeta_name.insertCell();
		var cellmeta_namespace = rowOfmeta_namespace.insertCell();
		var celllabels = rowOflabels.insertCell();
		var cellannotations = rowOfannotations.insertCell();
		//	var cellDescription = rowOfDescription.insertCell();
		//	var cellPortName = rowOfPortName.insertCell();
		//	var cellPort = rowOfPort.insertCell();
		//	var cellTargetPort = rowOfTargetPort.insertCell();
		//	var cellSelectName = rowOfSelectName.insertCell();
		//	//var cellEndLine = rowOfEndLine.insertCell();

		cellStartLine.innerText = "-----------------POD:" + this.Num + "---------------";
		cellapiversion.innerText = "apiversion:";
		cellkind.innerText = "kind:";
		cellmetadata.innerText = "metadata:";
		cellmeta_name.innerText = "name:";
		cellmeta_namespace.innerText = "namespace:";
		console.log(this.Num);
		//celllabels.innerHTML = "<label id='metadata_labels" + this.Num + "'>labels:</label>";
		//celllabels.innerHTML = "<label id='metadata_labels" + this.Num + "' onclick='this.add_metadata_labels_name()'>labels:</label>";
		//cellannotations.innerHTML = "<label id='metadata_annotations" + this.Num + "' onclick='this.add_metadata_annotations_name()'>annotations:</label>";


		//	cellName.innerText = "Name:";
		//	cellDescription.innerText = "Description:";
		//	cellPortName.innerText = "PortName:";
		//	cellPort.innerText = "Port:";
		//	cellTargetPort.innerText = "TargetPort:";
		//	cellSelectName.innerText = "SelectName:";
		//cellEndLine.innerText = "-------------------------"
		//podNum++;

		//        cellStartLine = rowOfStartLine.insertCell();
		cellapiversion = rowOfapiversion.insertCell();
		cellkind = rowOfkind.insertCell();
		cellmeta_name = rowOfmeta_name.insertCell();
		cellmeta_namespace = rowOfmeta_namespace.insertCell();

		//	cellDescription = rowOfDescription.insertCell();
		//	cellPortName = rowOfPortName.insertCell();
		//	cellPort = rowOfPort.insertCell();
		//	cellTargetPort = rowOfTargetPort.insertCell();
		//	cellSelectName = rowOfSelectName.insertCell();
		//cellEndLine = rowOfEndLine.insertCell();

		cellapiversion.innerHTML = "<input type='text' id='podApiversion" + this.Num + "'value ='" +this.Num+ "'>";
		cellapiversion.innerHTML = "<input type='text' id='podApiversion" + this.Num + "'value ='" +this.Num+ "'>";
		cellkind.innerHTML = "<input type='text' id='podKind" + this.Num + "'value ='" + this.Num +"'>";
		cellmeta_name.innerHTML = "<input type='text' id='podName" + this.Num +"'value = 'new'>";
		cellmeta_namespace.innerHTML = "<input type='text' id='podNamespace" + this.Num + "'value = 'new'>";
		//this.add_metadata_labels_name();
		//this.add_metadata_annotations_name();
		//	cellDescription.innerHTML = "<input type='text' name='podDescription' + podNum value = 'new'>";
		//	cellPortName.innerHTML = "<input type='text' name='podPortName' + podNum value = 'new'>";
		//	cellPort.innerHTML = "<input type='text' name='podPort' + podNum value = 'new'>";
		//	cellTargetPort.innerHTML = "<input type='text' name='podTargetPort' + podNum value = 'new'>";
		//	cellSelectName.innerHTML = "<input type='text' name='podSelectName' + podNum value = 'new'>";

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

	this.delPOD = function (Num) {
		var rowIndex = document.getElementById("pod").length;
		//var rowIndex = document.getElementById("podName" + Num).rowIndex;
		//var rowIndex = document.getElementById("metadata_labels0").rowIndex;
		alert (rowIndex);
		console.log(rowIndex);
//		this.pod = document.getElementById("pod");
		this.pod.deleteRow(rowIndex-1);
		this.pod.deleteRow(rowIndex-1);
		this.pod.deleteRow(rowIndex-1);
		this.pod.deleteRow(rowIndex-1);
		podNum--;
		console.log(podNum);
	}
}
function delPOD(){	
	podArray[podNum - 1].delPOD(podNum - 1);
	console.log(podNum);
}
