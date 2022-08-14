document.querySelector("form").addEventListener("submit", Data);
var array = [];

function data_student(s, n, c) {
  this.name = s;
  this.number = n;
  this.city = c;
}

function Data(event) {
  event.preventDefault();

  var s = document.querySelector("#name").value;
  var n = document.querySelector("#numb").value;
  var c = document.querySelector("#city").value;

  var student = new data_student(s, n, c);
  array.push(student);
  localStorage.setItem("student_data", JSON.stringify(array));
}
