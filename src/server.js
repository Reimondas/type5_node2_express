
const express = require('express');
const { request } = require('http');

const app = express();
// 3000, 8000, 3001, 8080, 5000
const PORT = 3000

// api endpoint
// localhost:3000/ => hello back end world
// app - express app
// get - metodas htttp get, post, put, path, delete
// '/' - endpoint addresas
// request - atejusios uzklausos objektas
// response - atsakymo atgal objektas
// (request, response) => {<ivyks kodas kai ateisim pagal adresa ir metoda>}
app.get('/', (request, response) => {
  response.send('hello back end world')
})

app.get('/post', (request, response) => {
  const post1 = {
    title: 'My first post',
    body: "Story of My first post"
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

