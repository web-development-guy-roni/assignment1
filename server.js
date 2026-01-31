// Guy-Rozenbaum-214424814-Roni-Taktook-213207640
const appPromise = require('./app');
const port = process.env.PORT || 3000;

appPromise.then(app => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
});