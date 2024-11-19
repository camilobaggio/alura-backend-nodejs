import express from 'express';

const posts = [
    {
        id : 1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/200/150"
    },
    {
        id : 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://source.unsplash.com/random/200x150/?sunset,landscape"
    },
    {
        id : 3,
        descricao: "Cachorro fofo fazendo uma careta",
        imagem: "https://source.unsplash.com/random/200x150/?dog,funny"
    },
    {
        id : 4,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://source.unsplash.com/random/200x150/?food,colorful"
    },
    {
        id : 5,
        descricao: "Cidade vibrante à noite",
        imagem: "https://source.unsplash.com/random/200x150/?city,night"
    },
    {
        id : 6,
        descricao: "Natureza exuberante em uma floresta",
        imagem: "https://source.unsplash.com/random/200x150/?forest,nature"
    }
];


const app = express();
app.use(express.json());


app.listen(3000,()=>{
    console.log('Servidor escutando...');
});

app.get("/posts",(req,res)=>{
    res.status(200).json(posts);
});

function bucarPostPorId(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id",(req,res)=>{
    const index = bucarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});