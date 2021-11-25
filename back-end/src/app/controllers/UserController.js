const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response){
    const users = await UsersRepository.findAll();

    response.json(users);
  }

  async show(request, response){
    const { id } = request.params;
    const user = await UsersRepository.findById(id);

    if (!user){
      return response.status(404).json({ error: 'user not found' });
    }

    response.json(user);
  }

  async store(request, response){
    const { name, email, password } = request.body;

    const emailExists = await UsersRepository.findByEmail(email);

    if (!name){
      return response.status(400).json({ error: 'Name is required' });
    }

    if (emailExists){
      return response.status(400).json({ error: 'Email already in use' });
    }

    const user = await UsersRepository.create({ name, email, password });

    response.json(user);
  }

  async update(request, response){
    const { id } = request.params;
    const { name, email, password } = request.body;

    const usersExists = await UsersRepository.findById(id);

    if (!usersExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name){
      return response.status(400).json({ error: 'Name is required' });
    }

    const movie = await UsersRepository.update(id, { name, email, password });

    response.json(movie);
  }

  async delete(request, response){
    const { id } = request.params;

    await UsersRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new UserController();
