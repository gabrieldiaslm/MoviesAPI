import { getTrendingMovies } from '@/utils/requests'
import styles from './page.module.css'
import Card from './components/Card'
import Link from 'next/link'
import Pagination from './components/Pagination'

export default async function HomePage() {
  const movies = await getTrendingMovies()

  return (
    <div className="container my-3">
      <h1 className="text-white">Filmes do Momento</h1>
      <span>Pagination()</span>

      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => {
          return <Card movie={movie}></Card>;
        })}
      </div>
    </div>
  );
}