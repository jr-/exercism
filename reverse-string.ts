/*
Instructions
Reverse a string

For example: input: "cool" output: "looc"
*/

export function reverse(phrase: string) {
    const length = phrase.length - 1
    let reverse = ''
    for (let i = length; i > -1; i--) {
        reverse = `${reverse}${phrase[i]}`
    }
    return reverse
}

console.log(reverse('asd'))