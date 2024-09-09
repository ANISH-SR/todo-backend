//Assignment #2 - Trying to code a filesystem based todo app and store data into the file

const { rejects } = require("assert");
const express = require("express");
const fs = require("fs");
const app = express();



app.post("/addtodo", (req, res) => {
	return new Promise((resolve, reject) => {
		fs.readFile("a.txt", "utf-8", (err, data) => {
			if (!err) {
				resolve(data);
			}
			else {
				reject(err);
			}
		})

	}).then()

})

app.delete("/deletetodo", (req, res) => {

})

app.get("/gettodo", (req, res) => {

})
