---
layout: page
title: Writing A Program
tags: tutorial
---

## Programming Languages

There are [many](https://en.wikipedia.org/wiki/List_of_programming_languages) different programming languages. They all have different strengths and weaknesses. Some were designed to accomplish very specific tasks while others are more general and able to do a lot of different things.

We will be working with [Python](https://www.python.org/). Python is my favorite language. It's easy to learn, but you can still do a ton of cool stuff with it!

## Choosing a Code Editor

To make a python program, we need to write text in a file. We need a text editor. There are lots of applications that let you edit text. For programming there are special apps that help you write code.

My current favorite code editor is [Visual Studio Code](https://code.visualstudio.com/).

Either download VSCode or choose another code editor.

## Creating the Code File

Create a new file in your `tim` directory named `first.py`. There are several ways you can do this. You can use the code editor to create a new file. Or you can navigate to the `tim` directory on your terminal and run:

```
touch first.py
```

`touch` creates an empty file with the name you give it.

As you know, files have names. At the end of most files on your computer is a `.` and then some letters. The `.` and stuff to the right of it is called a file extension. File extensions are used to tell your computer (and other humans) what kind of file it is dealing with. `.py` is the python file extension. There are many different file types.

Inside of `first.py` type the following:

```
print('My first program!')
```

save the file.

## Running the Program

Now open up your terminal and navigate to your `tim` directory. Feel free to look back at the [last lesson](../commandLineBasics) if you forgot how to move around on your terminal.

Once inside your `tim` directory run your python program with the following:

```
python first.py
```

Your terminal should output:

My first program

If your program fails to run because python is not installed, download and install python [here](https://www.python.org/downloads/).

Congrats on writing and running your first program! Next time we will learn about data types and variables.