const humorData = {
  absurdo: {
    label: "Absurdo",
    description: "Premisas torcidas, objetos con intención y finales que parecen doblarse.",
    comedians: [
      { name: "Bruno Croissant", badge: "FICTICIO", match: "96%", text: "Silencios raros, objetos y una lógica que se derrite a mitad del bolo." },
      { name: "Laia Parpadeo", badge: "NOVEDAD", match: "91%", text: "Surrealismo rápido para empresas valientes y cumpleaños con buen pulso." },
      { name: "Nico Bucle", badge: "FICTICIO", match: "84%", text: "Una premisa absurda, diez minutos de precisión y cero explicación." },
      { name: "Rita Persiana", badge: "HOT", match: "82%", text: "Actúa como si el escenario tuviera instrucciones equivocadas." },
      { name: "Teo Mandarina", badge: "FICTICIO", match: "78%", text: "Muy físico, muy raro, muy útil cuando el público quiere sorpresa." },
      { name: "Lola Desfase", badge: "FICTICIO", match: "73%", text: "Humor de imagen mental imposible y remates secos." },
    ],
  },
  observacional: {
    label: "Observacional",
    description: "La vida diaria puesta bajo lupa, con verdad reconocible y remate limpio.",
    comedians: [
      { name: "Marta Cafetera", badge: "HOT", match: "98%", text: "Costumbrismo afilado para cenas de empresa y grupos que se conocen demasiado." },
      { name: "Dani Recibo", badge: "FICTICIO", match: "93%", text: "Familia, alquileres y conversaciones incómodas sin pasarse de frenada." },
      { name: "Eva Ascensor", badge: "FICTICIO", match: "88%", text: "Cercana, clara y muy buena para sala pequeña." },
      { name: "Pau Calendario", badge: "NOVEDAD", match: "85%", text: "Detecta los hábitos raros de oficina antes que recursos humanos." },
      { name: "Claudia Semáforo", badge: "FICTICIO", match: "80%", text: "Ritmo suave, mucha identificación y cero grito." },
      { name: "Marc Ticket", badge: "FICTICIO", match: "76%", text: "Ideal para públicos amplios que quieren reírse de lo cotidiano." },
    ],
  },
  provocador: {
    label: "Provocador",
    description: "Sube la tensión con oficio, pero sabe leer la sala.",
    comedians: [
      { name: "Alex Mordida", badge: "FICTICIO", match: "95%", text: "Ritmo alto, crowd work y filo con control." },
      { name: "Irene Límite", badge: "HOT", match: "90%", text: "Provoca desde la inteligencia, no desde el ruido." },
      { name: "Pol Chispa", badge: "FICTICIO", match: "82%", text: "Muy útil para públicos jóvenes y eventos nocturnos." },
      { name: "Nora Puñal", badge: "NOVEDAD", match: "79%", text: "Tono ácido, buena presencia y remates cortos." },
      { name: "Max Pólvora", badge: "FICTICIO", match: "75%", text: "Funciona cuando el briefing permite margen." },
      { name: "Greta Radar", badge: "FICTICIO", match: "72%", text: "Lee la sala rápido y ajusta el filo sin perder energía." },
    ],
  },
  familiar: {
    label: "Familiar",
    description: "Humor limpio para edades mezcladas, eventos largos y mesas sensibles.",
    comedians: [
      { name: "Júlia Sobrina", badge: "FICTICIO", match: "97%", text: "Blanco, ágil y perfecto para edades mezcladas." },
      { name: "Óscar Domingo", badge: "NOVEDAD", match: "89%", text: "Calidez, historias y cero sobresaltos." },
      { name: "Clara Merienda", badge: "FICTICIO", match: "86%", text: "Muy buena para cumpleaños y celebraciones familiares." },
      { name: "Hugo Mantel", badge: "HOT", match: "84%", text: "Sabe jugar con niños, adultos y tíos opinando al fondo." },
      { name: "Nina Postal", badge: "FICTICIO", match: "79%", text: "Humor amable, ritmo medio y cierre emocional." },
      { name: "Santi Helado", badge: "FICTICIO", match: "74%", text: "Ligero, visual y fácil de encajar en celebraciones." },
    ],
  },
  negro: {
    label: "Negro",
    description: "Oscuro, medido y solo para públicos avisados.",
    comedians: [
      { name: "Vera Ceniza", badge: "FICTICIO", match: "94%", text: "Negro elegante, calibrado y con pausa." },
      { name: "Toni Funeral", badge: "HOT", match: "87%", text: "Para grupos que pidan explícitamente ese tono." },
      { name: "Alma Eclipse", badge: "FICTICIO", match: "81%", text: "Oscuro con narrativa, menos golpe fácil." },
      { name: "Leo Sombra", badge: "NOVEDAD", match: "78%", text: "Remate seco y mirada incómoda, pero con criterio." },
      { name: "Mina Cripta", badge: "FICTICIO", match: "74%", text: "Mejor para noches privadas y público muy alineado." },
      { name: "Jan Resaca", badge: "FICTICIO", match: "69%", text: "Humor áspero, útil cuando se busca riesgo real." },
    ],
  },
};

const humorButtons = Array.from(document.querySelectorAll("[data-humor]"));
const stack = document.querySelector("[data-card-stack]");
const counter = document.querySelector("[data-stack-counter]");
const prevButton = document.querySelector("[data-card-prev]");
const nextButton = document.querySelector("[data-card-next]");
const label = document.querySelector("#humor-label");
const title = document.querySelector("#humor-title");
const description = document.querySelector("#humor-description");

let currentHumor = "absurdo";
let currentIndex = 0;

function visibleCards(cards) {
  return [0, 1, 2].map((offset) => cards[(currentIndex + offset) % cards.length]);
}

function renderStack() {
  const data = humorData[currentHumor];
  const cards = visibleCards(data.comedians);

  label.textContent = data.label;
  title.textContent = `${data.label}: matches ficticios`;
  description.textContent = data.description;
  counter.textContent = `${currentIndex + 1} de ${data.comedians.length}`;

  stack.innerHTML = cards.map((comedian, index) => `
    <a class="comedian-card card-position-${index}" href="index.html#lista-espera">
      <span class="placeholder-pill">Nombre ficticio</span>
      <strong>${comedian.name}</strong>
      <span>${comedian.text}</span>
      <em>${comedian.match} match</em>
      <b>${comedian.badge}</b>
    </a>
  `).join("");
}

function moveCard(direction) {
  const total = humorData[currentHumor].comedians.length;
  currentIndex = (currentIndex + direction + total) % total;
  renderStack();
}

humorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentHumor = button.dataset.humor;
    currentIndex = 0;
    humorButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderStack();
  });
});

prevButton.addEventListener("click", () => moveCard(-1));
nextButton.addEventListener("click", () => moveCard(1));

renderStack();
