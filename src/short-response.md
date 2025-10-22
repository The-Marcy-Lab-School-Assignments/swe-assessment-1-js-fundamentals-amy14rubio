# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

There is a scope error in the block of code. The variable `currentStatus` is declared within the `if statement` and **only exists** within the scope of the `if statement`. The program cannot `console.log(currentStatus);` because the variable does not exist outside of the `if statement`. To fix this error, the `currentStatus` variable should be declared before the `if statement` and would no longer have to be declared twice within the `if statement`. Here is an example:

```
const react = (isReuben) => {
  let currentStatus;
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
}

react(true);
```

This solution allows for `currentStatus` to exist outside of the scope of the if statement and fixes the error.

### Question 2

The block of code will log `Michael Jordan`. This is because objects pass by reference. Meaning that because `theGOAT` is a copy of the object `bestPlayer`, then if `bestPlayer` is reassigned, `theGOAT` will also be reassigned.

### Question 3

The block of code will log the following:

```
Paul is the hardest working person in the room.
Laisha is also the hardest working person in the room.
```

This is because both `const theHustler` variables only exist within their own scope. Meaning that within the `shoutOut` function, the program will have a new `const theHustler` declared and will not conflict with the `const theHustler` variable outside of the scope of the function. `shoutOut()` would be printed first with `const theHustler = 'Paul';` and then the `console.log` statement with `const theHustler = 'Laisha';` due to control flow.

### Question 4

Rest parameters are used in functions when we want to take in multiple arguments and take them in as an array instead of individual variables. An example of this would be the following:

```
sum(1, 2, 10);
```

Say we wanted to create a function named `sum()` that adds up each argument and returns the sum of all of them. We **would not** write the function like this:

```
const sum = (num1, num2, num3) => num1 + num2 + num3;
```

Writing the function in this manner would only allow for 3 arguments to be passed into `sum()` and would also make us have to deal with manually adding up each individual variable. It might not look too bad with adding 3 numbers, but if we want to add **over 100 numbers**, writing the function in this manner would be a headache.

Instead we could write the function using a rest parameter like so:

```
const sum = (...sum) => {
    let addedSum = 0;
    for(num of sum) addedSum += num;
    return addedSum;
};
```

Using the rest parameter, we can take in an infinite number of arguments and treat them as an array.

### Question 5

Scope is the amount of access a specific variable has to certain areas of code, being determined by the variable's physical location.

For a moment, think that you are a part of a spy organization. In this spy organization there are people of higher ranks than you and they have access to some classified information that you don't have access to. You also have access to information, but maybe not the classified information that the other spies might have, depending on your rank. This imaginary spy organization is similar to how the scope of a variable works.

Scope is important because it determines how much a variable can have access to. Here is an example:

```
const spyName = 'Rebeca';

const accessClassified = (fileName) => {
    let grantAccess;
    spyName !== 'Rebeca' ? grantAccess = true : grantAccess = false;
    return grantAccess 
      ? `${spyName} is in our system. You have been granted access to ${fileName}.` 
      : `${spyName} is not in our system. You will not be granted access to ${fileName}.`;
}

console.log(`Greetings ${spyName}.`); //Greetings Rebeca.
console.log(accessClassified("secret classified file")); //Rebeca is not in our system. You will not be granted access to secret classified file.
```

In this example we see that because `spyName` was declared outside of the function, `spyName` can be accessed both inside the function `accessClassified()` and outside the function `accessClassified()`. `spyName` is a variable that has a **global scope**, unlike a variable such as `grantAccess` which has a **function scope**. If we were to try to `console.log(grantAccess)` outside of the function `accessClassified()`, we would get an error because the variable `grantAccess` does not exist outside of the function, hence it's a **function scope**.

The same would be true for variables only existing inside an `if statement` or a `for loop`, they wouldn't have access to the function if they were declared inside blocks of code, hence these variables would be said to have a **block scope**.

### Question 6

Modules help organize blocks of code according to their **separation of concerns**. Modules can also be **imported and exported** according to how they need to be accessed in different modules. A benefit of using modules is that not only does it help organize your code, but it also allows for better **readability** when working on a team. It is because modules allow for separation of concerns, whenever someone would like to collaborate, they can easily see and identify what each individual module's use is for.

To export a module the following code would be used:

```
module.exports = petAgeToHumanAge; //to export only 1 value
module.exports = = {    //we use objects to export multiple values
    petType,
    petColor
};

```

To import:

```
const variable1 = petAgeToHumanAge('./calculations.js'); //to import 1 value
const { petType, petColor } = require('./description.js'); //we use destructing to import multiple values
```

In these examples we exported and imported `petAgeToHumanAge` from `calculations.js`. In this example, there might have been multiple functions that performed calculations on interesting pet facts but we only wanted to export `petAgeToHumanAge`, because it might be the only information needed on the new module file.

### Question 7

The values held by fruits would be: `['apple', 'banana', 'cherry', 'date']`. And the values held by fruitMinusOne would be: `['apple', 'banana', 'cherry']`. It is necessary to make a copy of this array because if this is not done, the **original array** would be mutated due to the fact that arrays **pass by reference**. We want to avoid mutating the array because if we ever need to access the original array in the future **we would not be able to do so**.

### Question 8

A data type to represent a single item in a shopping cart would be an object. This is because the item can have multiple keys that need to be accessed, such as: item, quantity, color, description, and size. A data type to represent the entire shopping cart would be an array. This is because we need to access things like total items which could be easily accessed with the `.length` property. To add new items we can use the `push()` method, which would also allow us to store the items in the order in which the user has been adding them. Here is an example of how a `shoppingCart` would be structured:

```
 let shoppingCart = [
    {
        item: 't-shirt',
        quantity: 2,
        color: blue
    },
    {
        item: 't-shirt',
        quantity: 1,
        color: red
    },
    {
        item: 'lamp',
        quantity: 1,
        color: white
    }
 ]
```
