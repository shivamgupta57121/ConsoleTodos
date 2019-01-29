var todos =[];

window.setTimeout(function () {
var input = prompt("What Would You Like To Do");

while(input !== "quit"){

	if(input==="list"){
		listTodo();
	}
	else if (input==="new"){
		addTodo();
	}
	else if(input === "delete"){
		deleteTodo();
	}

	input = prompt("what would you like to do");
}
console.log("OK,YOU QUIT THE APP")

function listTodo(){
		console.log("**********");
		todos.forEach(function(todo,i){
			console.log(i + ": " + todo);
		});
		console.log("**********");
}

function addTodo(){
	    var newTodo= prompt("Enter New Todo");
		todos.push(newTodo);
		console.log("Added Todo");
}

function deleteTodo(){
	    var i = prompt("enter index of todo to be deleted");
		todos.splice(i,1);
		console.log("Deleted Todo");
}

},500)