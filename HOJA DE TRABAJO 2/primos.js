document.addEventListener("DOMContentLoaded", function() {
    var primosList = document.getElementById("primos-list");
  
    for (var i = 1; i <= 100; i++) {
      if (esPrimo(i)) {
        var li = document.createElement("li");
        li.textContent = i;
        primosList.appendChild(li);
      }
    }
  });
  
  function esPrimo(num) {
    for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  