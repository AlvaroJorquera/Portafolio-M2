
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Mensaje enviado exitosamente.');
            form.reset(); 
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});


const projectLinks = document.getElementsByClassName('textoVerProyecto');

for (let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('click', function() {
        this.style.background = 'linear-gradient(45deg, #717171, #515151, #161616)';
        this.style.webkitBackgroundClip = 'text';
        this.style.webkitTextFillColor = 'transparent';
    });
}

