// Q1
console.log(Number("123") + 7);

// Q2
const value = 0;
if (!value) {
  console.log("invalid");
}

// Q3
for (let i = 0; i <= 10; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// Q4
const arrayOfNumbers = [1, 2, 3, 4, 5];
const data = arrayOfNumbers.filter((item) => item % 2 === 0);
console.log(data);

// Q5
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
console.log([...arrayOne, ...arrayTwo]);

// Q6
const dayNumber = 2;

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day");
}

// Q7
const arrayOfStrings = ["a", "ab", "abc"];
const arrayOfStringsLength = arrayOfStrings.map((item) => {
  return item?.length;
});
console.log(arrayOfStringsLength);

// Q8
const divisibleNumber = 15;
if (divisibleNumber % 3 === 0 && divisibleNumber % 5 === 0) {
  console.log("Divisible by both");
} else {
  console.log("Non Divisible by both");
}

// Q9
const squareNumber = (number) => {
  return number * number;
};
console.log(squareNumber(5));

// Q10
const destructureObject = (param) => {
  const { name, age } = param;
  return `${name} is ${age} years old`;
};
const person = { name: "John", age: 25 };
console.log(destructureObject(person));

// Q11
const sumFunc = (...params) => {
  return params.reduce((totalOfPrevNums, num) => totalOfPrevNums + num, 0);
};
console.log(sumFunc(1, 2, 3, 4, 5));

// Q12
setTimeout(() => {
  console.log("success");
}, 3000);

// Q13
const findLargestNumber = (numbers) => {
  return Math.max(...numbers);
};

console.log(findLargestNumber([1, 3, 7, 2, 4]));

// Q14
const arrayFromObjectKeys = (objectParam) => {
  return Object.keys(objectParam);
};
console.log(arrayFromObjectKeys({ name: "John", age: 30 }));

// Q15
const splitString = "The quick brown fox";
console.log(splitString.split(" "));

