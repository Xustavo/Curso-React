// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

// Com o let, as variareis dentro de chaves so receberao o valor dentro do bloco
let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

for(let i = 0; i < 5; i++){
    console.log(i)
}

// mesma logica do let, o bloco nao muda o global
function logName() {
    const name = 'Gustavo'
    console.log(name)
}

const name = 'Bruno'

logName()
console.log(name)



//2 - arrow function
const sum = function sum (a,b) {
    return a + b
}

const arrowSum = (a,b) =>  a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const geeting = (name) => {
    if(name) {
        return 'olá'  + name + '!'
    }else {
        return 'olá'
    }
}

console.log(geeting("Gustavo"))
console.log(geeting())

const testeArrow = () => console.log("testou!")

testeArrow()

const user = {
    name: "Maria",
    sayUserName() {
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log("Username: " + this.name)
        }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()



//3 - filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if( n >= 3 ) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name : "Matheus", avaiable:true},
    {name : "Gustavo", avaiable:false},
    {name : "Caio", avaiable:true},
    {name : "Maria", avaiable:false}
]

const avaiableUsers = users.filter((user) => user.avaiable)
const notAvaiableUsers = users.filter((user) => !user.avaiable)

console.log(avaiableUsers)
console.log(notAvaiableUsers)

//4 - map
const products = [
    {name: 'Camisa', price: 10.99, category: 'roupas'},
    {name: 'Chaleira', price: 299.99, category: 'eletro'},
    {name: 'Fogão', price: 599.99, category: 'eletro'},
    {name: 'Calça', price: 199.99, category: 'roupas'}
]

products.map((product) => {
    if(product.category === 'roupas'){
        product.onSale = true
    }
})

console.log(products)



//5 - template literals
const userName = 'Gustavo'
const age = 18

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos!`)


//6 - Destructuring
const fruits = ["Maçã", "Laranja", "Banana"]

const [ f1, f2, f3] = fruits

//imprime a maça
console.log(f1)

const productsDetails = {
    name: "Teclado",
    price: 229.9,
    category: "Periféricos",
    color: "Preto"
}

const {name: productName, price, category: productCategory, color} = productsDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertece à categoria ${productCategory} e é da cor ${color}`)

//7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 10000, price: 40000}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

//8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola polo", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

//9 - herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.productWithDiscount(30))
hat.showColors()