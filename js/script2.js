var arrNum=[12,23,33,55,34]
let pepe = arrNum.forEach((item,i) => {
    console.log(item)
})

console.log(pepe)

const r= function (cadena){
    let numchar = cadena.length
    cadena = cadena.toUpperCase()
    let car
    let c = 0
    for (var i = 0; i < numchar; i++) {
        car = cadena.charAt(i)
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) c++;
    }
    return c
}