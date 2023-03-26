const preguntas = document.querySelectorAll(".pregunta")
const flecha = document.querySelectorAll(".pregunta__img")
const titulo = document.querySelectorAll(".pregunta__titulo")

//Creando funcion para poner negrita
preguntas.forEach((abrir, i) => {
    // Definir una variable para guardar el estado actual de la función bold
    let bold = false;

    abrir.addEventListener("click", function () {
        console.log("Cambiando estado");
        if (bold == false) {
            titulo[i].classList.add("bold");
            bold = !bold;
            // Comprobar el estado actual de la función y ejecutarla o detenerla según corresponda
            switch (bold) {
                case true:
                    console.log("Ahora contiene bold");
                    break;
                case false:
                    console.log("La función se ha detenido.");
                    break;
                default:
                    console.log("Error: estado de función desconocido.");
                    break;
            }
        } else {
            titulo[i].classList.remove("bold");
            bold = !bold;

            switch (bold) {
                case true:
                    console.log("no contenia bold");
                    break;
                case false:
                    console.log("Ahora, NO contiene bold");
                    break;
                default:
                    console.log("Error: estado de función desconocido.");
                    break;
            }
        }
    })
});

//Creando funcion para que la flecha gire
preguntas.forEach((girar, img) => {
    // Definir una variable para guardar el estado actual de la función Gira
    let gira = false;

    girar.addEventListener("click", function () {

        if (gira == false) {
            flecha[img].classList.add("girar");
            gira = !gira
            // console.log(flecha[img]);
        } else {
            flecha[img].classList.remove("girar");
            gira = !gira
        }
    })
});