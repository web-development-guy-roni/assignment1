// Guy-Rozenbaum-214424814-Roni-Taktook-213207640
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const appPromise = new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            const app = express();
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));

            app.use('/post', require('./routes/post_routes'));
            app.use('/comment', require('./routes/comment_routes'));

            resolve(app);
        })
        .catch(err => reject(err));
});

module.exports = appPromise;