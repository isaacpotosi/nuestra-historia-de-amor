let paginas = [

    {
        titulo: "💌 Donde Todo Comenzó",
        imagen1: "imagenes/mensaje.png",
        texto: "Nuestro primer mensaje fue sencillo, pero tenía un sentimiento de por medio. Esa primera mirada en la universidad hizo que yo hiciera clic y, como dicen en la película de Hotel Transylvania, el clic solo se hace una vez en la vida 🥺✨"
    },
    {
        titulo: "🌹 Nuestra Primera Salida",
        video: "videos/cine.mp4",
        texto: "Ese día salí con nervios, queriendo que todo saliera bien. Hubo algunos inconvenientes que nos dieron risa, como la película en otro idioma 🎬😂. Todo eso hizo que fuera una noche increíble, llena de momentos únicos. Y si pudiera devolver el tiempo, no cambiaría nada… salir ese día contigo fue simplemente inolvidable 💖✨"
    },
    {
        titulo: "👨‍👧 Conociendo a tu Papá",
        imagen1: "imagenes/papa1.png",
        imagen2: "",
        video: "",
        texto: "Ese día fue realmente especial. Me presentaste a personas importantes para ti, y eso significó más de lo que imaginas ❤️. Estaba nervioso, pero quería ser parte de tu mundo; y cuando entendí el lugar que me estabas dando en tu vida, los nervios dejaron de importar. Solo quería estar ahí contigo, siendo yo mismo 🥰✨."
    },
    {
        titulo: "✈️ Nuestro Primer Viaje",
        imagen1: "imagenes/viaje1.png",
        texto: " Este viaje siempre quedará en mi memoria. Fue el primer viaje que realicé con alguien, y no pude haber tenido mejor compañía ✈️❤️. En ese momento me di cuenta de que mi familia ya no era de ocho, sino que ahora éramos doce 🥰✨ "
    },
    {
        titulo: "🏡 Tu Pueblito y tu Historia",
        imagen1: "imagenes/pueblo.png",
        imagen2: "",
        video: "",
        texto: "Conocí tu pueblito y a tu familia, y entendí de dónde nace la persona tan maravillosa que estaba comenzando a amar 🥰🌷."
    },
    {
        titulo: "💋 El Besito que lo Cambió Todo",
        imagen1: "imagenes/beso.png",
        texto: "Nuestro primer beso no es el de la imagen. Nuestro verdadero primer beso fue maravilloso, porque era algo que de verdad deseábamos los dos, y tal vez por eso se demoró en llegar. Fue especial, fue lindo… y el beso más increíble que haya dado antes 💋✨. No solo por el beso en sí, sino por todo el sentimiento que conllevaba ❤️🥰."
    },
    {
        titulo: "✨ Nuestra Tercera Cita",
        imagen1: "imagenes/cita.png",
        texto: "Es lo más loco que he hecho con alguien, y fue una noche increíble con una persona increíble ✨❤️. Cada momento fue especial, y entendí que cuando estás con la persona correcta, el tiempo simplemente se pasa volando ⏳🥰."
    },
    {
        titulo: "💃 El Paseo con tus Amigas",
        video: "videos/paseo.mp4",
        texto: "El día del paseo no fue un simple plan, fue el momento en que me presentaste a tus amigas ❤️. Estaba nervioso por conocerlas y causarles una buena impresión, pero al mismo tiempo me sentía muy feliz. En el fondo sabía que ya era parte de tu mundo… y ese día me hiciste sentir aún más dentro de él, más cerca de ti 🥰✨."
    },
    {
        titulo: "🎬 Días de Película",
        video: "videos/pelicula.mp4",
        texto: "Aunque casi nunca te dejo concentrarte en la película 🙈🎬, me hace muy feliz compartir esos momentos contigo. Porque más que la historia en la pantalla, lo que realmente disfruto es estar a tu lado 🥰❤️."
    },
        {
        titulo: "🎬 viaje del 12 de febrero",
        imagen1: "imagenes/viaje2.png",
        texto:"El mejor día de nuestras vidas fue un día en el que pasaron muchas cosas hermosas ❤️. Recorrimos pueblitos llenos de encanto, compartimos papitas con salsa entre risas, contemplamos la pinera y paisajes que solo había visto en cuadros 🌄. Llegamos a un glamping con vistas espectaculares, miramos las estrellas juntos ✨🌙 y simplemente la pasamos demasiado bien. Esa noche entendí que la magia no estaba en el lugar, sino en estar contigo, viviendo cada instante como si el mundo fuera solo nuestro 🥰💕."    },
        {
        titulo: "pedida de novio",
        imagen1: "imagenes/novia.png",
        texto: "Ese día estaba lleno de nervios, aunque en el fondo ya sabía cuál sería tu respuesta 💖. Aun así, quería que cada detalle saliera perfecto, porque no era una pregunta cualquiera… era el comienzo de algo más grande para nosotros. Y gracias a Dios, todo salió como lo soñé ✨🙏❤️. "
    },

    {
        titulo: "💍👨‍👩‍👦 Nuestra Historia Continúa",
        imagen1: "imagenes/futuro.png",
        imagen2: "",
        video: "",
        texto: "Gracias por cada momento. Quiero seguir escribiendo esta historia contigo."
    }

];


let indice = 0;

function entrar() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("libro").style.display = "flex";
    mostrarPagina();
}

function rechazar() {
    document.getElementById("mensajeNo").style.display = "block";
}

function volver() {
    document.getElementById("mensajeNo").style.display = "none";
}

function mostrarPagina() {

    const pagina = paginas[indice];

    const img1 = document.getElementById("imagen1");
    const img2 = document.getElementById("imagen2");
    const video = document.getElementById("video");
    const videoSource = document.getElementById("videoSource");

    document.getElementById("titulo").innerText = pagina.titulo;
    document.getElementById("texto").innerText = pagina.texto;

    // RESET
    img1.style.display = "none";
    img2.style.display = "none";

    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    videoSource.src = "";
    video.load();

    // IMAGEN 1
    if (pagina.imagen1 && pagina.imagen1.trim() !== "") {
        img1.src = pagina.imagen1;
        img1.style.display = "block";
    }

    // IMAGEN 2
    if (pagina.imagen2 && pagina.imagen2.trim() !== "") {
        img2.src = pagina.imagen2;
        img2.style.display = "block";
    }

    // VIDEO
    if (pagina.video && pagina.video.trim() !== "") {
        videoSource.src = pagina.video;
        video.load();
        video.style.display = "block";
    }
}

function siguiente() {
    if (indice < paginas.length - 1) {
        indice++;
        mostrarPagina();
    }
}

function anterior() {
    if (indice > 0) {
        indice--;
        mostrarPagina();
    }
}