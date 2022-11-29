// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = customerName.toupperCase()
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'initial value'
function changeLeastFavoriteCustomer(leastFavoriteCustomer) {
    leastFavoriteCustomer = 'Assignment to constant variable'
}