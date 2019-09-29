
// Create Object And Display Its Elements
const address = {
    street: 28,
    city: 'Ktm',
    zipCode: '25500'
};

function showAddress(address) {
    for(let key of Object.keys(address))
        console.log(key, address[key]);
}

showAddress(address);




// Object Equality
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    for(let keys in Object.keys(address1))
        for(let hello in Object.keys(address2))
            if(keys === hello)
                console.log('Equal');
}

areEqual(address1, address2);




// Price Range Objects
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];


