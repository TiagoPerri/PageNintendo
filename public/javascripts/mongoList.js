
const MongoClient = require('mongodb').MongoClient;

module.exports = class MongoList{
     static async find(){
          const conn = await MongoClient.connect('mongodb://localhost:27017/nintendo'); // nintendo = banco de dados
          const db = conn.db();
          return await db.collection('posts').find().toArray();  // posts = tabela
    }
}
