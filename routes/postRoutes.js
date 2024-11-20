// Rota GET para "/posts" que retorna todos os posts do banco de dados
app.get("/posts", async (req, res) => {
    // Chama a função para obter os posts do banco
    const posts = await getTodosPosts();

    // Retorna os posts como JSON com status HTTP 200 (OK)
    res.status(200).json(posts);
});
