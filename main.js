 let preFizz=(n)=> [...Array(n)].map((x,i)=>x=i+1)

/*
8kyu- Pre-FizzBuzz Workout #1


This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.


https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

BEST SOLUTİONS

let preFizz = n => [...Array(n)].map((x, i) => i+1);

