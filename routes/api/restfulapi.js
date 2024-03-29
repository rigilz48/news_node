const express = require('express');
const app = express();
const port = 3030;

//Import
const articleRouter = require('../articleAPI');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use('/api/article', articleRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json())

//use CORS
app.use(cors())

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