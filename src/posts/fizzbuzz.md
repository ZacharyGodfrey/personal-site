---
slug: "fizzbuzz"
title: "Solving FizzBuzz"
timestamp: "2018-10-02"
published: true
featured: true
preview: "Once a drinking game, now a programming interview exercise. Let's take a look at a functional solution to this classic problem."
---

**The Drinking Game**

The rules of the game are very simple: as a group, take turns counting from one to one hundred. If it's your turn and the number is a multiple of three, say "Fizz" instead of the number. If the number is a multiple of five, say "Buzz." If the number is both a multiple of three and five, say "FizzBuzz." If you say the wrong thing on your turn, take a drink.

**The Programming Exercise**

The task is to encode the rules of the game so that you can run a program that will print out the proper sequence of words and numbers. I'll provide my solution to this problem in JavaScript and I'll be solving the problem in a *functional* style. This should make the solution easy to follow and understand and it should also allow us to easily change it later if the rules of the game need to change.

The FizzBuzz problem can be broken down into three basic parts:

- The Loop: Count from one to one hundred
- The Decision: Choose the number or the appropriate word according to the rules
- The Output: Print the correct sequence of words and numbers to the screen

**Step 1: The Loop**

Looping can be done in many ways, but in order to solve the problem in a functional way I'm going to create a function that takes a `start` number and an `end` number and returns the set of numbers between and including them.

```javascript
function range(start, end){
  if (start > end) {
    // Handle the descending case
    return range(end, start).reverse();
  } else {
    // Handle the ascending case
    return Array.from({ length: end - start + 1 }, function(value, index){
      return start + index;
    });
  }
}
```

**Step 2: The Decision**

```javascript
function fizzbuzz(value){
  var isFizz = value % 3 == 0;
  var isBuzz = value % 5 == 0;

  if (isFizz && isBuzz) {
    return "FizzBuzz";
  } else if (isFizz) {
    return "Fizz";
  } else if (isBuzz) {
    return "Buzz";
  } else {
    return value.toString();
  }
}
```

**Step 3: The Output**

```javascript
function output(value){
  console.log(value);
}
```

**Final Solution**

```javascript
range(1, 100).map(fizzbuzz).forEach(output);
```

**Conclusion**
