###The Problem
Everyone in this class is a bear. Bears eat humans. There are very few humans left, so obviously the bears' food supply is running low.

###Your Mission
Write a function `eatHumans`, that has the following characteristics:

**Parameters**

1. Parameter 1: A `String` of the name of a bear (you can use the name of one of your classmates)
2. Parameter 2: An `Array` containing the names of three random humans.

**Functionality**

Your `eatHumans` function will look at each element in the array and you will need to write conditional statements for each element to determine if that person will be eaten.

**Returns**

Your function will `return` a **single** String describing who was eaten, in the form of:

`" [Person 1] was eaten by [bear], [Person 2] was not eaten by [bear], [Person 3] was eaten by [bear]".`

**Don't Forget to Write Clean Code**

- YOUR FINAL WORKING FUNCTION MUST NOT CONTAIN ANY CONSOLE LOGS.
- YOU MAY ONLY HAVE ONE RETURN STATEMENT IN YOUR FUNCTION.

**Example function call:**

```javascript
var bearName = 'Luc';
var humans = ['Phillip' 'Ryan', 'Geronimo'];

var result = eatHumans(bearName, humans);
console.log(result);
//"Phillip was eaten by Luc, Ryan was eaten by Luc, and Geronimo was not eaten by Luc"
```