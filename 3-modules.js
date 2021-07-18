//---MODULES---//
//Modules  - Encapsulated code(only share minimum)

const names = require ('./4-names') 
const sayHi = require('./5-utils')

sayHi('Rukhaiya')
sayHi(names.John)
sayHi(names.Peter)    

const list = require('./6-alternative');
console.log(list)

