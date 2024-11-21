import conectarAoBanco from "../config/dbconfig.js";


// Conecta ao banco de dados usando a string de conexão definida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados
export  async function getTodosPosts() {
    // Acessa o banco de dados "Imersão-Alura"
    const db = conexao.db("Imersão-Alura");

    // Obtém a coleção "posts" do banco de dados
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção em forma de array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
     const db = conexao.db("Imersão-Alura");
     const colecao = db.collection("posts");
     return colecao.insertOne(novoPost);
}