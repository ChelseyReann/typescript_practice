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
const add = (a: number, b: number, c?: number | string) => {
    console.log(c);

    return a + b
}

console.log(add(5,4,"hello world"))