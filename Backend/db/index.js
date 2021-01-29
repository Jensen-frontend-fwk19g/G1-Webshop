const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db/products.json');
const db = low(adapter);

module.exports = { db };