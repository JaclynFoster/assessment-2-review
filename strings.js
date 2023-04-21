// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be familiar with and
//  know how to use a variety of string methods.
//  They should also be able to find and use resources
//  that teach them how to use new string methods.

// 1.1a
//  Given a string, str1, find the third character
//  using a string method and save it to a new variable.

const str1 = "Howdy, there!"

const newStr = str1.substring(2, 3)
console.log("newStr:",newStr)

//or you can use charAt(2)


// 1.1b
//  Find a URL that has documentation or usage examples for
//  the string method used to solve 1.1a and put it
//  here in a JS comment (an MDN link is usually a good choice).

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// 1.2a
//  Given a string, str2, make a new string that is an
//  all-caps version of it using a string method.

const str2 = "I forgot to turn off the oven!"

const uppercase = str2.toUpperCase()
console.log(uppercase)
//strings are immutable a new variable is needed

// 1.2b
//  Find a URL that has documentation or usage examples for
//  the string method used to solve 1.2a and put it
//  here in a JS comment (an MDN link is usually a good choice).

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// 1.3
//  Using your Google sleuthing skills, find out what the .trim()
//  method does, and explain it in comments below, in your own words.

//.trim() gets rid of whitespace and saves memory only off the beginning and end of the string. 

// 1.4
//  Using your Google sleuthing skills, find a JS string method
//  that will find a specified substring in a string, and replace
//  all of the occurrences of that substring with another substring.
//  For example, given the string
//    "I love to eat apples and bananas",
//  changing all of the "a" substrings to "u" substrings
//  will result in the string
//    "I love to eut upples and bununus".
//  Put the name of the method you find in a comment below.
let replaceStr = "I love to eat apples and bananas".replace("a", "u")
//.replace()

// *** Problem 2 ***
//  Students should know how to concatenate strings.

// 2.1
//  Log the following text:
//     My number 2's named "Johnny Paboni": and you don't want to mess!
//  You must use the variables provided to form the output string.
//  To accomplish this, use string concatenation.

const first = 'Johnny'
const last = 'Paboni'
const num = 2
const phrase = 'want to mess'

const concatStr = "My number " + num + " named " + first + " " + last + ": and you don't " + phrase + "!"
console.log(concatStr)

// 2.2
//  Do problem 2.1 by doing another way of string concatenation.
//  For example, if the '+' operator was used, perhaps template
//  literals should be used this time.

const literalStr = `My number ${num} named ${first} ${last}: and you don't ${phrase}!`
console.log(literalStr)
