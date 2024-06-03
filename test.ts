// number
let a = 15;
// string
let firstName = "boldo";
// object
interface StudentType {
  name: string;
  age: number;
  isGrad: boolean;
  nationality: string;
  gender: "male" | "female" | "unknown";
}
let student: StudentType = {
  name: "boldo",
  age: 15,
  isGrad: false,
  nationality: "mongolia",
  gender: "male",
};
student.nationality = "mongolia";

// boolean
// null | undefined | unknown
// array (string | number | object)
let countries = ["mongolia", "china", "korea"];
countries.push("America");
console.log(countries);

function calculator(num1: number, num2: number, operation: string) {
  if (operation == "+") {
    return addNums(num1, num2);
  } else if (operation == "-") {
    return subNums(num1, num2);
  }
}

function addNums(num1: number, num2: number) {
  return num1 + num2;
}
function subNums(num1: number, num2: number): number {
  return num1 - num2;
}
