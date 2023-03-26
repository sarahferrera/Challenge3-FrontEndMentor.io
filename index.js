const preguntas = document.querySelectorAll(".pregunta")
const detalles = document.querySelectorAll('details');
const flecha = document.querySelectorAll(".pregunta__img")
const titulo = document.querySelectorAll(".pregunta__titulo")
const respuesta = document.querySelectorAll(".pregunta__respuesta")

//Creando funcion para poner negrita

detalles.forEach((abrir, i) => {
    if (titulo[i].classList.contains("bold")) {
        abrir.addEventListener("click", function () {
            console.log("contenia bold");
            titulo[i].classList.remove("bold");
        });
    }
});

detalles.forEach((abrir, i) => {
        if (titulo[i].classList.contains("normal")) {
            abrir.addEventListener("click", function () {
                console.log("no contenia bold");
                titulo[i].classList.replace("normal", "bold");
            })
        }
});

// if (detalles[i].hasAttribute('open')) {
//     console.log('El elemento details está abierto');
//   } else {
//     console.log('El elemento details está cerrado');
//   }


//Creando funcion para que la flecha gire


preguntas.forEach((girar, img) => {
    girar.addEventListener("click", function () {
        console.log(girar);
        console.log(img);
        console.log(flecha);
        flecha[img].classList.add("girar");
        console.log(flecha[img]);
    })

});
