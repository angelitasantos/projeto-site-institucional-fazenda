import express from 'express'

import posts from './data/posts.json'

const app = express()
const port = 3000

app.set('views', './src/templates')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Home'
    })
})

app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))

app.get('/posts', (req, res) => res.render('posts', {
    posts
}))

app.listen(port, () => console.log(`App rodando na porta ${port}...`))