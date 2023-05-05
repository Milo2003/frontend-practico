import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useFetchMovies } from './hooks/useFetch'
import { Movie } from './components/Movie';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const { movies } = useFetchMovies(searchValue);
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formValue = new FormData(form.current)
    const searchValue = formValue.get('search')
    setSearchValue(searchValue)
  };

  return (
    <>
      <header>
        <h1>Prueba Tecnica</h1>
        <h2>Busca tus pelis favoritas </h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input name='search' type="text" />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {!!movies? <Movie movies={movies} /> : <p className='no-results'>No se han encontrado peliculas</p> }
      </main>
    </>
  )
}

export default App
