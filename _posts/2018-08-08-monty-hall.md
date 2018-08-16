---
layout:     post
title:      Monty Hall Problem
date:       2018-08-16
summary:    Programming my way to understanding the Monty Hall problem
categories: [probability, programming]
---

You've probably heard of the [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem). From wikipedia:
> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

Coming from a software background and having read this awesome presentation [Statistics For Hackers](https://speakerdeck.com/jakevdp/statistics-for-hackers) by Mike McCready, I decided to write a small program to simulate the probabilities of keeping the same choice vs switching choices.

{% gist 6f8dd8c7615291b5cb189f14c8bc3d3c %}

Writing out the simulation code forced me to consider in which cases you win and which cases you lose for each strategy.

It's easy to see that if you never switch you will only win 1/3 of the time.

It was only when I wrote out the code that I came to realize **when switching doors, you will only lose when your initial guess was correct**. That means you will win `1 - 1/3 = 2/3` of the time.

Sometimes thinking like a programmer makes things easier for me to understand!