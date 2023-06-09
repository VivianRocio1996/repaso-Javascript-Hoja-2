document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    var birthdateInput = document.getElementById('birthdate-input');
    var birthdate = new Date(birthdateInput.value); // Obtén la fecha de nacimiento
  
    var ageInMilliseconds = Date.now() - birthdate.getTime(); // Calcula la edad en milisegundos
    var ageDate = new Date(ageInMilliseconds); // Crea una fecha a partir de la diferencia de tiempo
  
    var years = Math.abs(ageDate.getUTCFullYear() - 1970); // Calcula los años
  
    var resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Tienes ' + years + ' años de edad.';
    
    birthdateInput.value = ''; // Limpia el campo de entrada
  });
  