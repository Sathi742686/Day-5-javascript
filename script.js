// javascript ternary operator
// if else example
// let age = 6;
// if (age >= 18) {
//   console.log(" you are full age.");
// } else {
//   console.log(" you are not full age.");
// }

// ternary operator (?)
//example one
//  age >= 18
//   ? console.log(" your are full age. ")
//   : console.log(" your are not full age. ");

// example two
// let food;
// if (age > 12) {
//   food = " Chicken ";
// } else {
//   food = " Ice cream ";
// }
// console.log(`He like to eat ${food}`);

// //Example three
// console.log(`He like to eat ${age > 12 ? "Chicken" : "Ice cream"}`);

// Example four
// let fruit;
// if (age > 5) {
//   fruit = " Apple";
// } else {
//   fruit = " Orange ";
// }
// console.log(`He like to eat ${fruit}`);

// // Example five
// console.log(`He like to eat ${age > 5 ? " Apple" : " Orange"}`);

// 2. JavaScript Function
// Eaxmple 1
// function showText() {
//   console.log("Some Text");
// }
// showText();
// showText();

// // Example 2
// function showName(name) {
//   console.log(name);
// }
// showName("Sathi");
// showName("Narju");
// showName("Iyad");

// Example 3
// function calculatName(n1, n2) {
//   console.log(n1 * n2);
// }
// calculatName(5, 3);
// calculatName(1000, 500);

// Example 4
// function averageMark(s1, s2, s3, s4, s5) {
//   console.log((s1 + s2 + s3 + s4 + s5) / 5);
// }
// averageMark(88, 83, 92, 90, 75);

function averageMark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5;
  return average;
}

// A mark
const aAverageMark = averageMark(89, 98, 78, 92, 90);
console.log(aAverageMark);

// B mark
const bAverageMark = averageMark(88, 91, 70, 93, 90);
console.log(bAverageMark);

// C mark
const cAverageMark = averageMark(80, 90, 77, 91, 83);
console.log(cAverageMark);

console.log(aAverageMark, bAverageMark, cAverageMark);
