const{conn} = require('../db');
async function create(data){
  const sql = `INSERT INTO media (valor1,valor2,resultado) VALUES (?,?,?)`;
  const {valor1,valor2,resultado} = data;
  const db = await conn();
  const resultado2 = await db.run(sql,[valor1,valor2,resultado])
  return resultado2
}
async function view(){
  const sql = `SELECT * FROM media`;
  const db = await conn();
  const resultado = await db.all(sql);
  return resultado;
}
module.exports = {create,view}