import { choice, remove } from './helpers'
import foods from './foods'

let randFruit = choice(foods);

console.log(`I'd like one ${randFruit}, please.`)
console.log(`Here you go: ${randFruit}`)
console.log(`Delicious! May I have another?`)

let leftovers = remove(foods, randFruit)

console.log(`I'm sorry, we're all out. We have ${leftovers.length} left.`)