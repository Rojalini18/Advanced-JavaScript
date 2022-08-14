function Throw_dice() {
  var num = Math.floor(Math.random() * 6) + 1;
  if (num === "6") {
  }
  number.push(num);
  localStorage.setItem("number", JSON.stringify(number));
  window.location.href = "display.html";
  console.log(number);
}
