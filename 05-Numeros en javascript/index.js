//- Una variable que contenga tu altura en centímetros (entero)
const alturaCm = 173;
console.log(alturaCm)
//- Una variable que contenga tu altura en metros (número de coma flotante)
const alturaM = 1.73;
console.log(alturaM)
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const peso = 86.2;
console.log(peso)
//- Una variable que contenga tu altura en metros redondeada hacia arriba
const alturaRedondeada = Math.ceil(alturaM);
console.log(alturaRedondeada)
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const pesoRedondeado = Math.floor(peso);
console.log(pesoRedondeado)
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const equal = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(equal)