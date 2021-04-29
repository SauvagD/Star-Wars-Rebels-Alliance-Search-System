const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const got = require('got');
const path = require('path');
app.use(bodyParser.json());


// Get data from URLs
function getData(res, path) {
    (async () => {
        try {
            const response = await got(`http://swapi.dev/api${path}`);
            res.send(response.body)
        } catch (error) {
            console.log(error.response.body);
        }
    })();
}


// <------------------------------------- All the routes ------------------------------------->

// Character 
app.get('/people', async (req, res) => {
    try{
        let urlPart = req.path; 
        getData(res, urlPart);
    }catch(err){
        res.sendStatus(500).send(err);
    }
});
app.get('/people/:id', async (req, res) => {
    try{ 
        let urlPart = req.path;
        getData(res, urlPart);
    }catch(err){
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
// app.get('/people/:id/:format', async (req, res) => {
//     try {
//         let urlPart = req.path;
//         console.log(urlPart)
//         getData(res, urlPart);
//     } catch (err) {
//         console.log("urlPart")
//         res.sendStatus(500).send(err);
//     }
// });
app.get('/people/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});

// Films
app.get('/films', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});
app.get('/films/:id', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
app.get('/films/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});

// Planets
app.get('/planets', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});
app.get('/planets/:id', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
app.get('/planets/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});

// Species
app.get('/species', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});
app.get('/species/:id', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
app.get('/species/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});

// Starships
app.get('/starships', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});
app.get('/starships/:id', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
app.get('/starships/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});

// Vehicles
app.get('/vehicles', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});
app.get('/vehicles/:id', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});
app.get('/vehicles/schema', async (req, res) => {
    try {
        let urlPart = req.path;
        getData(res, urlPart);
    } catch (err) {
        console.log("urlPart")
        res.sendStatus(500).send(err);
    }
});


// Basics
app.listen(3001, () => {
    console.log("Le serveur a bien été lancé sur le port 3001");
});
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

