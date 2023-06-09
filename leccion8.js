document.addEventListener("DOMContentLoaded", function() { 

    const btnEjecutar = document.getElementById("btnEjecutar");
    const res = document.getElementById("res");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");

    btnEjecutar.addEventListener("click", () => {
        res.innerHTML = `Hola ${nombre.value} ${apellido.value}, tienes ${edad.value} años.`;

        if (edad.value >= 18) {
            res.innerHTML += "<br> Eres mayor de edad.";
        }


        //cantidad de caracteres de el nombre 
        res.innerHTML += `<br> Tu nombre  ${nombre.value} tiene  ${nombre.value.length} caracteres.`;
        //cantidad de caracteres de el apellido
        res.innerHTML += `<br> Tu apellido  ${apellido.value} tiene  ${apellido.value.length} caracteres.`; 

    });
});