const {conn} = require('../db');
async function up(){
  const db = await conn();
  await db.run(`
  CREATE TABLE IF NOT EXISTS media(
    id INTEGER PRIMARY KEY AUTOINCREMENT
    valor1 REAL,
    valor2 REAL,
    resultado REAL
  )
  `)
}
async function down () {
  const db =  await conn();
  await db.run ('DROP TABLE media');
}
module.exports = {up,down}