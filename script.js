const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqewbdd";

const translations = {
  es: {
    documentTitle: "LatePunch | Cómicos para eventos privados",
    description: "LatePunch conecta clientes con cómicos de stand-up para eventos privados. Apúntate a la lista de espera.",
    headerAria: "Navegación principal",
    brandAria: "LatePunch inicio",
    navAria: "Secciones",
    languageAria: "Selector de idioma",
    menuAria: "Abrir menú",
    navHow: "Cómo funciona",
    navComedians: "Para cómicos",
    navCta: "Apúntate",
    menu: "Menú",
    heroEyebrow: "Lista de espera abierta",
    heroTitle: "LatePunch encuentra al cómico perfecto para tu evento. Aunque parezca imposible.",
    heroCopy: "La primera plataforma que conecta clientes con cómicos de stand-up para eventos privados. Por estilo, por tono, por humor. No por pura disponibilidad.",
    heroClientCta: "Quiero contratar un cómico",
    heroComedianCta: "Soy cómico y quiero bolos",
    heroMicro: "Sin compromiso. Te avisamos cuando lancemos.",
    problemEyebrow: "El gap",
    problemTitle: "Contratar un cómico para un evento privado sigue siendo raro. Demasiado raro.",
    problemCopy: "Si quieres contratar un DJ, hay diez plataformas. Un fotógrafo, igual. Un cómico de stand-up para una cena de empresa, un cumpleaños o una despedida: nadie sabe por dónde empezar.",
    statsAria: "Datos del mercado",
    statOne: "plataformas especializadas en comedia privada",
    statTwo: "euros como precio estándar confirmado por profesionales activos",
    statThree: "búsquedas sin respuesta útil",
    featuresEyebrow: "La plataforma",
    featuresTitle: "Descubrimiento por estilo. Contratación con garantías.",
    featureOneTitle: "Matching por humor",
    featureOneCopy: "Absurdo, observacional, provocador, familiar o negro. Cada cómico tiene su voz; cada evento, su audiencia.",
    featureTwoTitle: "Clips reales",
    featureTwoCopy: "Ves al cómico en acción antes de contratar. Nada de bios genéricas con sonrisas sospechosas.",
    featureThreeTitle: "Sin fricción",
    featureThreeCopy: "Precio claro, confirmación directa y contrato incluido. Menos llamadas frías, más bolo cerrado.",
    featureFourTitle: "Eventos privados",
    featureFourCopy: "Cumpleaños, empresas, despedidas y aniversarios. Humor ajustado al contexto, no al azar.",
    humanEyebrow: "0 IA en el escenario",
    humanTitle: "La gracia sigue siendo humana.",
    humanCopy: "En LatePunch valoramos cómicos de verdad: criterio, oficio, timing y presencia. La IA puede ordenar cosas; hacer reír a tu audiencia sigue siendo otro deporte.",
    stepsEyebrow: "Cómo funciona",
    stepsTitle: "De “¿dónde encuentro un cómico?” a reservado en minutos.",
    stepOneTitle: "Cuéntanos tu evento",
    stepOneCopy: "Tipo, fecha, grupo y tono que buscas. Cuanto más contexto, mejor el match.",
    stepTwoTitle: "Descubre por estilo",
    stepTwoCopy: "Filtra por humor, experiencia y disponibilidad. Ve clips reales actuando.",
    stepThreeTitle: "Elige y reserva",
    stepThreeCopy: "Precio claro y contratación directa. Sin intermediarios innecesarios.",
    stepFourTitle: "El evento",
    stepFourCopy: "El cómico llega preparado. Tu evento tiene un momento que se recuerda.",
    mvpBadge: "Mientras construimos la plataforma",
    mvpTitle: "¿Tienes un evento próximo? Lo gestionamos nosotros.",
    mvpCopy: "LatePunch está en desarrollo. Si tienes un evento próximo, podemos ayudarte a mano. Y si no es inminente pero piensas: “necesito un cómico, esta plataforma me iría muy bien”, apúntate y te avisamos cuando lancemos.",
    mvpCta: "Me iría bien LatePunch",
    waitlistEyebrow: "Lista de espera",
    waitlistTitle: "Apúntate. Te avisamos cuando lancemos.",
    waitlistCopy: "Y te mantenemos al día del proceso. Sin spam. Sin venderte humo con PowerPoint.",
    leadToggleAria: "Tipo de registro",
    clientToggle: "Quiero contratar",
    comedianToggle: "Soy cómico",
    nameLabel: "Nombre",
    stageNameLabel: "Nombre artístico",
    emailLabel: "Email *",
    eventTypeLabel: "Tipo de evento",
    eventBirthday: "Cumpleaños",
    eventCompanyDinner: "Cena de empresa",
    eventBachelor: "Despedida",
    eventAnniversary: "Aniversario",
    eventCorporate: "Evento corporativo",
    eventOther: "Otro",
    cityLabel: "Ciudad donde actúas",
    experienceLabel: "Experiencia en privados",
    experienceRegular: "Hago bolos privados regularmente",
    experienceSome: "Alguna experiencia",
    experienceInterested: "Sin experiencia en privados pero me interesa",
    clipLabel: "Link a clip o redes",
    submitClient: "Apuntarme",
    submitComedian: "Quiero bolos",
    sending: "Enviando...",
    invalidEmail: "Pon un email válido y seguimos.",
    success: "Apuntado. Te avisamos.",
    submitError: "No se ha podido enviar. Prueba otra vez en un momento.",
    comediansEyebrow: "Para cómicos",
    comediansTitle: "Nuevos bolos, sin depender de tu red actual.",
    comediansCopy: "Si eres cómico con experiencia en eventos privados, queremos trabajar contigo. Clientes que te eligen porque quieren tu humor específicamente, no porque eras el único libre ese día.",
    comediansCta: "Apúntame como cómico",
    footerBuild: "En construcción · 2026",
    footerLine: "Nadie debería buscar un cómico en Google.",
  },
  en: {
    documentTitle: "LatePunch | Comedians for private events",
    description: "LatePunch connects clients with stand-up comedians for private events. Join the waitlist.",
    headerAria: "Main navigation",
    brandAria: "LatePunch home",
    navAria: "Sections",
    languageAria: "Language selector",
    menuAria: "Open menu",
    navHow: "How it works",
    navComedians: "For comedians",
    navCta: "Join",
    menu: "Menu",
    heroEyebrow: "Waitlist open",
    heroTitle: "LatePunch finds the right comedian for your event. Even when that feels impossible.",
    heroCopy: "The first platform connecting clients with stand-up comedians for private events. By style, by tone, by sense of humor. Not just by availability.",
    heroClientCta: "I want to book a comedian",
    heroComedianCta: "I’m a comedian and want gigs",
    heroMicro: "No commitment. We’ll let you know when we launch.",
    problemEyebrow: "The gap",
    problemTitle: "Booking a comedian for a private event is still weird. Too weird.",
    problemCopy: "If you want to book a DJ, there are ten platforms. A photographer, same thing. A stand-up comedian for a company dinner, birthday or bachelor party? Nobody knows where to start.",
    statsAria: "Market data",
    statOne: "specialized platforms for private comedy",
    statTwo: "euros as a standard price confirmed by active professionals",
    statThree: "searches with no useful answer",
    featuresEyebrow: "The platform",
    featuresTitle: "Discovery by style. Booking with confidence.",
    featureOneTitle: "Humor matching",
    featureOneCopy: "Absurd, observational, provocative, family-friendly or dark. Every comedian has a voice; every event has an audience.",
    featureTwoTitle: "Real clips",
    featureTwoCopy: "See the comedian in action before booking. No generic bios with suspiciously polished smiles.",
    featureThreeTitle: "No friction",
    featureThreeCopy: "Clear pricing, direct confirmation and contract included. Fewer cold calls, more booked gigs.",
    featureFourTitle: "Private events",
    featureFourCopy: "Birthdays, company events, bachelor parties and anniversaries. Humor matched to the context, not left to chance.",
    humanEyebrow: "0 AI on stage",
    humanTitle: "The funny part is still human.",
    humanCopy: "At LatePunch, we value real comedians: judgement, craft, timing and presence. AI can organize things; making your audience laugh is still a different sport.",
    stepsEyebrow: "How it works",
    stepsTitle: "From “where do I find a comedian?” to booked in minutes.",
    stepOneTitle: "Tell us about your event",
    stepOneCopy: "Type, date, group size and the tone you want. The more context, the better the match.",
    stepTwoTitle: "Discover by style",
    stepTwoCopy: "Filter by humor, experience and availability. Watch real performance clips.",
    stepThreeTitle: "Choose and book",
    stepThreeCopy: "Clear pricing and direct booking. No unnecessary middlemen.",
    stepFourTitle: "The event",
    stepFourCopy: "The comedian arrives prepared. Your event gets a moment people remember.",
    mvpBadge: "While we build the platform",
    mvpTitle: "Have an upcoming event? We’ll handle it manually.",
    mvpCopy: "LatePunch is still in development. If you have an upcoming event, we can help manually. And if it is not urgent but you’re thinking: “I need a comedian; this platform would be really useful”, join the waitlist and we’ll tell you when we launch.",
    mvpCta: "LatePunch would help me",
    waitlistEyebrow: "Waitlist",
    waitlistTitle: "Join the waitlist. We’ll tell you when we launch.",
    waitlistCopy: "We’ll keep you updated on the process. No spam. No PowerPoint smoke.",
    leadToggleAria: "Registration type",
    clientToggle: "I want to book",
    comedianToggle: "I’m a comedian",
    nameLabel: "Name",
    stageNameLabel: "Stage name",
    emailLabel: "Email *",
    eventTypeLabel: "Event type",
    eventBirthday: "Birthday",
    eventCompanyDinner: "Company dinner",
    eventBachelor: "Bachelor / bachelorette party",
    eventAnniversary: "Anniversary",
    eventCorporate: "Corporate event",
    eventOther: "Other",
    cityLabel: "City where you perform",
    experienceLabel: "Private-event experience",
    experienceRegular: "I regularly do private gigs",
    experienceSome: "Some experience",
    experienceInterested: "No private-event experience yet, but I’m interested",
    clipLabel: "Clip or social link",
    submitClient: "Join the waitlist",
    submitComedian: "I want gigs",
    sending: "Sending...",
    invalidEmail: "Add a valid email and we’ll keep going.",
    success: "You’re on the list. We’ll let you know.",
    submitError: "We couldn’t send it. Try again in a moment.",
    comediansEyebrow: "For comedians",
    comediansTitle: "New gigs, without relying only on your current network.",
    comediansCopy: "If you’re a comedian with private-event experience, we want to work with you. Clients choose you because they want your humor specifically, not because you were the only person free that day.",
    comediansCta: "Sign me up as a comedian",
    footerBuild: "In development · 2026",
    footerLine: "Nobody should have to search Google for a comedian.",
  },
};

