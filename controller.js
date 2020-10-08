const fs = require("fs");

console.log("hoho");
const loadData = () => {
	let todoList0 = fs.readFileSync("data.json");
	let todoList = fs.readFileSync("data.json").toString();
	// console.log("data from file:", todoList0);
	// console.log("data after stringify:", todoList);
	todoList = JSON.parse(todoList);
	// console.log("data after json.parse:", todoList);
	// todoList[2].todo = "deleted";
	// console.log(todoList[2].id);
	return todoList;
};

const saveData = (todoList) => {
	console.log("todoList before conversion into string:", todoList);
	const todoJSON = JSON.stringify(todoList);
	console.log("todoList after:", todoJSON);
	fs.writeFileSync("data.json", todoJSON);
};

const createTodo = (todo, status) => {
	const todoList = loadData();
	todoList.push({
		id: todoList.length != 0 ? todoList[todoList.length - 1].id + 1 : 0,
		todo: todo,
		status: status,
	});
	saveData(todoList);
};
const deleteTodo = (id) => {
	let todoList = loadData();
	// let i = todoList.findIndex((item) => item.id == id);

	// todoList.splice(i, 1);

	todoList = todoList.filter((item) => item.id !== id);
	saveData(todoList);
};

const deleteAllTodo = () => {
	let todoList = loadData();
	todoList = [];
	saveData(todoList);
};

module.exports = {
	loadData,
	createTodo,
	deleteTodo,
	deleteAllTodo,
};
