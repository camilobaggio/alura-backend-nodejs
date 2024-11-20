import express from "express";
import { listarPosts } from '../controller/postsController.js';


const routes = (app) => {
     // Middleware para interpretar o corpo das requisições como JSON
    app.use(express.json());

     // Rota GET para "/posts" que retorna todos os posts do banco de dados
     app.get("/posts", listarPosts); 
}

export default routes;
