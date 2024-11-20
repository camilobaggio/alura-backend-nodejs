import { MongoClient} from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;
    
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectado ao cluester do banco de dados");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB com sucesso");


        return mongoClient;
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados", error);
        process.exit();
    }
}