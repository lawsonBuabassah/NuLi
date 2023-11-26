const express = require('express');
const bodyParser = require('body-parser');

const GPTServices = require('../services/gpt.services');
const DalleServices = require('../services/generate.services');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());

module.exports = function (app) {
    app.get('/', function (req, res) {
        // Load admin view
        res.render('index');
    });
    app.post('/gpt', urlencodedParser, async function (req, res) {
        console.log("GPT accessed");

    const prompt = req.body.about;

    try {
        let gptResponse = await GPTServices.prompt(prompt);
        // console.log(gptResponse);

        res.send(gptResponse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    });
    app.post('/generate', urlencodedParser, async function (req, res) {
        console.log("Dalle accessed");
    
        const description = req.body.description;
    
        try {
            let dalleResponse = await DalleServices.fetchDalleImage(description);
            // console.log(dalleResponse);
    
            res.send(dalleResponse);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });
};