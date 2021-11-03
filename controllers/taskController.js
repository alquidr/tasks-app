const axios = require('axios');
require('dotenv').config()
const { Task } = require('../models/taskModel');
let tittleUrl = process.env.TITTLE_URL

async function generateTask (numberOfTasks) {
    try {
        let requestUrl = `${tittleUrl}/api?quantity=${numberOfTasks}`
        const resp = await axios.get(requestUrl);
        let tasksTittles = resp.data;

        for (const tittle of tasksTittles) {
            let task = new Task ({
                state: 'TODO',
                tittle: tittle,
                creationDate: new Date()
            });
            task.save().then((doc) => {
            }, (e) => {
                return (e);
            });
        }
        return "Tasks created successfully."
    } catch (err) {
        return(err);
    }
}

exports.generateTask = generateTask