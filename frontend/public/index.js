const express = require('express');
const path = require('path');
const getTodos = express();
getTodos.set('view engine', 'ejs');
getTodos.set('views', './views');
getTodos.use(express.static(path.join(__dirname, 'public')));;


  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        resultBox.textContent = `${json.title} (${json.completed ? 'done' : 'doing'})`
    }) 
    .catch(error => console.error(error));
}

// ============================================================== //


getTodos.listen(5500, () => {
    console.log(`http://localhost:5500`);
  });