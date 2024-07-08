const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 60 },
  { name: "Dave", grade: 85 },
];
// problem 1:
const newStudents = [
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 },
];

// Using concat to combine students and newStudents arrays
const combinedStudents = students.concat(newStudents);

console.log(combinedStudents);
// problem 2:
// Using entries method to create an iterator over the students array
const iterator = combinedStudents.entries();

// Logging each index and value to the console
for (const [index, student] of iterator) {
  console.log(`Index: ${index}, Value:`, student);
}

//problem 3:
// Using every method to check if all students have a passing grade
const allPassing = students.every((student) => student.grade >= 70);

console.log("All students have passing grades:", allPassing);
//problem 4:
// Using fill method to replace all grades with 100
combinedStudents.fill({ name: "", grade: 100 }, 0, combinedStudents.length);

console.log(combinedStudents);
//problem 5:

// Using filter method to create a new array with students who have a grade above 90
const highGrades = students.filter((student) => student.grade > 90);

console.log(highGrades);

//problem 6:
// Find the first student with name "Charlie" and log their grade
const charlie = students.find((student) => student.name === "Charlie");

if (charlie) {
  console.log(`Charlie's grade: ${charlie.grade}`);
} else {
  console.log("Student not found.");
}
//problem 7
// Find the index of the first student with grade 85
const index = students.findIndex((student) => student.grade === 85);

if (index !== -1) {
  console.log(`Index of student with grade 85 ${index}`);
} else {
  console.log("No student found with grade 85.");
}
// problem 8
//Use the "flat" method to flatten an array of arrays
const nestedArray = [[1, 2], [3, 4, 5], [6]];
const flattenedArray = nestedArray.flat();

console.log(flattenedArray);
//problem 9
//the "flatMap" method to map over the "students" array and create a new array of objects with a "passing"
const result = students.flatMap((student) => ({
  name: student.name,
  grade: student.grade,
  passing: student.grade >= 70,
}));

console.log(result);
// problem 10

// Log the name of each student
students.forEach((student) => {
  console.log(student.name);
});
//problem 11
// Create a new array from the string
const string = "hello world";

const arrayFromString = Array.from(string);

console.log(arrayFromString);
// problem 12
// Create an array of student names
const studentNames = students.map((student) => student.name);

// Check if the array includes a student with the name "Eve"
const includesEve = studentNames.includes("Eve");

console.log(includesEve);
// problem 13

// Find the index of the first student with the name "Bob"
const indexOfBob = studentNames.indexOf("Bob");

console.log(indexOfBob);
// problem 14
// Create an array of student grades
const studentGrades = students.map((student) => student.grade);

console.log(studentGrades);
//problem 15

// Add the new student to the end of the students array
const newStudent = { name: "Grace", grade: 87 };
students.push(newStudent);

console.log(students);
//problem 16
//"pop" method to remove the last student from the "students" array.

const removedStudent = students.pop();

console.log(removedStudent);
console.log(students);

//problem 17
// Reverse the order of the students array
students.reverse();

console.log(students);
//problem 18
//the "shift" method to remove the first student
const removeName = students.shift();

console.log(removeName);
console.log(students);
// problem 19
//the "reduce" method to calculate the average grade
const averageGrade =
  students.reduce((total, student) => total + student.grade, 0) /
  students.length;

console.log(`Average grade: ${averageGrade}`);
