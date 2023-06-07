const express = require('express');
const app = express();
const port = 3030;

//Import body parser
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json())

//Import routes articleAPI
const articleRouter = require('../articleAPI');

app.use('/api/article', articleRouter);

/** ALTERNATIF PORT ACAK */
// Mengatur port menjadi 0 (port dinamis)
// app.set('port', process.env.PORT || 0);

// Menjalankan server pada port yang tersedia secara dinamis
// const server = app.listen(app.get('port'), () => {
//   const port = server.address().port;
//   console.log(`Server berjalan pada port ${port}`);
// });
/** --ALTERNATIF PORT ACAK-- */

app.listen(port, () => {
    console.log(`Restful API berjalan di : http://localhost:${port}`);
});