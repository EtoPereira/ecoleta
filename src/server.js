const express = require('express');

const api = express();

const nunjucks = require('nunjucks');

const db = require('./database/db.js');

//habilitar o uso do require.body na aplicação
api.use(express.urlencoded({ extended: true }));

api.use(express.static('public'));

nunjucks.configure("src/views", {
    express: api,
    noCache: true
})


api.get("/", (require, response) => {
    return response.render('index.html', { title: "Um título" })
})

api.get("/create-point", (require, response) => {
    // require.query();//QueryStrings da URL
    console.log(require.query);

    return response.render('create-point.html', {saved: true})
})

api.post("/savepoint", (require, response) => {
    const query = `
    INSERT INTO places (
        name,
        image,
        address,
        address2,
        city,
        state,
        items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);`;

    const values = [
        require.body.name,
        require.body.image,
        require.body.address,
        require.body.address2,
        require.body.city,
        require.body.state,
        require.body.items,
    ];

    console.log(require.body);



    function afterInsertData(error) {
        if (error) {
            return console.log(error)
        }
        console.log("Cadastrado com sucesso");
        console.log(this);

        return response.render('create-point.html', {saved: true})

    }
    db.run(query, values, afterInsertData)

})

api.get("/search", (require, response) => {

    const search = require.query.search;

    console.log(search);
    

    if(search == "") {
        return response.render('search-results.html', {total: 0})
    }
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (error, rows) {
        if (error) {
            return console.log(error);
        }
        const total = rows.length;
        return response.render('search-results.html', { places: rows, total })
    })

})

api.listen(3000);