const express = require('express')
const moment = require('moment')
const router = express.Router()

//Import library
const { body, validationResult } = require('express-validator');

//Import database
const connection = require('../library/database');

/** TAMPIL ARTIKEL UTAMA */
router.get('/', (req, res) => {
    connection.query('SELECT id_article, title_article, content_article, created_at FROM article ORDER BY id_article desc', (err, rows) => {
        if(err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error'
            })
        } else {
            const formattedRows = rows.map(row => ({
                id: row.id_article,
                title: row.title_article,
                content: row.content_article,
                // created_at: new Date(row.created_at).toLocaleString('id')
                created_at: moment(row.created_at).format('DD-MM-YYYY HH:mm:ss')
            }));

            return res.status(200).json({
                status: true,
                message: 'List data article',
                data: formattedRows
            })
        }
    })
});

/** STORE/SIMPAN ARTIKEL */
router.post('/store', [
    //Validation
    body('title').notEmpty(),
    body('content').notEmpty()
], (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //Define formData
    let formData = {
        title_article: req.body.title,
        content_article: req.body.content,
        created_at: new Date, //Mendapatkan Tanggal dan waktu
        updated_at: new Date //Mendapatkan Tanggal dan waktu
    }

    //Insert Query
    connection.query('INSERT INTO article SET ?', formData, (err, rows) => {
        //if(err) throw err
        if(err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error'
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Article Successfully',
                data: rows[0]
            })
        }
    })
});

/** TAMPIL DETAIL ARTIKEL */
router.get('/(:id)', (req, res) => {
    const id = req.params.id;

    connection.query(`SELECT id_article, title_article, content_article, created_at FROM article WHERE id_article = ${id}`, (err, rows) => {
        if(err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        }

        //If article not found
        if(rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Article Not Found!'
            })
        } else {
            const formattedRows = rows.map(row => ({
                id: row.id_article,
                title: row.title_article,
                content: row.content_article,
                created_at: row.created_at,
                updated_at: row.updated_at
            }));

            return res.status(200).json({
                status: true,
                message: 'Detail Articel',
                data: formattedRows
            })
        }
    })
});

/** UBAH ARTIKEL */
router.patch('/update/(:id)', (req, res) => {
    //Validation
});

module.exports = router;