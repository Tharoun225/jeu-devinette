let nombreMagique = Math.floor(Math.random() * 20) + 1;
let tentatives = 0;

function verifierNombre() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const essais = document.getElementById("essais");
  const boutonRejouer = document.getElementById("btn-rejouer");

  tentatives++;

  if (isNaN(guess) || guess < 1 || guess > 20) {
    message.innerText = "⛔️ Entrez un nombre entre 1 et 20.";
    return;
  }

  if (guess < nombreMagique) {
    message.innerText = "🔼 Trop petit ! Essaie un nombre plus grand.";
  } else if (guess > nombreMagique) {
    message.innerText = "🔽 Trop grand ! Essaie un nombre plus petit.";
  } else {
    message.innerText = `🎉 Bravo Haroun ! Tu as trouvé en ${tentatives} essai(s) !`;
    boutonRejouer.style.display = "inline-block"; // Affiche le bouton rejouer
  }

  essais.innerText = `Tentatives : ${tentatives}`;
}

function rejouer() {
  nombreMagique = Math.floor(Math.random() * 20) + 1;
  tentatives = 0;

  document.getElementById("guess").value = "";
  document.getElementById("message").innerText = "";
  document.getElementById("essais").innerText = "";
  document.getElementById("btn-rejouer").style.display = "none";
}

