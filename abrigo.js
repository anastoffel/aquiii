const readlineSync = require('readline-sync')

const database = [
    {name: 'Casa do Caminho', address: 'Rua do Amanhecer, 123, Centro', phone: '(11) 1234-5678', capacity: 20 , city: 'Canoas'},
    {name: 'Abrigo Esperança' , address: 'Rua da Solidariedade, 321, Bairro' , phone: '(11) 9876-5432', capacity: 30 , city: 'São Leopoldo'},
    {name: 'Casa dos Amigos' , address: 'Av. da Fraternidade, 456, Centro', phone: '(11) 5555-4444', capacity: 25, city:  'Novo Hamburgo'},
    {name: 'Abrigo do Bem', address: 'Rua da Esperança, 789, Bairro', phone: '(11) 7777-8888', capacity:  35, city: 'Canoas'},
    {name: 'Casa dos Anjos' , address: 'Av. da Paz, 159, Centro', phone: '(11) 3333-2222', capacity: 15 , city: 'Porto Alegre'}
]

function registerShelter(array) {
    const name = readlineSync.question("Enter the name of the shelter: ");
    const address = readlineSync.question("Which address: ");
    const phone = readlineSync.question("What's the phone: ");
    const capacity = readlineSync.question("What's the capacity of the shelter: ");
    const city = readlineSync.question("What's the city: ");
    
    let shelter = {
        name : name,
        address : address,
        phone : phone,
        capacity : capacity,
        city : city
    }
    array.push(shelter)
}

function printMenu() {
   console.log(`===== TEMPORARY SHELTERS =====
   1. Register Shelter
   2. List Shelter
   3. Search for shelter
   4. Exit`) 
}


function chooseOption(key) {
    switch (key) {
        case '1':
            registerShelter(database)
            console.log(``)
            break;
        case '2':
            console.log(``)
            break
        case '3':
            console.log(``)   
            break
        case '4':
            console.log(``)  
            return false  
    }
    return true
}

function main() {
    let end = true
    while(end) {
        printMenu()
        let option = readlineSync.question('Choose an option: ')
        end = chooseOption(option)
    }
}

main()
console.log(database)