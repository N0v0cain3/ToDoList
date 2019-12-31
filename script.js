var todos=[];

while(input!="quit")
{
	var input=prompt("What would you like to do? : ");
if(input==="list")
{
	console.log(todos);
}
else if(input==="new")
	{var newTodo=prompt("Enter a new todo");
		todos.push(newTodo);
	}
}