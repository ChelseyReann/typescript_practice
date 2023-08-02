/* 
    CHALLENGE
        make a function called addNums that takes in 2 numbers, 
        adds them together and returns the result as a string.
        For example, if I did: 
            console.log(addNums(1, 2))
         I would get 3 as a string in the console.
*/

const addNums = (num1: number, num2: number):string => {
    return `${num1 + num2}`
}

console.log(addNums(1,3))

//Making c an optional parameter and a union type = it can be more than 1 type
const add = (a: number, b: number, c?: number | string):number => {
    console.log(c);

    return a + b
}

console.log(add(5,4,"hello world"))

//void function
const logMessage = (msg: string): void => {
    console.log('this is the message: ' + msg)
    //cannot have a return since it's a void function
}

logMessage("hello world")

//function declaration

let sayHi: (name: string) => void;

sayHi = (name) => {
    console.log("hello " + name)
}

sayHi("Chelsey")

//Any type - should any be used sparingly!!
let age: any = '100'
age = 100
age = [1, 2, 3]

//type aliases
type StringOrNumber = string | number
let x: StringOrNumber
let y: StringOrNumber

x = 100
x = '100'
//x = true -> this will give an error because Boolean is not included in our type