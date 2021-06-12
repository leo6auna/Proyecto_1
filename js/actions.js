window.onload = () => {
    //Declaro las variables para el manejo de controles del DOM
    const items = document.querySelectorAll('.item');
    const tapas = document.querySelectorAll('.tapas');

    // Genero un array de 20 items
    let images = Array(20);

    //Inicializo los valores en null
    images.fill(null);
    // Obtener un array con pares de valores de cero a nueve
    images = images.map((value,index) => {
        return Math.trunc(index / 2); // A una división le quita el valor decimal y deja solamente el entero. 
        // Así repito dos veces cada elemento del vector
    });
    // Los desordeno con sort; cada vez que repito la función se desordena un podo más. 
    images.sort (() => {
        return 0.5 - Math.random();
    });
    images.sort (() => {
        return 0.5 - Math.random();
    });
    images.sort (() => {
        return 0.5 - Math.random();
    });
    images.sort (() => {
        return 0.5 - Math.random();
    });
    // Asignar una imagen a cada ítem
    items.forEach((item,index) => {
        item.src = `./images/${images[index]}.png`
    });

    tapas.forEach((tapa) =>{
        tapa.parentElement.classList.toggle("selected");
    });
    setTimeout(() =>{
        tapas.forEach((tapa) => {
            tapa.parentElement.classList.toggle("selected");
        });
    },10000);
    
    items.forEach((item) =>{
        item.addEventListener("click",(event) =>{
            //Cada click de in item procesarlo...
            itemSelect(event.target.parentElement);
        });
    });

    function itemSelect(event) {
        /*Codigo para proesar los ítems
        tienen que agregar select al item seleccionado
        contar cuantos select hay
        si hay dos, ver si coinciden las imágenes
        Si coinciden las imágenes, quitarles el select y ponerles matched
        incrementar un contador de matches
        si no coinciden dejarlas por 2 segundos antes de ocultarlas de vuelta
        incrementar un contador de intentos 
        al llegar a 10 match mostrar el banner de you win, comenzar de nuevo con f5*/



    }

}