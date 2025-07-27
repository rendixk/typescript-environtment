type Specs = {
   processor: string,
   ram: number,
   ssd: number
}

function computer(specs: Specs): void {
console.log(`processor: ${specs.processor}`)
console.log(`ram: ${specs.ram}`)
console.log(`ssd: ${specs.ssd}`)
}

computer({
   processor: "intel i7",
   ram: 32,
   ssd: 2
})

console.log("\n")

type User = {
   name: string,
   age: number,
   isWork: boolean
}

const person: User = {
   name: "John",
   age: 30,
   isWork: true
}

console.log(JSON.stringify(person, null, 1));