// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

console.log(upperCaseCustomerName)

function setBestCustomer(){
   window.bestCustomer = 'not bob'
}
console.log (setBestCustomer)

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'alice'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'grace'
}