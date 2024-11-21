import express from "express";
import { listarPosts, postarNovoPost, uploadImagem} from '../controller/postsController.js';
import multer from "multer";


const storage = multer.diskStorage({
     destination: function (req, file, cb) {
         cb(null, 'uploads/');
     },
     filename: function (req, file, cb) {
         cb(null, file.originalname);
     }
 })
 
 const upload = multer({ dest: "./uploads" , storage})


const routes = (app) => {
     // Middleware para interpretar o corpo das requisições como JSON
    app.use(express.json());

     // Rota GET para "/posts" que retorna todos os posts do banco de dados
     app.get("/posts", listarPosts);
     app.post("/posts", postarNovoPost);
     app.post("/upload", upload.single("imagem"),uploadImagem);
}

export default routes;
