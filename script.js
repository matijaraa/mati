console.log(document.querySelector('title').innerText)
//                0  1  2  3   4  ....
let arrayPares = [2, 4, 6, 8, 10, 12, 14]

console.log(arrayPares)

console.log(arrayPares[0])
console.log(arrayPares[2])
console.log(arrayPares[4])

// reasigno el valor en la posición asignada o le agrego elementos
arrayPares[0] = 0
arrayPares[0] = 2
arrayPares[7] = 16
arrayPares[8] = 18

console.log(arrayPares)

/*** ---------------------------------- ***/
/*** ARRAY PUSH ***/
/*** ---------------------------------- ***/
console.log('\n/*** ARRAY PUSH ***/')
// Agrega elementos al final del array
// Devuelve la nueva cantidad de elementos

let nuevoLength = arrayPares.push(20)
console.log(arrayPares)

nuevoLength = arrayPares.push(22, 24, 26)
nuevoLength = arrayPares.push([1,3,5])
console.log(arrayPares)

console.log("nuevoLength: ", nuevoLength)
console.log({nuevoLength})
/*** ---------------------------------- ***/
/*** ARRAY UNSHIFT                      ***/
/*** ---------------------------------- ***/
console.log('\n/*** ARRAY UNSHIFT ***/')
// Agrega elementos al principio del array
// Devuelve la nueva cantidad de elementos

nuevoLength = arrayPares.unshift(0)

console.log({arrayPares})
console.log({nuevoLength})

/*** ---------------------------------- ***/
/*** ARRAY POP                          ***/
/*** ---------------------------------- ***/
console.log('\n/*** ARRAY POP ***/')
// Saca un elemento del final del array
// Devuelve: Elemento eliminado y si esta vacio el array es undefined

let elemEliminado = arrayPares.pop()

console.log({arrayPares})
console.log({elemEliminado})
/*** ---------------------------------- ***/
/*** ARRAY SHIFT                        ***/
/*** ---------------------------------- ***/
console.log('\n/*** ARRAY SHIFT ***/')
// Saca elementos del principio del array
// Devuelve: Elemento eliminado y si esta vacio el array es undefined

elemEliminado = arrayPares.shift()

console.log({arrayPares})
console.log({elemEliminado})

/*** ---------------------------------- ***/
/*** ARRAY SPLICE                      ***/
/*** ---------------------------------- ***/
console.log('\n/*** ARRAY SPLICE ***/')
// Agrega elementos al principio del array
// Devuelve la nueva cantidad de elementos

let eliminado = arrayPares(3)