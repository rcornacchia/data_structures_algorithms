const Customers = [
    {
        name: 'rob',
        purchases: [50, 60, 70]
    },
    {
        name: 'bob',
        purchases: [50, 60, 70]
    },
    {
        name: 'tim',
        purchases: [50, 60, 70]
    },
    {
        name: 'jim',
        purchases: [50, 60, 70]
    },
    {
        name: 'george',
        purchases: [50, 60, 70]
    },
    {
        name: 'luke',
        purchases: [5, 6, 7]
    },
    {
        name: 'jeremy',
        purchases: [5, 6, 7]
    },
    {
        name: 'tina',
        purchases: [5, 6, 7]
    },
    {
        name: 'mickey',
        purchases: [5, 6, 7]
    }
]

// given this array of customers
// find the 5 customers with the most purchase
console.log(Customers)

let orderTotals = []

const orders = Customers.reduce((orderTotal, customer) => {
    orderTotal += customer.purchases.reduce((purchaseTotal, purchase, i, arr) => {
        purchaseTotal += purchase
        console.log(`Purchase total for ${customer.name}: $${purchaseTotal}`)
        if (i == arr.length-1) {
            orderTotals.push({
                name: customer.name,
                total: purchaseTotal
            })
        }
        return purchaseTotal
    }, 0)
    console.log(`\nOrder total: $${orderTotal}`)
    return orderTotal
}, 0)

let sorted = orderTotals.sort((a, b) => {
    if (a<b) return 1
    if (a>b) return 1
    if (a==b) return 0
})

console.log(sorted)

console.log(orderTotals)
console.log(orders)

console.log(sorted.slice(0, 5))