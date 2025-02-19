document.getElementById("generate-button").addEventListener("click", async function() {

    const userText = document.getElementById("user-text").value.trim();

    const generatedTextElement = document.getElementById("generated-text");

    const musicGenreElement = document.getElementById("music-genre");

    const fusionGenreElement = document.getElementById("fusion-genre");

    if (!userText) {

        alert("Per favore, inserisci un testo!");

        return;

    }

    // Mostra il testo inserito

    generatedTextElement.innerText = userText;

    // Generiamo i generi musicali da associare al testo

    const musicGenres = await generateMusicGenres(userText);

    

    // Mostriamo i generi musicali

    musicGenreElement.innerText = musicGenres.join(", ");

    // Generiamo la fusione dei generi

    const fusionGenre = await generateFusionGenre(musicGenres);

    

    // Mostriamo la fusione dei generi

    fusionGenreElement.innerText = fusionGenre;

});

// Lista di generi musicali con sottogeneri

const genres = {

    "Classica": ["Barocco", "Romantica", "Contemporanea", "Neoclassica", "Minimalismo"],

    "Jazz": ["Be-Bop", "Cool Jazz", "Fusion", "Swing", "Smooth Jazz", "Free Jazz"],

    "Rock": ["Hard Rock", "Punk", "Grunge", "Indie", "Progressive Rock", "Alternative Rock", "Post-Rock"],

    "Pop": ["Synth Pop", "Indie Pop", "Dance Pop", "K-pop", "J-pop"],

    "Blues": ["Chicago Blues", "Delta Blues", "Rhythm and Blues", "Blues Rock"],

    "Hip-Hop": ["Trap", "Old School", "Lo-Fi", "Conscious Hip-Hop", "Alternative Hip-Hop"],

    "Electronic": ["House", "Techno", "Trance", "Dubstep", "Drum and Bass", "Ambient", "Electropop"],

    "Reggae": ["Roots Reggae", "Dancehall", "Dub", "Ska", "Rocksteady"],

    "Country": ["Classic Country", "Country Pop", "Bluegrass", "Outlaw Country", "Honky-Tonk"],

    "Folk": ["Traditional Folk", "Indie Folk", "Folk Rock", "Freak Folk"],

    "R&B": ["Soul", "Neo-Soul", "Contemporary R&B", "Funk"],

    "Latin": ["Salsa", "Bachata", "Reggaeton", "Merengue", "Tango", "Cumbia", "Flamenco"],

    "Trap": ["Mumble Rap", "Cloud Rap", "Drill", "Trap Soul"],

    "Rap": ["Old School Rap", "Conscious Rap", "Gangsta Rap", "Alternative Rap"],

    "Afro": ["Afrobeat", "Afro House", "Afro Pop", "Afro Funk", "Highlife"]

};

// Funzione per generare generi musicali basati sul testo

async function generateMusicGenres(text) {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const selectedGenres = [];

    // Logica per associare generi al testo

    if (text.includes("montagne") || text.includes("oceano")) {

        selectedGenres.push("Classica", "Jazz");

    } else if (text.includes("città") || text.includes("strade")) {

        selectedGenres.push("Jazz", "Pop");

    } else if (text.includes("melodia")) {

        selectedGenres.push("Pop", "Blues");

    } else if (text.includes("soul") || text.includes("cuore")) {

        selectedGenres.push("R&B", "Soul");

    } else if (text.includes("rap") || text.includes("flow") || text.includes("barrato")) {

        selectedGenres.push("Hip-Hop", "Rap");

    } else if (text.includes("droga") || text.includes("strada") || text.includes("vita") || text.includes("gangsta")) {

        selectedGenres.push("Rap", "Trap");

    } else if (text.includes("danza") || text.includes("ritmo") || text.includes("africa")) {

        selectedGenres.push("Afro", "Afrobeat");

    } else {

        selectedGenres.push("Rock", "Electronic");

    }

    // Scegliamo sottogeneri per ogni genere selezionato

    const selectedSubGenres = selectedGenres.map(genre => {

        const subGenres = genres[genre];

        return subGenres[Math.floor(Math.random() * subGenres.length)];

    });

    return selectedSubGenres;

}

// Funzione per combinare generi in una fusione musicale

async function generateFusionGenre(genres) {

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Semplice fusione di generi

    if (genres.includes("Jazz") && genres.includes("Pop")) {

        return "Fusion Pop-Jazz";

    } else if (genres.includes("Classica") && genres.includes("Jazz")) {

        return "Classical Jazz Fusion";

    } else if (genres.includes("Rock") && genres.includes("Electronic")) {

        return "Electronic Rock Fusion";

    } else if (genres.includes("R&B") && genres.includes("Soul")) {

        return "R&B Soul Fusion";

    } else if (genres.includes("Rap") && genres.includes("Trap")) {

        return "Trap-Rap Fusion";

    } else if (genres.includes("Afro") && genres.includes("Pop")) {

        return "Afro Pop Fusion";

    } else {

        return "Fusione musicale unica";

    }

}