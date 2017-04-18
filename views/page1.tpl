<html>
  <head>
    <title>addrow.html</title>
      <script type="text/javascript">
    
        var num = 1;
        
        function addService() {
            var servicePorts = document.getElementById("servicePorts");
            var row1 = servicePorts.insertRow();
            var row2 = servicePorts.insertRow();
            var row3 = servicePorts.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row2.insertCell();
            var cell3 = row3.insertCell();
            cell1.innerText = "The" + num + "name";
            cell2.innerText = "The" + num + "port";
            cell3.innerText = "The" + num + "targetport";
            num++;
            cell1 = row1.insertCell();
            cell2 = row2.insertCell();
            cell3 = row3.insertCell();
            cell1.innerHTML = "<input type='text' name='servicePortsName' + num value = 'new'>";
            cell2.innerHTML = "<input type='text' name='servicePortsPort' + num value = 'new'>";
            cell3.innerHTML = "<input type='text' name='servicePortstargetPort' + num value = 'new'>";
            
        }
        
        function delService() {
            var rowIndex = document.getElementById("delTextId").value;
            var servicePorts = document.getElementById("servicePorts");
            servicePorts.deleteRow(rowIndex-1);
            servicePorts.deleteRow(rowIndex-1);
            servicePorts.deleteRow(rowIndex-1);
        }
    </script>
    
  </head>
  
  <body>
    <table id="servicePorts">
        <!-- <tr><td>第一行</td><td>输入</td></tr> -->
        port name: <input type="text" name="ports_name" value=" ">
        port: <input type="text" name="ports_port" value=" ">
        targetPort: <input type="text" name="ports_targetPort" value=" ">
    </table>
    
    <input type="button" value="add new ports" onclick="addServicePorts()" />
    <br>
    <input type="text" id="delTextId" />
    <input type="button" value="delete the latest ports" onclick="delServicePorts()" />
  </body>
</html>
