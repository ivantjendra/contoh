const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    User.create()
})

app.post('/register', (req, res) => {
    const { email, password } = req.body
    User.create()
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        Post.destroy(id)
    } catch(err) {
        res.send(err)
    }
})

app.put('/posts/:id', async (req, res) => {
    const { id } = req.params
    try {
        console.log(id, '<--')
        Post.update(id)
    } catch (err) {
        res.send(err)
    }
})

app.listen(3000)