let data = [
  { name: "Bat", age: 15, grade: 11, balance: 130, gender: "male" },
  { name: "Tsetseg", age: 24, grade: 12, balance: 300, gender: "female" },
  { name: "Anu", age: 18, grade: 8, balance: 210, gender: "female" },
  { name: "Bold", age: 21, grade: 9, balance: 420, gender: "male" },
  { name: "Munhu", age: 29, grade: 10, balance: 410, gender: "male" },
  { name: "Ganaa", age: 4, grade: 11, balance: 132, gender: "female" },
];
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age > 18;
  });
  return filtered;
}
let result = findAdultStudents(data);
console.log("bodlogo1 = ", result);

///////////// Bodlogo2
function findgender(students, find) {
  let filtered = students.filter((student) => {
    return student.gender === find;
  });
  return filtered;
}

let result1 = findgender(data, "female");
console.log("bodlogo2 = ", result1);

///////////// Bodlogo3

function sortByage(students) {
  let sorted = students.sort((a, b) => {
    return b.age - a.age;
  });
  return sorted;
}
let result2 = sortByage(data);
console.log("bodlogo3 = ", result2);

///////////// Bodlogo4

function findbalance(students, balance) {
  let filtered = students.filter((student) => {
    return student.balance > balance;
  });
  return filtered;
}

let result3 = findbalance(data, "400");
console.log("bodlogo4 = ", result3);
