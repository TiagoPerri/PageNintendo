// adiciona a conexão mongoDb
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nintendo', (err,conn) =>
{
	if(err) throw err;
		const db = conn.db() // aqui o JS já está "interligado com o DB mongo)
		console.log('conexao db estabelecida.');
		
		//exemplo de inserção no mongo usando JS, onde posts é a tabela
			// db.collection('posts').insertOne(
			// {
				// nome: 'Leo', idade: 19}
			// );
			// conn.close();
			
		//exemplo de retornar dados do mongo da tabela posts
			db.collection('posts').find().toArray().then((res)=>{
			//if (err) throw err; não preciso disso porque usei o then
				console.log(res);
				conn.close();
			});
});