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