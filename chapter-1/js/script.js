const pizza = true;
console.log(pizza);



//var
var topic = "Javascript";

if(topic) {
  var topic = "React";
  console.log('block', topic);
}

console.log('global', topic);


//let
var topic = "Javascript";

if(topic) {
  let topic = "React";
  console.log('block', topic);
}

console.log('global', topic);


//for loops with var
var div, container = document.getElementById('container');

for (var i = 0; i < 5; i++) {
  div = document.createElement('div');
  div.onclick = function() {
    alert('This is box # ' + i);
  }
  container.appendChild(div);
}

//for loops with let
var div, container = document.getElementById('container-two');

for (let i = 0; i < 5; i++) {
  div = document.createElement('div');
  div.onclick = function() {
    alert('This is box # ' + i);
  }
  container.appendChild(div);
}


//template strings
let name = "Luis";
let lastname = "Conde";7
let div_template = document.getElementById('template');
div_template.innerHTML += `<p>Hola, <h1>${name}</h1>${lastname}</p>`;


//Default Parameters
function logActivity(name="Luis Conde", activity="coding") {
  console.log(`${name} loves ${activity}`);
}
//Arrow functions
