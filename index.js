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

app.put("/edittodo", (req, res) => {

})

app.delete("/deletetodo", (req, res) => {

})

app.get("/gettodos", (req, res) => {

	console.log(todos);
	res.json({
		todos
	})
})



app.listen(5000, () => console.log("Server is running on port 5000"));
