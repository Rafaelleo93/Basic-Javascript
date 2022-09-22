// - Una cadena de texto con tu Nombre
let nombre = "Rafael Leonardo";
console.log(nombre)
// - Otra cadena de texto con tu Apellido
let apellido = "Miranda Neto";
console.log(apellido)
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante)
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let allCaracters = estudiante.length;
console.log(allCaracters)
// - Una variable que contenga la primera letra del Nombre
let firstCaracter = nombre.charAt(0);
console.log(firstCaracter)
// - Otra variable que contenga la última letra del Apellido
let lastCaracter = apellido.substring(apellido.length -1, apellido.length);
console.log(lastCaracter)
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let deleteSpace = estudiante.replace(/ /g, "");
console.log(deleteSpace)
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let studentContain = estudiante.includes(nombre);
console.log(studentContain)