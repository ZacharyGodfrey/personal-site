---
slug: "fizzbuzz"
title: "Solving FizzBuzz"
timestamp: "2018-10-01"
published: true
featured: true
preview: "Once a drinking game, now a programming interview exercise. Let's take a look at a functional solution to this classic problem."
---

**The Drinking Game**

The rules of the game are very simple: as a group, take turns counting from one to one hundred. On your turn, say "Fizz" if the number is divisible by three, say "Buzz" if the number is divisible by five, and say "FizzBuzz" if the number is divisible by both three and five. Otherwise, say the number. If you say the wrong thing on your turn, take a drink.

**The Programming Exercise**

The task is to encode the rules of the game so that you can run a program that will print out the proper sequence of words and numbers. I'll provide my solution to this problem in JavaScript and I'll be solving the problem in a functional style. This should make the solution easy to follow and understand and it should also allow us to easily change it later if the rules of the game need to change.

The FizzBuzz problem can be broken down into three basic parts:

- **The Loop:** Count from one to one hundred
- **The Decision:** Choose the number or the appropriate word according to the rules
- **The Output:** Print the correct sequence of words and numbers to the screen

**Step 1: The Loop**

Looping can be done in many ways, but in order to solve the problem in a functional way I'm going to create a function that takes a `start` number and an `end` number and returns the set of numbers between and including them. This will provide all the counting values we'll need.

<script src="https://gist.github.com/ZacharyGodfrey/6d1d3b95d59eeb3fbccf2835c87eb838.js?file=01-range.js"></script>

**Step 2: The Decision**

This is the heart of the problem. Given some `number` as input, we need to decide whether to output the number or a word - and which word is the appropriate one. Order matters here: notice that we check the "FizzBuzz" case before checking for just "Fizz" or just "Buzz". If we did not do this, then numbers like 15 and 30 which are divisible by both three and five would be caught by whichever case you put first and would not return the appropriate value of "FizzBuzz".

<script src="https://gist.github.com/ZacharyGodfrey/6d1d3b95d59eeb3fbccf2835c87eb838.js?file=02-toFizzBuzz.js"></script>

**Step 3: The Output**

In order to print a value to the screen in JavaScript, we simply log it to the console. I wrapped this in a custom function, however, because if we ever change how we want to output the values then we can simply change the implementation of this function without having to change the calling code.

<script src="https://gist.github.com/ZacharyGodfrey/6d1d3b95d59eeb3fbccf2835c87eb838.js?file=03-display.js"></script>

**Final Solution**

Once we've defined our functions, all that's left is to compose them together to accomplish the end result.

<script src="https://gist.github.com/ZacharyGodfrey/6d1d3b95d59eeb3fbccf2835c87eb838.js?file=04-result.js"></script>

**Conclusion**

As you can probably guess, this isn't the shortest possible solution to the problem. We could have easily written a single function with a `for` loop, some `if` statements, and a `console.log` statement.

That would have accomplished the same effect with fewer functions and less code overall. However, it's that kind of tight coupling that leads to code that's difficult to maintain over time.

In systems where requirements are not set in stone, it's better to have your code broken down into small functions that each do a single thing. This way, when the requirements change it's easy to spot the exact place in code where your change needs to be made.

Here are a few ways the rules of the game could change:

- Start at a different value
- End at a different value
- Use different words
- Use words for multiples of different numbers
- Append each of the output values to a DOM element instead of logging them to the console