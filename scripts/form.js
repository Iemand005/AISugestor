// Ja me zet hier is iets wa moten de woen

document.getElementById("from");

document.querySelector("form").onsubmit = e=>{
    e.preventDefault();
    if(e.bubbles) console.log("Bubbles yo!");
    if(e.defaultPrevented) {
        hallo = "Zert d gaan we dhier die email laten sturen want we kannen niet schene over veilgheid of zo"
        // doe misschien json met een node backend die zo ja op json opstlaat das nie moeilijk heb das gemakkelijk das een hobb.
    }
};