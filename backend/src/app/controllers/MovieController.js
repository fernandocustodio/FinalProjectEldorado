const MoviesRepository = require('../repositories/MoviesRepository');

class ContactController{
  // Listar todos os filmes
  async index(request, response){
    const { orderBy } = request.query;
    const movies = await MoviesRepository.findAll(orderBy);

    response.json(movies);
  }

  // Obter um filme
  async show(request, response){
    const { id } = request.params;
    const movie = await MoviesRepository.findById(id);

    if (!movie){
      return response.status(404).json({ error: 'Movie not found' });
    }

    response.json(movie);
  }

  // Adicionar um filme
  async store(request, response){
    const {
      name, poster, description, release_date, upload_date, users_id,
    } = request.body;

    const movieExists = await MoviesRepository.findByName(name);

    if (!name){
      return response.status(400).json({ error: 'Name is required' });
    }

    if (movieExists){
      return response.status(400).json({ error: 'Movie already exists' });
    }

    const movie = await MoviesRepository.create({
      name, poster, description, release_date, upload_date, users_id,
    });

    response.json(movie);
  }

  // Editar um filme
  async update(request, response){
    const { id } = request.params;
    const {
      name, poster, description, release_date, upload_date, users_id,
    } = request.body;

    const movieExists = await MoviesRepository.findById(id);

    if (!movieExists) {
      return response.status(404).json({ error: 'Movie not found' });
    }

    if (!name){
      return response.status(400).json({ error: 'Name is required' });
    }

    const movie = await MoviesRepository.update(id, {
      name, poster, description, release_date, upload_date, users_id,
    });

    response.json(movie);
  }

  // Deletar um filme
  async delete(request, response){
    const { id } = request.params;

    await MoviesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
