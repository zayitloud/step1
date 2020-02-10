const calc = require('./service/calculator.js')
if (process.argv.length != 4) {
    console.log('Invalid arguments passed')
    return
}
const args = process.argv.slice(2).map(n => parseInt(n))
if (isNaN(args[0]) || isNaN(args[1])) {
    console.log('Invalid number(s) provided')
    return
}
const numbers = []
for (let i = args[0]; i <= args[1]; i++) {
    numbers.push(i)
}
console.log(numbers.map(calc.getWord).join(' '))


