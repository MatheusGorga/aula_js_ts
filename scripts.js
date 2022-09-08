const url = 'http://localhost:3002/api/';

fetch(`${url}cursos`)
  .then(response => response.json())
  .then(data => console.log(data))