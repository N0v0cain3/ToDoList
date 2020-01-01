var todos=[];

while(input!="quit")
{
	var input=prompt("What would you like to do? : ");
if(input==="list")
{
	todos.forEach(function(todo,i){console.log(i+": "+todo);})
}
else if(input==="delete")
{
	var index=Number(prompt("Enter index to be deleted: "));
	todos.splice(index,1);  
	console.log("Deleted Todo")
}
else if(input==="new")
	{var newTodo=prompt("Enter a new todo");
		todos.push(newTodo);
		console.log("Todo added");
	}
}

// var tag = document.getElementById("highlight");
// var isBlue=false;
// setInterval(
// 	function()
// 	{if(isBlue)
// {
// 	h1.style.color="white";
// }else
// h1.style.color="blue";
// isBlue=!isBlue},1000);
