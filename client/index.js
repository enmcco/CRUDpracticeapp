document.addEventListener("DOMContentLoaded", () => {
// grab root div
const root = document.getElementById('root');

// fetch data from database
// http://localhost:3000/
fetch('http://localhost:3000/api/get')
  .then(data => data.json())
  .then(array => {
    // use map on the array arguments
    console.log('this is array', array)
    array.forEach(obj => {
      // grab id and name, build a div using that info
      const { id, name } = obj;
      const task = document.createElement("div");
      task.innerHTML = `<p id='${id}'> ${id}: ${name} </p>`;
      root.appendChild(task);
    })
  })
  .catch(err => console.log('Problem with fetch in index.js: ' + err));

//create element
const todo1 = document.createElement("div")
todo1.innerHTML = "<p id='child1'> Child1 </p>"
root.appendChild(todo1);
})
//get element