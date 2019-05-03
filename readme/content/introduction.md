<!--bl
(filemeta
    (title "What is JSAssert?")
)
/bl-->
Do you have hard to test code that needs explaining? Do you want to make it easier to know when someone has made a mistake? There is something like this in every codebase. What you need are assertions.

Assertions aren't a type check, though they can be.

Assertions aren't a value verification, but they can be. 

Assertions aren't a guard clause, but they can be.

An assertion is a tool to communicate with other programmers when somet way to capture errors made by other programmers and communicate what you intend instead of making them dig deep into your codebase to figure out what they did wrong.

JSAssert is a small, fast library which makes it easy to tell your users what it means to interact with your code.  JSAssert is a single function with a simple contract. Drop in an assertion and your code will immediately become more communicative and predictable.  They can even go places Typescript just can't reach. Combine tests, types and assertions to help keep your code readable, communicative and more maintainable.  Say what you intend and simplify your life.