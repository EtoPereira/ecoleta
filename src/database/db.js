//importar a dependencia do sqlite3

//comando para rodar banco de dados: node src/database/db.js

const sqlite3 = require('sqlite3').verbose(); //torna verboso, mostra mais mensagens relacionadas a constante

const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// db.serialize(() => {
//     //criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             city TEXT,
//             state TEXT,
//             items TEXT
//         );
//     `) //template strings

// //     //inserir dados
// //     const query = `
// //     INSERT INTO places (
// //         name,
// //         image,
// //         adress,
// //         adress2,
// //         city,
// //         state,
// //         items
// //     ) VALUES (?, ?, ?, ?, ?, ?, ?);`;

// //     const values = [
// //         "Coletoria",
// //         "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80s",
// //         "Guilherme Gembala, Jardim America",
// //         "Número 260",
// //         "Rio do Sul",
// //         "Santa Catarina",
// //         "Resíduos Eletrônicos, Lâmpadas"
// //     ];
// //     function afterInsertData(error) {
// //         if (error) {
// //             return console.log(error)
// //         }
// //         console.log("Cadastrado com sucesso");
// //         console.log(this);
// //     }
// //     // db.run(query, values, afterInsertData)

// //     //consultar dados

// //     db.all(`SELECT * FROM places`, function(error, rows) {
// //         if(error) {
// //             return console.log(error);
// //         }
// //         console.log("Aqui estão seus registros");
// //         console.log(rows);        
// //     })


    //deletar dados
    // db.run(`DELETE FROM places WHERE id = ?`, [1, 2, 3, 4, 5], function(error){
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log('Registro deletado com sucesso');
        
    // })

    // db.run(`DELETE FROM places WHERE id = ?`, [], function(error){
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log('Registro deletado com sucesso');
        
    // })
// })

