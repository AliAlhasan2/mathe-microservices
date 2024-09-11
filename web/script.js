function calculate(operation) {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    if (isNaN(value1)) {
        alert("Bitte geben Sie eine gültige erste Zahl ein.");
        return;
    }

    let data = { a: value1 };
    if (operation !== 'sqrt' && !isNaN(value2)) {
        data.b = value2;
    }

    fetch(`http://localhost:3000/${operation}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            // Überprüfe, ob die Antwort erfolgreich ist
            if (!response.ok) {
                // Detaillierte Fehlermeldung, die den Statuscode einschließt
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(result => {
            // Ausgabe des Ergebnisses in der Konsole
            console.log('Success:', result);
        })
        .catch(error => {
            // Detaillierte Fehlermeldung ausgeben
            console.error('There was a problem with the fetch operation:', error.message);
        });


}
