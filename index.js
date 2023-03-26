const preguntas = document.querySelectorAll(".pregunta")
const detalles = document.querySelector('details');
const flecha = document.querySelectorAll(".pregunta__img")
const titulo = document.querySelector(".pregunta__titulo")
const respuesta = document.querySelectorAll(".pregunta__respuesta")
// const respuestaSocolicitada = preguntas.childNodes[0]


console.log(preguntas)
console.log(flecha)
console.log(respuesta)

// preguntas.forEach((girar, img) => {
//     girar.addEventListener("click", function () {
//         console.log(girar);
//         console.log(img);
//         console.log(flecha);
//         flecha[img].classList.add("girar");
//         console.log(flecha[img]);
//     })

// });
    
// Obtener el elemento <details>

// preguntas.forEach((girar, img) => {
//     girar.addEventListener("click", function () {
//         console.log(girar);
//         console.log(img);
//         console.log(flecha);
//         flecha[img].classList.add("girar");
//         console.log(flecha[img]);
//     })

// });
// detalles.open = false
if (detalles.open == true) {
    titulo.classList.add("bold")
}

console.log(detalles.open)