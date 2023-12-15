const valores = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "A"
];
const pintas = ["♦", "♥", "♠", "♣"];

const azar = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const valorhtml = document.getElementById("numero");
const pintahtml = document.getElementsByClassName("pinta");
const boton = document.querySelector("button");

const randomCard = () => {
  const valor = azar(valores);
  const pinta = azar(pintas);

  for (var i = 0; i < pintahtml.length; i++) {
    pintahtml[i].textContent = pinta;

    if (pinta === "♥" || pinta === "♦") {
      pintahtml[i].style.color = "red";
      valorhtml.style.color = "red";
    } else {
      pintahtml[i].style.color = "black";
      valorhtml.style.color = "black";
    }
  }

  valorhtml.innerText = valor;
};

boton.addEventListener("click", randomCard);
randomCard();
