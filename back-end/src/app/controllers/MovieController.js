const MoviesRepository = require('../Repositories/MoviesRepository');

class ContactController{
  async index(request, response){
    // Listar todos os filmes

    const movies = await MoviesRepository.findAll();

    response.json(movies);
  }

  async show(request, response){
    // Obter um registro
    const { id } = request.params;
    const movie = await MoviesRepository.findById(id);

    if (!movie){
      return response.status(404).json({ error: 'Movie not found' });
    }

    response.json(movie);
  }

  store(){
    // Criar um registro
  }

  update(){
    // Editar um registro
  }

  async delete(request, response){
    // Deletar um registro

    const { id } = request.params;

    const movie = await MoviesRepository.findById(id);

    if (!movie){
      return response.status(404).json({ error: 'Movie not found' });
    }

    await MoviesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
