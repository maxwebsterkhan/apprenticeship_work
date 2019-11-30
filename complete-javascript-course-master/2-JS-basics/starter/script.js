/*****************************************************
 *Variables and Data Types
 */
/*
var firstName = 'john';
console.log(firstName)

var lastName = 'Smith';

var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job)

// Variable naming rules

var _3years = 3;
var johnMark = 'John and Mark'
var if = 23;
*/

/*********************************************************
 * Variable Type & Coercion.
 */

var firstName = "John";
age = 28;

// Type coercion.

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";

isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". is he Married? " + isMarried);

// Variable Mutation.

age = "Twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". is he Married? " + isMarried);

var lastName = prompt("what is his last name?");
console.log(firstName + " " + lastName);
