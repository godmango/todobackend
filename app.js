const { demandOption, describe } = require("yargs");
const yargs = require("yargs");
const todoController = require("./controller");

yargs.command({
	command: "list",
	describe: "show todolist",
	handler: function () {
		let data = todoController.loadData();
		console.log("showing list", data);
	},
});

yargs.command({
	command: "create",
	describe: "create new todo",
	builder: {
		todo: {
			type: "string",
			demandOption: true,
			describe: "the thing todo",
		},
		status: {
			type: "boolean",
			demandOption: true,
			describe: "completed or nah",
			default: false,
		},
	},
	handler: function (arg) {
		// console.log("arg value", arg);
		todoController.createTodo(arg.todo, arg.status);
	},
});

yargs.command({
	command: "delete",
	describe: "delete todo by id",
	builder: {
		id: {
			type: "number",
			demandOption: true,
			describe: "id of todo",
		},
	},

	handler: function (arg) {
		todoController.deleteTodo(arg.id);
	},
});

yargs.command({
	command: "delete_all",
	describe: "delete everything",
	handler: function () {
		todoController.deleteAllTodo();
	},
});
yargs.parse();
