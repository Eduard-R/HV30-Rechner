function HV30(diagonale1 = 0, diagonale2 = 0) {
    var result_d = ((diagonale1 + diagonale2) / 140) / 2;

    return 0.1891 * (294.2 / Math.pow(result_d, 2));

}

function HVCalc() {
    const diagInput1 = document.getElementById('diag1');
    const diagInput2 = document.getElementById('diag2');

    appendTR(parseInt(diagInput1.value), parseInt(diagInput2.value));
    
    diagInput1.value = '';
    diagInput2.value = '';

    // saveToLocalStorage();
}

function appendTR(diag1 = 0, diag2 = 0) {
    // Neues Tabellenzeilen-Objekt erstellen
    const newTR = document.createElement("tr");

    // Neues Tabellenzellen-Objekt erstellen
    const idTd = document.createElement("td");
    const timeTd = document.createElement("td");
    const valueTd = document.createElement("td");

    timeTd.innerHTML = moment().format('DD.MM.YYYY - HH:mm:ss');
    valueTd.innerHTML = HV30(diag1, diag2);

    // Neue Tabellenzelle an Zeile "anhängen"
    newTR.appendChild(idTd);
    newTR.appendChild(timeTd);
    newTR.appendChild(valueTd);

    // Neue Zeile in Tabelle "einhängen"
    document.getElementById("tableData").appendChild(newTR);
}
