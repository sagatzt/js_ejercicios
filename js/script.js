/*
//1. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: FACIL
//Crear un script que reciba el número de dni y calcule y devuelva la letra
const a = function(num){
    var ls = "TRWAGMYFPDXBNJZSQVHLCKE";
    var l = "";
    if((num > 9999999) && (num < 100000000)){
      var i = n % 23;
      l = ls.charAt(i);
    }
    return l;
}

//2. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: FACIL
//Crear un script que cuente y devuelva el número de vocales 
//que aparecen en una cadena pasada como parámetro
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

//3. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: MEDIO
//Crear un script que compruebe si una frase o palabra es palíndroma.
//Devuelve true si lo es, false si no lo es
const r = function(cadena){
    let numchar = cadena.length
    cadena = cadena.toLowerCase()
    let car, cadena_e = "", cadena_r = ""
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i)
        if (car != " ") {
            cadena_e += car
            cadena_r = car + cadena_r
        }
    }
    if (cadena_e == cadena_r) 
        return true
    else
        return false
}

//4. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: MEDIO
//hacer una pirámide ascendente por consola que repita el número 
//de fila f veces, así: f / ff / fff / ffff ... hasta el número que se envíe como parámetro
const r = function(num){
    if (Number(num) == num) {
        if (num > 0 && num <= 50) {
            for (var i=0;i<=num;i++) {
                var cadena=""
                for (var j=1;j<=i;j++) 
                    cadena+=j
                console.log(cadena)
            }
        } 
        else 
            console.log("El número introducido no es válido")
    } 
    else 
        console.log("No has introducido un número")
}

//5. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: DIFÍCIL
//mostrar un calendario a partir del mes y el año recibidos
const f = function(m,y){
    m-=1;
    let f = new Date(y, m);
    let d = f.getDay();
    ml=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][m]
    console.log(ml + " de " + y);
    while (f.getMonth() == m) {
        switch (f.getDay()) { 
            case 0:
                d = "Domingo";
                break;
            case 1:
                d = "Lunes";
                break;
            case 2:
                d = "Martes";
                break;
            case 3:
                d = "Miercoles";
                break;
            case 4:
                d = "Jueves";
                break;
            case 5:
                d = "Viernes";
                break;
            case 6:
                d = "Sabado";
                break;
        }
        console.log(f.getDate() + " - " + d);
        f.setDate(f.getDate() + 1);
    }    
}

//6. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: MEDIO
//Calcular los minutos que faltan hasta fin de año (las 23:59:59 del año actual)
const r = function(){
    let now = new Date()
    let fin = new Date(now.getFullYear(),11,31,23,59,59)
    console.log(now)
    let dif = fin.getTime() - now.getTime()
    let m = Math.round(dif/(1000 * 60 ))
    return m
}

//7. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: DIFÍCIL
//Coge una frase enviarda como parámetro y la divide en 
//fragmentos de 10 caracteres. Si el último caracter de 
//esa división es diferente a un espacio en blanco, entonces
//es porque está partiendo una palabra y le añadimos un -.


const r = function(cadena){
    for(var i=0;i<cadena.length;i+=10){
        var sc=""
        sc=cadena.substring(i,i+10)
        if(cadena.charAt(i+10)!=" ") sc+="-"
        console.log(sc)
    }
    
}


//8. CONSTRUIR EL ENUNCIADO DEL SIGUIENTE EJERCICIO RESUELTO:
//NIVEL: DIFÍCIL
//Crear un script que reciba 3 enteros entre 0-255 y devuelva
//un código de color en hexadecimal (cuidado con los ceros)
const r = function(b,g,r){
    
    if((b>-1 && b<256) && (g>-1 && g<256) && (r>-1 && r<256) ){
        let bx = b.toString(16)
        bx = "0".repeat(2-bx.length)+bx
        let gx = g.toString(16)
        gx = "0".repeat(2-gx.length)+gx
        let rx = r.toString(16)
        rx = "0".repeat(2-rx.length)+rx
        return ("#"+rx+gx+bx).toUpperCase()
    }else
        console.log("Número no válido")

    return hexString
}

console.log(r(255,6,10))
*/

/*texto.onkeypress=(e)=>{
    let r="<p>keyCode: " + e.keyCode + "</p>" +
        "<p>CharCode: " + e.charCode + "</p>" +
        "<p>Which: " + e.which + "</p>" +
        "<p>fromCharCode: " + String.fromCharCode(e.which) + "</p>"
    resultado.innerHTML=r
    console.log(e)
}*/



let resultado = document.querySelector(".resultado")
let sacarNumero = document.querySelector("#boton1")
let carta = document.querySelector(".carta")
let numeros = []
let palos = ["picas","diamantes","treboles","corazones"]
let jugada=[]

mezclarNumeros()
function mezclarNumeros(){
    palos.forEach(p=>{
        for(let i=1;i<11;i++) 
            numeros.push({
                palo: p,
                valor: i,
                imagen: `${p}_${i}.svg`
            })
    })
    numeros.sort(n=>Math.random()-.5) 
}

sacarNumero.onclick=()=>{
    let numero = numeros.shift()
    if(numero.valor==1) 
        if(confirm("Te ha salido un 1. ¿Quieres que valga 10?")) numero.valor=10
    jugada.push(numero)
    if(numeros.length==0) mezclarNumeros()
    carta.src=`/images/baraja/${numero.imagen}`
    let minicarta=carta.cloneNode()
    minicarta.style.width="60px"
    document.querySelector(".jugada").appendChild(minicarta)
    comprobarJugada()
}
 
function comprobarJugada(){
    console.log(jugada)
    let total=jugada.map(c=>c.valor).reduce((a,b)=>a+b)
    resultado.innerHTML=total    
    if(total==21)
        resultado.innerHTML+="HAS GANADO"
    else if(total>21)
        resultado.innerHTML+="HAS PERDIDO"
}








