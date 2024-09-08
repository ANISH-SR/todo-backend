//Todo App storing storing info in todos.

const express = require("express");
const app = express();
app.use(express.json());
const todos = [];

app.post("/addtodo", (req, res) => {
	const id = req.body.id;
	const todo = req.body.todo;

	if (id === undefined || todo === undefined) {
		return res.status(400).json({
			message: "Invalid req."
		})
	}

	todos.push({
		id,
		todo
	});

	res.json({
		message: "You have added the todo"
	});

});

app.put("/update-todo/:id", (req, res) => {
	const { id } = req.params;
	const { todo } = req.body;

	const todoIndex = todos.findIndex(item => item.id === id);

	if (todoIndex === -1) {
		return res.status(404).json({ message: "Todo not found" });
	}

	todos[todoIndex].todo = todo;

	res.json({
		message: "Todo updated successfully",
		todo: todos[todoIndex]
	});
});
app.delete("/delete-todo/:id", (req, res) => {
	const { id } = req.params;

	const todoIndex = todos.findIndex(item => item.id === id);

	if (todoIndex === -1) {
		return res.status(404).json({ message: "Todo not found" });
	}

	const deletedTodo = todos.splice(todoIndex, 1);

	res.json({
		message: "Todo deleted successfully",
		todo: deletedTodo[0]
	});
});

app.get("/gettodos", (req, res) => {

	console.log(todos);
	res.json({
		todos
	})
})



app.listen(5000, () => console.log("Server is running on port 5000"));
