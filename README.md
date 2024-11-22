# Gerenciador de Posts com Upload de Imagens e Geração de Descrições com IA

Este é um backend em **Node.js** para gerenciar posts com upload de imagens. Ele utiliza inteligência artificial para gerar descrições automáticas de imagens, com integração ao Google Gemini e armazenamento no MongoDB.

## 🌟 Funcionalidades

- **Listar Posts**: Exibe todos os posts armazenados no banco de dados.
- **Criar Post**: Adiciona um novo post com informações básicas.
- **Upload de Imagens**: Faz o upload de imagens e as associa aos posts.
- **Geração de Descrição com IA**: Utiliza o Google Gemini para criar descrições automáticas para as imagens enviadas.
- **Atualizar Post**: Permite atualizar informações e a descrição das imagens.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criação de APIs REST.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos posts.
- **Multer**: Middleware para upload de arquivos.
- **Google Gemini**: API de inteligência artificial para geração de descrições.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## 📋 Como Configurar e Executar Localmente

### Pré-requisitos

1. **Node.js** instalado ([Baixar Node.js](https://nodejs.org/)).
2. **MongoDB** configurado e em execução.
3. Conta e chave de API configuradas para o Google Gemini.

### Passos

# 1. Clone este repositório:
   ```bash
   git clone git@github.com:camilobaggio/alura-backend-nodejs.git
   cd alura-backend-nodejs
   ```

# 2. Instale as dependências
```bash
npm install
```
# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto com as variáveis abaixo:
```bash
echo "STRING_CONEXAO=<SUA_STRING_DE_CONEXAO_DO_MONGODB>" > .env
echo "GEMINI_API_KEY=<SUA_CHAVE_DE_API_DO_GOOGLE_GEMINI>" >> .env
```
# 4. Inicie o servidor
```bash
npm start
```
# 5. Acesse o backend no endereço: http://localhost:3000

# 🔗 Endpoints da API
# GET /posts
Descrição: Retorna todos os posts do banco de dados.
Método: GET
Exemplo de resposta:
```bash
[
  {
    "_id": "64b1f0dc2e4b8f001c5f1234",
    "descricao": "Descrição automática gerada",
    "imgUrl": "http://localhost:3000/uploads/imagem.png",
    "alt": "Descrição alternativa"
  }
]
```
# POST /posts
Descrição: Cria um novo post.
Método: POST
Corpo da requisição:
```bash
{
  "descricao": "Descrição do post",
  "alt": "Texto alternativo"
}
```
# POST /upload
Descrição: Faz upload de uma imagem e cria um post associado.

Método: POST

Parâmetro: Arquivo enviado com a chave "imagem".

Exemplo de uso no curl:
```bash
curl -X POST http://localhost:3000/upload \
  -F "imagem=@/caminho/para/imagem.png"
```
# PUT /upload/:id
Descrição: Atualiza um post com novas descrições e informações geradas pela IA.

Método: PUT

Parâmetros:

id: ID do post a ser atualizado.
Corpo da requisição:
```bash
{
  "alt": "Nova descrição alternativa"
}
```
Exemplo de resposta:
```bash
{
  "_id": "64b1f0dc2e4b8f001c5f1234",
  "descricao": "Nova descrição gerada pela IA",
  "imgUrl": "http://localhost:3000/uploads/64b1f0dc2e4b8f001c5f1234.png",
  "alt": "Nova descrição alternativa"
}
```

# 📄 Licença
Este projeto está licenciado sob a MIT License.

Desenvolvido com 💻 por [Camilo Baggio].
