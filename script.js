function ButtonClick(imgElement) {
    console.log("Bild wurde geklickt:", imgElement.src); // Debugging

    // Nur den Dateinamen aus der kompletten URL extrahieren
    let filename = imgElement.src.split("/").pop(); 
    console.log("Dateiname erkannt:", filename); // Debugging

    if (filename === "d641fc16ea20dc61041c35cc4007259b.png") {
        imgElement.src = "Memoriehahahahha.png";
    } else {
        imgElement.src = "d641fc16ea20dc61041c35cc4007259b.png";
    }

    console.log("Neues Bild:", imgElement.src); // Debugging
}
