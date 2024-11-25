import express from 'express';

import routes from './src/routes/postsRoutes.js';

//await conectarAoBanco (process.env.STRING_CONEXAO)
const app = express();
app.use(express.static('uploads'))
routes(app)


// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando...');
});











/*function buscarPostPorID(id){
    return posts.findIndex((post)=> {
        return post.id === Number(id)
    })
}
app.get ('/posts/:id', (require,response) => {
    const index = buscarPostPorID(require.params.id)
    response.status (200).json (posts[index]);
});*/

/*
const posts = [
        
    {
     id:1, descrição: 'Uma foto teste',
      imagem: 'https://placecats.com/millie/300/150'
    },

    {
        id:2, descrição: 'Uma foto gato',
         imagem: 'https://placecats.com/millie/300/150'
    },

    {
        id:3, descrição: 'Uma  gato yoga',
         imagem: 'https://placecats.com/millie/300/150'
    },
    // ... outros objetos
];*/