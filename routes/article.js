const express = require('express');
const router = express.Router();

//import database
const connection = require('../library/database');

/** TAMPIL ARTIKEL UTAMA */
router.get('/', (req, res, next) => {
    //query
    connection.query('SELECT id_article, title_article, content_article, created_at FROM article ORDER BY id_article desc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            req.render('article', {
                data: ''
            });
        } else {
            //render ke view article index
            res.render('article/index', {
                data: rows //data article
            });
        }
    });
});

/** TAMBAH ARTIKEL */
router.get('/create', (req, res, next) => {
    res.render('article/create', {
        title_article: '',
        content_article: ''
    })
})

/** SIMPAN ARTIKEL / STORE ARTIKEL */
router.post('/store', (req, res, next) => {
    let title_article = req.body.title_article;
    let content_article = req.body.content_article;
    const currentDate = new Date; //Mendapatkan Tanggal dan waktu
    let created_at = currentDate;
    let updated_at = currentDate;

    let errors = false;

    if(title_article.length === 0) {
        errors = true;
        //set flash message
        req.flash('error', 'Silahkan masukkan judul');
        //render to add.ejs with flash message
        res.render('article/create', {
            title_article: title_article,
            content_article: content_article,
            created_at: created_at,
            updated_at: updated_at
        })
    }

    if(content_article.length === 0) {
        errors = true;
        //set flash message
        req.flash('error', 'Silahkan masukkan konten/isi');
        //render to add.ejs with flash message
        res.render('article/create', {
            title_article: title_article,
            content_article: content_article,
            created_at: created_at,
            updated_at: updated_at
        })
    }

    //if no error
    if(!errors){
        let formData = {
            title_article: title_article,
            content_article: content_article,
            created_at: created_at,
            updated_at: updated_at
        }

        //Insert Query
        connection.query('INSERT INTO article SET ?', formData, (err, result) => {
            //if(err) throw err
            if(err){
                req.flash('error', err)

                //render to add.ejs
                res.render('article/create', {
                    title_article: formData.title_article,
                    content_article: formData.content_article,
                    created_at: formData.created_at,
                    updated_at: formData.updated_at
                })
            } else {
                req.flash('success', 'Artikel telah disimpan.');
                res.redirect('/article');
            }
        })
    }
})

/** UBAH ARTIKEL */
router.get('/edit/(:id)', (req, res, next) => {
    const id = req.params.id

    connection.query('SELECT * FROM article WHERE id_article=' + id, (err, rows, fields) => {
        if(err) throw err

        //if aticle not found
        if(rows.length <= 0){
            req.flash('error', 'Artikel dengan ID <b>' + id + '</b> Tidak ditemukan.')
            res.redirect('/article')
        } else { //if article found
            //render to edit.ejs
            res.render('article/edit', {
                id: rows[0].id_article,
                title:  rows[0].title_article,
                content:  rows[0].content_article
            })
        }
    })
})

/** SIMPAN UBAH ARTIKEL */
router.post('/update/(:id)', (req, res, next) => {
    const id_article = req.params.id;
    let title_article = req.body.title;
    let content_article = req.body.content;
    let updated_at = new Date; //Mendapatkan Tanggal dan waktu
    
    let errors = false;

    if(title_article.length === 0) {
        errors = true;

        //set flash message
        req.flash('error', 'Silahkan masukkan judul')
        //render to edit.ejs with flash message
        res.render('article/edit', {
            id: req.params.id,
            title: title_article,
            content: content_article
        })
    }

    if(content_article.length === 0) {
        errors = true;

        //set flash message
        req.flash('error', 'Silahkan masukkan konten/isi')
        //render to edit.ejs with flash message
        res.render('article/edit', {
            id: req.params.id,
            title: title_article,
            content: content_article
        })
    }

    //if no error
    if(!errors) {
        let formData = {
            title_article: title_article,
            content_article: content_article,
            updated_at: updated_at
        }

        //update query
        connection.query('UPDATE article SET ? WHERE id_article=' + id_article, formData, (err, result) => {
            //if(err) throw err
            if(err) {
                //set flash message
                req.flash('error', err)
                //render to edit.ejs
                res.render('article/edit', {
                    id: req.params.id,
                    title: formData.title_article,
                    content: formData.content_article
                })
            } else {
                req.flash('success', 'Artikel telah diubah.');
                res.redirect('/article');
            }
        })
    }
})

/** HAPUS ARTIKEL */
router.get('/delete/(:id)', (req, res, next) => {
    const id_article = req.params.id;

    connection.query('DELETE FROM article WHERE id_article=' + id_article, (err, result) => {
        //if(err) throw err
        if(err) {
            //set flash message
            req.flash('error', err)
            //redirect to article page
            res.redirect('/article')
        } else {
            //set flash message
            req.flash('success', 'Artikel telah dihapus.')
            //redirect to article page
            res.redirect('/article')
        }
    })
})

module.exports = router;