let nombreMagique = Math.floor(Math.random() * 20) + 1;
let tentatives = 0;
const maxTentatives = 5;

let secondes = 0;
let intervalle;

function verifierNombre() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const essais = document.getElementById("essais");
  const boutonRejouer = document.getElementById("btn-rejouer");
  const input = document.getElementById("guess");
  const boutonDeviner = document.querySelector("button[onclick='verifierNombre()']");

  if (isNaN(guess) || guess < 1 || guess > 20) {
    message.innerText = "⛔️ Entrez un nombre entre 1 et 20.";
    return;
  }

  if (tentatives === 0) {
    demarrerChrono();
  }

  tentatives++;

  if (guess < nombreMagique) {
    message.innerText = "🔼 Trop petit !";
  } else if (guess > nombreMagique) {
    message.innerText = "🔽 Trop grand !";
  } else {
    message.innerText = `🎉 Bravo Haroun ! Tu as trouvé en ${tentatives} essai(s) !`;
    boutonRejouer.style.display = "inline-block";
    input.disabled = true;
    boutonDeviner.disabled = true;
    arreterChrono(); // 🛑 Arrêter le chrono en cas de victoire
    return;
  }

  essais.innerText = `Il te reste ${maxTentatives - tentatives} tentative(s).`;

  if (tentatives >= maxTentatives) {
    message.innerText = `❌ Perdu ! Le nombre était ${nombreMagique}.`;
    input.disabled = true;
    boutonDeviner.disabled = true;
    boutonRejouer.style.display = "inline-block";
    arreterChrono(); // 🛑 Arrêter le chrono en cas de défaite
  }
}

function rejouer() {
  secondes = 0;
  document.getElementById("chrono").innerText = `Temps : 0 s`;

  nombreMagique = Math.floor(Math.random() * 20) + 1;
  tentatives = 0;

  document.getElementById("guess").value = "";
  document.getElementById("guess").disabled = false;
  document.querySelector("button[onclick='verifierNombre()']").disabled = false;

  document.getElementById("message").innerText = "";
  document.getElementById("essais").innerText = "";
  document.getElementById("btn-rejouer").style.display = "none";
}

function demarrerChrono() {
  intervalle = setInterval(() => {
    secondes++;
    document.getElementById("chrono").innerText = `Temps : ${secondes} s`;
  }, 1000);
}

function arreterChrono() {
  clearInterval(intervalle);
}
