---
layout: page
title: Variables and Data Types
tags: tutorial
---

This lesson includes some basic information about dealing with errors when running python programs as well as an introduction to variables and different data types.

## Programming Syntax

There are rules governing the placement of characters and symbols while programming. This is known as [syntax](https://en.wikipedia.org/wiki/Syntax). Programs with incorrect syntax will not run. Each programming language has its own syntax that you will learn as you write programs.

## Fixing Errors In Your Program

Because the way we write programs has to be so precise, often times we will have mistakes in the code we have written. If our code has syntax errors, our program will fail to run and python will tell us the line in our program that is causing the error. We can then fix the mistake and run our program again, repeating the process until we no longer have any syntax errors.

Sometimes the program we use to help us write code will tell us we have errors before we even run our code. If you are using VsCode you can install the [python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) which will indicate some errors for you by underlining them in red.

We will practice fixing some code errors in this lesson but first...

## Data Types and Variables

Programming is really just moving pieces of data around to do interesting things. There are different kinds of data. Today we are going to learn about 2 different kinds of number data and 1 type of data that is made up of characters.

When writing programs we often want to store data and reference it at later points in the program. Variables are used to store data in our programs. You can think of them as buckets that we put things into. Let's look at some examples of using variables and different data types.

### Strings

Strings are a sequence of characters. In python we denote strings with either single quotation marks `'` or double quotation marks `"`. Everything between the quote marks is a part of the string. Here are some examples:

```
"here is a string"
'this is also a string'
'23of9 93fj sfj;sgjwefjs9d0fj bunch of random characters is also a string'
```

In the [last lesson](../firstProgram) the program we wrote had a string in it: `'My first program!'`

How do we store a string in a variable? First we come up with a variable name. We give variables names so we can reference them later in our program. Variable names can be any combination of characters without spaces. To store something in a variable we use the equal sign `=`.

Here is an example of storing the string `'Tim'` inside a variable called `timBucket`:

```
tim_bucket = 'Tim'
```

The variable `timBucket` now holds the string `'Tim'`. We'll learn about how long variables live in a later lesson. For now just know that any variables you create only stick around while your program is running. When your program finishes, they are gone.

### Integers

[Integers](https://www.mathsisfun.com/definitions/integer.html) are whole numbers. They can either be positive or negative. Some examples of integers are: `4 -4 100 0 6` etc. `1.5` is not an integer because it has a decimal component.

In python we write integers just as numbers:

```
1
7
9
```

We can store an integer into a variable with an equals sign just like with strings:

```
my_number = 1
```

The above code stores the integer 1 into a variable named `myNumber`.

### Floats

Floats are numbers that can have decimals. Some examples of floats are `1 1.4 0.5` etc. Note that they don't need to have a decimal component but they can.

Here is an example of storing 1/2 into a variable called `oneHalf`:

```
one_half = 0.5
```

### Note About print

In your first program you used `print` to output something in your program to the terminal. `print` is a function. We'll learn more about functions in a later lesson. For now just know that you can use `print` to see whats going on in your program by outputing values to the terminal.

The `print` function is used with parentheses: `print()` whatever is between the parentheses will be output to the terminal. You can use `print` to output the contents of a variable to the terminal.

Try putting the following code in a python program and running it:

```
my_variable = 'the stored string'
print(my_variable)
```

You should see `the stored string` printed out to your terminal.

Note that the above program has 2 different lines. In python each line is called a statement. Storing data in a variable is one statement. Each statement needs at least 1 line between them. Calling the `print()` function is the second statement. When you run the program, statements are run in the order they are written in your program.

### Syntax Errors

Let's practice fixing an error in a program. Copy the following into a python program:

```
broken_string = 'incomplete string
print(broken_string)
```

Run the program. You should see an error message like this:

```
  File "data.py", line 1
    var = 'incomplete string
                           ^
SyntaxError: EOL while scanning string literal
```

The helpful error message tells us the line of our program that contains the error.

Can you fix the error in the program?

Strings need to have an opening `'` and a closing `'`. Try adding the closing `'` to the line with `var` and running the program again.

## Write Another Program

Let's write a program in a file named `data_types.py` involving the things we learned in this lesson. Write a program that does the following:

* Make a variable named `my_int` and store `10` in it
* Make a variable named `my_float` and store `0.52` in it
* Make a variable named `my_string` and store `apple` in it
* Print out the content of each variable.

The output of your program should be something like this:

```
10
0.52
apple
```

Good job for making it through the lesson. Next time we will learn more about functions which are extremely powerful and awesome!