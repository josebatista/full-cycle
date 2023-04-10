const express = require('express')
const app = express()
const port = 3000
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'desafio02_db'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createTable = `CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))`
connection.query(createTable)

const insert = `INSERT INTO people(name) VALUES ('Jose Pereira')`
connection.query(insert)

let namesResult = []

const select = `SELECT * FROM people`
connection.query(select, (err, result, fields) => {
	namesResult = result
})

connection.end()

app.get('/', (req, res) => {
	let namesList = '<ol>'
	
	namesResult.forEach( (item) => {
		namesList += `<li>${item.name}</li>`
	})
	
	namesList += '</ol>'
	
	const result = `<h1>Full Cycle Rocks!</h1></br>${namesList}`

	res.send(result)
})

app.listen(port, () => {
	console.log('Rodando na porta ' + port)
})

