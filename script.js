let debounceTimeout; // Variabile per il timeout

// Aggiungi l'evento 'input' invece dell'evento 'click' per il bottone
document.getElementById("user-text").addEventListener("input", function() {
    clearTimeout(debounceTimeout);  // Resetta il timeout se l'utente sta scrivendo velocemente
    debounceTimeout = setTimeout(async function() {
        const userText = document.getElementById("user-text").value.trim();
        if (userText) {
            await generateMusicGenres(userText);  // Chiamerà la funzione solo dopo che l'utente ha finito di digitare
        }
    }, 300);  // Tempo di attesa di 300ms dopo l'ultimo input
});