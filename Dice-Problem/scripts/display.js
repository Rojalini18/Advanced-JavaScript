var num = JSON.parse(localStorage.getItem("number"));
var value = document.getElementById("show_number");

console.log(num);

num.map(function (ele) {
  var number = document.createElement("div");

  if (ele === 1) {
    var num1 = document.createElement("h1");
    num1.textContent = ele;
    num1.setAttribute("id", "num1");

    number.append(num1);
    console.log("num1:", num1);
  } else if (ele === 6) {
    var num2 = document.createElement("h1");
    num2.textContent = ele;
    num2.setAttribute("id", "num2");

    number.append(num2);
  } else {
    var num3 = document.createElement("h1");
    num3.textContent = ele;
    num3.setAttribute("id", "num3");

    number.append(num3);
  }
  value.append(number);
});
