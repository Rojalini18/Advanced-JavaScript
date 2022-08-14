function makingObjects(dta1, dta2, dta3, dta4, dta5) {
  this.data1 = dta1;
  this.data2 = dta2;
  this.data3 = dta3;
  this.data4 = dta4;
  this.data5 = dta5;
}

let objScope = new makingObjects(
  "Scope in JavaScript refers to the current context of code",
  "Global variables are those declared outside of a block",
  "Local variables are those declared inside of a block",
  " the local variable is function-scoped",
  " local scope is created from any kind of block",
  "To illustrate the difference between function- and block-scoped variables, we will assign a new variable in an if block using let"
);
localStorage.setItem("scope", JSON.stringify(objScope));

let objHoisting = new makingObjects(
  " Hoisting is the default behavior of moving all the declarations ",
  "It allows us to call functions before even writing them in our code",
  "JavaScript allocates memory for all variables and functions",
  "Declaration –> Initialisation/Assignment –> Usage",
  "JavaScript allows us to both declare and initialize our variables"
);
localStorage.setItem("hoisting", JSON.stringify(objHoisting));

let objConstructor = new makingObjects(
  "In JavaScript, a constructor function is used to create objects",
  "To create an object from a constructor function, we use the new keyword",
  "Hence, when an object accesses the properties, it can directly access the property",
  "You can also create a constructor function with parameters.",
  "each object to have different properties"
);
localStorage.setItem("constructor", JSON.stringify(objConstructor));

let objPrototype = new makingObjects(
  "Every function includes prototype object by default.",
  "The prototype object is special type of enumerable object ",
  " object's prototype property is invisible",
  "constructor returns a function that created instance.",
  "It returns prototype object of a function to which it links to."
);
localStorage.setItem("prototype", JSON.stringify(objPrototype));

function display(elem) {
  document.getElementById("info").innerText = "";

  let line1 = document.createElement("li");
  line1.innerText = elem.data1;
  let line2 = document.createElement("li");
  line2.innerText = elem.data2;
  let line3 = document.createElement("li");
  line3.innerText = elem.data3;
  let line4 = document.createElement("li");
  line4.innerText = elem.data4;
  let line5 = document.createElement("li");
  line5.innerText = elem.data5;

  document.getElementById("info").append(line1, line2, line3, line4, line5);
}

document.getElementById("scope").addEventListener("click", function () {
  display(JSON.parse(localStorage.getItem("scope")));
});

document.getElementById("hoisting").addEventListener("click", function () {
  display(JSON.parse(localStorage.getItem("hoisting")));
});

document.getElementById("constructor").addEventListener("click", function () {
  display(JSON.parse(localStorage.getItem("constructor")));
});

document.getElementById("prototype").addEventListener("click", function () {
  display(JSON.parse(localStorage.getItem("prototype")));
});
