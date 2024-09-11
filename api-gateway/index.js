const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Für CORS-Unterstützung

const app = express();
const port = 3000;

app.use(cors()); // Erlaubt Anfragen von anderen Origins (z.B. Frontend)
app.use(express.json()); // Zum Parsen von JSON-Anfragen

// Mapping der Endpunkte zu den entsprechenden Microservices
const services = {
    add: 'http://localhost:3001/add',
    subtract: 'http://localhost:3002/subtract',
    multiply: 'http://localhost:3003/multiply',
    divide: 'http://localhost:3004/divide',
    power: 'http://localhost:3005/power',
    sqrt: 'http://localhost:3006/sqrt'
};

// Route, die Anfragen an den entsprechenden Microservice weiterleitet
app.post('/:operation', async (req, res) => {
    const { operation } = req.params;
    const serviceUrl = services[operation];

    if (!serviceUrl) {
        return res.status(400).json({ error: 'Invalid operation' });
    }

    try {
        // Weiterleiten der Anfrage an den entsprechenden Microservice
        const response = await axios.post(serviceUrl, req.body);

        // Erfolgreiche Antwort zurückgeben
        res.json(response.data);
    } catch (error) {
        console.error(`Error in API Gateway for operation ${operation}:`, error.message);

        // Unterscheide zwischen Fehlern vom Microservice und Netzwerkfehlern
        if (error.response) {
            // Der Microservice hat geantwortet, aber mit einem Fehlerstatuscode
            res.status(error.response.status).json({
                error: `Service responded with an error: ${error.response.statusText}`,
                details: error.response.data
            });
        } else if (error.request) {
            // Die Anfrage wurde gesendet, aber keine Antwort erhalten
            res.status(500).json({ error: 'No response received from the service' });
        } else {
            // Ein anderer Fehler ist aufgetreten
            res.status(500).json({ error: `An unknown error occurred: ${error.message}` });
        }
    }
});

// Starten des API-Gateways
app.listen(port, () => {
    console.log(`API-Gateway listening at http://localhost:${port}`);
});
