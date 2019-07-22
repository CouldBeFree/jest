import movies from './movies'

describe('Favorite Movies', () => {
   test('can add a movie', () => {
       const myMovies = [{
           title: 'Titanic',
           rate: 3
       }];
       movies.add(myMovies, 'Avatar');
       expect(myMovies).toMatchSnapshot();
   });

   test('rate a movie', () => {
       const myMovies = [{
           title: 'Titanic',
           rate: 3
       }];
       movies.rate(myMovies[0], 5);
       expect(myMovies).toMatchSnapshot();
   })
});
