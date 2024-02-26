# Movie search
Creează un routing de bază pentru o aplicație de căutare și stocare a filmelor. 
## API themoviedb.org
Pentru backend, utilizează [themoviedb.org API](https://www.themoviedb.org). Trebuie să te înregistrezi și să obții o cheie pentru API. În această sarcină, vei utiliza următoarele endpoint-uri.

- [/trending/get-trending](https://developer.themoviedb.org/reference/trending-all) - lista cu cele mai populare filme de astăzi, pentru a crea o colecție pe pagina principală.
- [/search/search-movies](https://developer.themoviedb.org/reference/search-movie) - căutarea unui film după cuvinte cheie pe pagina de filme.
- [/movies/get-movie-details](https://developer.themoviedb.org/reference/movie-details) - solicitarea informațiilor complete despre un film pentru pagina filmului.
- [/movies/get-movie-credits](https://developer.themoviedb.org/reference/movie-credits) - solicitarea informațiilor despre distribuția de actori pentru pagina filmului.
- [/movies/get-movie-reviews](https://developer.themoviedb.org/reference/movie-reviews) - solicitarea recenziilor pentru pagina filmului.

    - [Link către documentație](https://developer.themoviedb.org/docs/getting-started) 

## Routes
Aplicația trebuie să aibă următoarele rute. Dacă utilizatorul accesează o rută inexistentă, acesta ar trebui să fie redirecționat către pagina de principală.

- `'/'` - componenta `Home`, pagina principală cu lista de filme populare.
- `'/movies'` - componenta `Movies`, pagina de căutare a unui film după cuvântul cheie.
- `'/movies/:movieId'` - componenta `MovieDetails`, pagina cu informații detaliate despre film.
- `/movies/:movieId/cast` - componenta `Cast`, informații despre distribuția de actori. Afișată pe pagina `MovieDetails`.
- `/movies/:movieId/reviews` - componenta `Reviews`, informații despre recenzii. Afișată pe pagina `MovieDetails`.

## Code Splitting (separarea codului)
Adaugă încărcarea asincronă a codului JS pentru rutele aplicației folosind `React.lazy()` și `<Suspense>`.