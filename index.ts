// Program 1
//Write a ts program to find maximum between two numbers.

// var a:string | null = prompt("Enter first number :");
// var b:string | null = prompt("Enter second number :");

// var num1:number = Number(a);
// var num2:number = Number(b);

// if (num1 > num2) {
//     console.log('First number ' + num1 +  'is greater');
// } else {
//     console.log('Second number ' + num2 + 'is greater');
// }




// program 2 
//Write a ts program to find maximum between three numbers.

// var a:string | null = prompt("Enter the first number:");
// var b:string | null = prompt("Enter the second number:");
// var c:string | null = prompt("Enter the third number:")

// var num1:number = Number(a);
// var num2:number = Number(b);
// var num3:number = Number(c);

// if (num1 > num2 && num1> num3) {
//     console.log(num1 + " is greater from other numbers");
// }else if (num2 >num1 && num2 >num3) {
//     console.log(num2 + " is greater then other numbers");
// }else {
//     console.log(num3 + " is greater from other number")
// }



// Program 3
//Write a ts program to check whether a number is negative, positive or zero.

// var a:string|null = prompt("Please enter the number");

// var num:number = Number(a);

// if(num > 0){
//     console.log(num + " is a positive number");
// }else if (num == 0) {
//     console.log(num + " is a zero");
// }else {
//     console.log(num + " is a negative number")
// }


//program 4
//Write a ts program to check whether a number is divisible by 5 and 11 or not.

// var a:string|null = prompt("Enter the number");

// var num:number = Number(a);

// if(num % 5 == 0){
//     console.log("Number is divisible by 5");
// }else {
//     console.log("Number is not divisible by 5");
// }

// if (num % 11 == 0){
//     console.log("Number is divisible by 11");
// }else {
//     console.log("Number is not divisible by 11");
// }


// Program 5
//Write a ts program to check whether a number is even or odd.

// var a:string|null = prompt("Enter the number");

// var num:number = Number(a);

// if(num % 2 == 0){
//     console.log("Number is even")
// }else{
//     console.log("Number is odd")
// }


//program 6
//Write a ts program to check whether a year is leap year or not.

// var a:string|null = prompt("Enter a year")

// var year:number = Number(a);

// if(year % 4==0){
//     console.log(year + " is a leap year");
// }else {
//     console.log(year + " is not a leap year");
// }


//program 7
//Write a ts program to check whether a character is alphabet or not.

var a:string|null = prompt("Enter a character");

if (a?.toUpperCase() != a?.toLowerCase()){
    console.log("Character is an Alphabet");
}else {
    console.log("Character is not an Alphabet");
}
