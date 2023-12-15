let products = [
    {
        name: "tvorog",
        type: "milk",
        price: 10000
    },
    {
        name: "apple",
        type: "fruit",
        price: 5000
    },
    {
        name: "govyadina",
        type: "meat",
        price: 100000
    },
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "banan",
        type: "fruit",
        price: 20000
    },
    {
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {
        name: "sir",
        type: "milk",
        price: 16000
    },
]

let categories = [
    {
        name: "meat",
        arr: [],
        amount: 0,
        total: 0
    },
    {
        name: "milk",
        arr: [],
        amount: 0,
        total: 0
    },
    {
        name: "fruit",
        arr: [],
        amount: 0,
        total: 0
    },
]

let Maxprice = {}
let Minprice = {}


for (let product of products) {

    for (let category of categories) {
        if (product.type === category.name) {
            category.amount++
            category.arr.push(product.name)
            category.total += product.price
        }
    }
   
    
}

console.log(categories);
