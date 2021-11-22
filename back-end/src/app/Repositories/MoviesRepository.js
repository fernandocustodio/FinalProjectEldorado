const { v4 } = require('uuid');

let movies = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'meuemail@gmail.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Matasdasdasdeus',
    email: 'teste@gmail.com',
    phone: '124234233123123',
    category_id: v4(),
  },
];

class MoviesRepository{
  findAll() {
    return new Promise((resolve) => resolve(movies));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      movies.find((movie) => movie.id === id),
    ));
  }

  delete(id){
    return new Promise((resolve) => {
      movies = movies.filter((movie) => movie.id !== id);
      resolve();
    });
  }
}

module.exports = new MoviesRepository();
