let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_news_node'
});

connection.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connection Success / Koneksi Sukses');
    }
})

module.exports = connection;