const form = document.querySelector("#waitlist-form");
const leadInput = document.querySelector("#lead-type");
const languageInput = document.querySelector("#form-language");
const message = document.querySelector("#form-message");
const submitButton = document.querySelector(".submit-button");
const menuButton = document.querySelector(".menu-button");
const header = document.querySelector(".site-header");
const leadButtons = Array.from(document.querySelectorAll("[data-lead-type]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const clientFields = Array.from(document.querySelectorAll("[data-client-field]"));
const comedianFields = Array.from(document.querySelectorAll("[data-comedian-field]"));
let currentLanguage = "es";

function t(key) {
  return translations[currentLanguage][key];
}

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

function setLeadType(type) {
  const isComedian = type === "comedian";
  leadInput.value = type;
  leadButtons.forEach((button) => button.classList.toggle("active", button.dataset.leadType === type));
  clientFields.forEach((field) => field.classList.toggle("hidden", isComedian));
  comedianFields.forEach((field) => field.classList.toggle("hidden", !isComedian));
  submitButton.textContent = isComedian ? t("submitComedian") : t("submitClient");
  submitButton.dataset.i18n = isComedian ? "submitComedian" : "submitClient";
  setMessage("");
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t("documentTitle");
  document.querySelector('meta[name="description"]').setAttribute("content", t("description"));
  languageInput.value = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((binding) => {
      const [attribute, key] = binding.split(":");
      element.setAttribute(attribute, t(key));
    });
  });

  langButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
  setLeadType(leadInput.value);
}

leadButtons.forEach((button) => {
  button.addEventListener("click", () => setLeadType(button.dataset.leadType));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-lead-link]").forEach((link) => {
  link.addEventListener("click", () => setLeadType(link.dataset.leadLink));
});

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage("");

  const email = form.email;
  email.removeAttribute("aria-invalid");

  if (!email.value || !email.validity.valid) {
    email.setAttribute("aria-invalid", "true");
    setMessage(t("invalidEmail"), "error");
    email.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = t("sending");

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the submission");
    }

    const submittedLeadType = leadInput.value;
    form.reset();
    applyLanguage(currentLanguage);
    setLeadType(submittedLeadType);
    form.classList.add("hidden");
    setMessage(t("success"), "success");
  } catch (error) {
    setMessage(t("submitError"), "error");
    submitButton.disabled = false;
    submitButton.textContent = leadInput.value === "comedian" ? t("submitComedian") : t("submitClient");
  }
});

applyLanguage("es");

