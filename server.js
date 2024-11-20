// Importa o módulo Express para criar o servidor web
import express from 'express';

// Importa a função para conectar ao banco de dados
import conectarAoBanco from './src/config/dbconfig.js';

// Conecta ao banco de dados usando a string de conexão definida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Array estático de posts para simular dados no servidor
const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imgUrl: "https://placecats.com/millie/200/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imgUrl: "https://source.unsplash.com/random/200x150/?sunset,landscape"
    },
    {
        id: 3,
        descricao: "Cachorro fofo fazendo uma careta",
        imgUrl: "https://source.unsplash.com/random/200x150/?dog,funny"
    },
    {
        id: 4,
        descricao: "Comida deliciosa e colorida",
        imgUrl: "https://source.unsplash.com/random/200x150/?food,colorful"
    },
    {
        id: 5,
        descricao: "Cidade vibrante à noite",
        imgUrl: "https://source.unsplash.com/random/200x150/?city,night"
    },
    {
        id: 6,
        descricao: "Natureza exuberante em uma floresta",
        imgUrl: "https://source.unsplash.com/random/200x150/?forest,nature"
    }
];

// Cria uma instância da aplicação Express
const app = express();

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados
async function getTodosPosts() {
    // Acessa o banco de dados "Imersão-Alura"
    const db = conexao.db("Imersão-Alura");

    // Obtém a coleção "posts" do banco de dados
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção em forma de array
    return colecao.find().toArray();
}

