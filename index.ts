// Program 1
//Write a ts program to find maximum between two numbers.

var a:string | null = prompt("Enter first number :");
var b:string | null = prompt("Enter second number :");

var num1:number = Number(a);
var num2:number = Number(b);

if (num1 > num2) {
    console.log('First number ' + num1 +  'is greater');
} else {
    console.log('Second number ' + num2 + 'is greater');
}

