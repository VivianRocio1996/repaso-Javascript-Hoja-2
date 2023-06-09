document.getElementById('palindrome-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    var wordInput = document.getElementById('word-input');
    var word = wordInput.value.toLowerCase(); // Obtén el valor del input en minúsculas
  
    var resultDiv = document.getElementById('result');
    if (isPalindrome(word)) {
      resultDiv.innerText = '¡Es un palíndromo!';
    } else {
      resultDiv.innerText = 'No es un palíndromo.';
    }
    
    wordInput.value = ''; // Limpia el campo de entrada
  });
  
  function isPalindrome(word) {
    var reversedWord = word.split('').reverse().join(''); // Invierte la palabra
  
    return word === reversedWord; // Compara la palabra original con la invertida
  }
  