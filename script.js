const singUpButton = document.getElementById('singUp');
const singInButton = document.getElementById('singIn');
const container = document.getElementById('container');

// Cuando apritas "Registrate" (en el panel derecho)
singUpButton.addEventListener('click', () => {
    container.classList.add("active");
});

// Cuando apritas "Ingresar" (en el panel izquierdo)
singInButton.addEventListener('click', () => {
    container.classList.remove("active");
});