# arocalculator

A light weight npm package that provides basic calculator functions.

## Installation

You can install this package using npm:

```bash
npm install arocalculator
```

## Usage

In your Node.js application, you can import the functions provided by arocalculator as follows:

```javascript
import { add, subtract, multiply, divide, power, factorial, modulus } from 'arocalculator';
```

## Available Functions

`add(num1, num2)`
Adds two numbers and returns the result.

`subtract(num1, num2)`
Subtracts the second number from the first and returns the result.

`multiply(num1, num2)`
Multiplies two numbers and returns the result.

`divide(num1, num2)`
Divides the first number by the second and returns the result.

`power(num1, num2)`
Calculates the power of the first number to the second and returns the result.

`factorial(num)`
Calculates the factorial of a number and returns the result.

`modulus(num1, num2)`
Calculates the remainder when the first number is divided by the second and returns the result.

## Example

Here's an example of how to use the arocalculator functions:

```javascript
import { factorial, modulus } from 'arocalculator';

console.log(factorial(5));  // 120
console.log(modulus(4, 3));  // 1
```