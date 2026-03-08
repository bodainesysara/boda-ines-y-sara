// Función para manejar el envío del formulario
function handleRSVPSubmit(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const formData = new FormData(event.target);

  // Aquí puedes enviar los datos a un servicio de formularios (por ejemplo, Formspree o Google Forms)
  console.log('Datos del formulario:', Object.fromEntries(formData));

  // Limpiar el formulario
  event.target.reset();
}

// Agregar el evento de envío del formulario
const rsvpForm = document.querySelector('.rsvp form');
rsvpForm.addEventListener('submit', handleRSVPSubmit);

// Función para mostrar el formulario de confirmación
const rsvpButton = document.querySelector('.hero .btn');
const rsvpSection = document.querySelector('.rsvp');

rsvpButton.addEventListener('click', () => {
  rsvpSection.style.display = 'block';
  window.scrollTo({
    top: rsvpSection.offsetTop,
    behavior: 'smooth'
  });
});