# Chapter 6 Notes

_The Principle of Least Privilege_ "requires that in a particular abstraction layer of a computing environment, every module (such as a process, a user, or a program, depending on the subject) must be able to access only the information and resources that are necessary for its legitimate purpose." - [PoLP - Wikipedia](https://en.wikipedia.org/wiki/Principle_of_least_privilege)

The _Principle of Least Exposure_ in-part deals with variable exposure across scopes. The following three reasons are cons to unlimited variable exposure:

1. Naming Collisions
2. Unexpected Behavior
3. Unintended Dependency

Limit the exposure of variables within local scopes to avoid these three issues within a program.

> 'Stylistically, `var` has always, from the earliest days of JS, signaled "variable that belongs to a whole function."'

Although function declarations are function hoisted, declaring functions in a block scope will act closer to variable declaration, where the function name is declared, but the value assigned in the block scope.