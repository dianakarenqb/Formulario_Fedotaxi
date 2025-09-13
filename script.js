document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  //Validamos que el correo no esté vacío y tenga formato correcto
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === "" || !correoRegex.test(correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  //Validamos que la contraseña tenga mínimo 8 caracteres
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  alert("Registro exitoso. ¡Bienvenido a la Cooperativa Fedotaxi!");
});
