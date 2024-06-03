function calculator(num1, num2, operation) {
  if (operation == "+") {
    return addNums(num1, num2);
  } else if (operation == "-") {
    return subNums(num1, num2);
  }
}

function addNums(num1, num2) {
  return num1 + num2;
}
function subNums(num1, num2) {
  return num1 - num2;
}

let variable1 = 10;
let variable2 = 20;
let todo = "-";

const result = calculator(variable1, variable2, todo);
console.log(result);

let something = 15;
something = "helloo";
// -----------------
let student = {
  name: "boldo",
  age: 15,
  isGrad: false,
};
student.nationality = "mongolia";
console.log(student);

let countries = ["mongolia", 15];
