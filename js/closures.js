
//funciones como objetos en js
const jugador = function(nombre){
    return "Hola " + nombre
}
//console.log(jugador("pepe"))

//funciones anidadas
function global(){
    var a="hola ", b="que ", c=" ase"
    function local(){ return a + b }
    function local2(){ return a + c }
    return local2
}
//console.log(global()())

//funciones closure
const contador1=(function(){
    let _c=0
    function incrementar(n){
        return _c+=n
    }

    function decrementar(n){
        return _c-=n
    }

    function getContador(){
        return _c
    }

    return {
        increment: incrementar,
        decrement: decrementar,
        contador: getContador
    }
})()
//con arrow functions
const contador2=(()=>{
    let _c=0
    function inc(){
        return _c++
    }
    return {
        increment:inc
    }
})()
//console.log(contador2.increment())


//funciones como clases:
function inventario(nombre){
    var _nombre=nombre
    var _articulos={}

    function add(articulo,cantidad){
        _articulos[articulo]=cantidad
    }
    function del(articulo){
        delete _articulos[articulo]
    }
    function get(articulo){
        return _articulos[articulo]
    }
    function getNombre(){
        return _nombre
    }

    return {
        add: add,
        del: del,
        get: get,
        getNombre: getNombre
    }
}

var libros = inventario("libros")
console.log(libros.getNombre())
libros.add("JS-I",3)
libros.add("JS-II",4)
console.log(libros.get("JS-I"))
console.log(libros.get("JS-II"))


const jugador2 = function(nombre){



}