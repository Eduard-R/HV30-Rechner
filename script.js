function HV30(diagonale1, diagonale2) {
    var result_d = ((diagonale1 + diagonale2) / 140) / 2;

    return 0.1891 * (294.2 / Math.pow(result_d, 2));

}

function HVCalc() {

    var diag1 = document.getElementById('diag1').value;
    var diag2 = document.getElementById('diag2').value;
    var result = document.getElementById('result-area');

    result.value = HV30(parseInt(diag1), parseInt(diag2));


}

function appendTR() {

    // Neues Tabellenzeilen-Objekt erstellen
    var newTR = document.createElement("tr");



    // Neues Tabellenzellen-Objekt erstellen
    var newTD = document.createElement("td");

    // HTML einfügen
    newTD.innerHTML = "tableData";
    // Neue Tabellenzelle an Zeile "anhängen"
    newTR.appendChild(newTD);
    
    

    // Neue Zeile in Tabelle "einhängen"
    document.getElementById("tableData").appendChild(newTR);
    
}


