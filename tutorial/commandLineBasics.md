---
layout: page
title: Command line basics
tags: tutorial
---

In this lesson, we'll learn how to get around on the command line. The command line is a program that lets you easily find your way around your computer. You can also run programs with it.

Let's open up a command line. Command lines are also known as terminals. Hit cmd + spacebar and search for `terminal`. Press enter to open up a terminal. You should see something like this

![terminal](/images/terminal.png){: .text-center}

## Where am I?

When using the terminal, it's helpful to know where you are located on your computer! Type `pwd` into the terminal and press enter. `pwd` stands for "Print working directory". It tells you where you are currently located on your computer. Here is what my terminal outputs when I run `pwd`:

```
/Users/samc
```

Computers are made up of files and directories. Directories are like buckets that hold files or directories. Files contain data like audio, video, text documents or programs.

## What is inside the directory I am currently inside of?

You can list all the files and directories where you are currently located using the `ls` command. Type `ls` into the terminal and press enter. The terminal will print a list of files and directories.


## How can I make a new directory?

You can create new directories on your computer with the `mkdir` command. Run `mkdir tim` (run means to type the command in your terminal and press enter) in your terminal. This command will create a new directory named `tim`. Check to see if the new directory was created by running `ls`. You should see `tim` in the list of files and directories.

## How can I move to a different directory?

Now that you've made a new directory. Let's go inside it. `cd` is the command we use to change our location, it stands for "change directory". Run `cd tim`. You are now inside the `tim` directory. Run `pwd` and you should see `/tim` at the end of the output. Run `ls`. The terminal does not output anything because there are no files or directories inside the `tim` directory because we just made it!

To get outside of `tim` back to where you came from run `cd ..` This will move your location up 1 directory.

## Check your work

run `cd ~` this will take you back to your home directory.

Now copy and paste this command into your terminal and run it:
```
[ -d "tim" ] && echo you did it || echo I cannot find the tim directory
```

It will print "you did it!" if your `tim` directory is in the right place.

Try exploring the directories on your computer in the terminal with the commands you learned:

* `pwd` print your current location

* `ls` list the files and directories in your current location

* `cd directoryYouWantToEnter` enter a directory. `cd ..` go up 1 directory. `cd ~` return home

* `mkdir nameOfNewDirectory` creates a new directory.