const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    User.create()
})

app.post('/register', (req, res) => {
    const { email, password } = req.body
    User.create()
})

app.listen(3000)