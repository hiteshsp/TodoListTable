var fields = [[],[]];
var cnt = 0;
var createNewTask = function(){

	var taskName = document.getElementById('task-name');
	var taskTag = document.getElementById('tag-name');
	var Status = document.getElementById('myDDL');
	var tbl = document.getElementById("myTable");
	
	var row = tbl.insertRow(tbl.rows.length);
	

	for(var i = 0; i < 5; i++)
	{
		fields[cnt][i] = row.insertCell(i);
	}
	
	fields[cnt][0].innerHTML = "<input type='checkbox' class = 'chkbox' onchange='toggleStatus()'>"
	fields[cnt][1].innerHTML= taskName.value;
	fields[cnt][2].innerHTML = taskTag.value;
	fields[cnt][3].innerHTML = Status.options[Status.selectedIndex].value;
	fields[cnt][4].innerHTML = "<button class='edit-task'> EDIT</button> <button class='delete-task'> DELETE</button>"
	
}
var toggleStatus= function(){
	var checkbox = document.getElementsByClassName('chkbox');
	for(var i=0; i<5; i++){
	if( checkbox[i].checked)
	{
		fields[i][3].innerHTML = "Completed"		
	}
	else{
		fields[i][3].innerHTML = "Pending"		
	}
	}
}
