const AuthorController = require('../controllers/author.controller.js');
module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor)
    app.post('/api/authors', AuthorController.createAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}