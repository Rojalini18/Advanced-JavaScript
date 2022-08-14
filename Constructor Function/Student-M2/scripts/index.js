//Here form is been selected and submit is my onclick who's function is Data

document.querySelector("form").addEventListener("submit", Data);
var array = JSON.parse(localStorage.getItem("student_data")) || [];
table();
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
  table();
}

function table() {
  document.querySelector("tbody").textContent = "";
  var count = 1;

  array.map(function (elem) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = count++;

    var td2 = document.createElement("td");
    td2.textContent = elem.name;

    var td3 = document.createElement("td");
    td3.textContent = elem.number;

    var td4 = document.createElement("td");
    td4.textContent = elem.city;

    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);
  });
}
