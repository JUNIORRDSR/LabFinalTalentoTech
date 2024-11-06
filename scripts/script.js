function menu(){
    var x = document.getElementById("menu");
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

function mensaje(){
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }

}