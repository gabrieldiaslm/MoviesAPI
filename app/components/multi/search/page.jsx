import { getMovies } from '@/utils/requests';
import { getMulti } from '@/utils/requests';
import React from 'react';
import CardMulti from '../../CardMulti';
import Pagination from '../../Pagination';

async function SearchPage({params}) {
    const searchText = params.query
    const movies = await getMovies(searchText)
     return (
    <div className="container my-3">
      <h1 className="text-white">Resultados da Pesquisa</h1>
      <span>{Pagination()}</span>

      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => {
          return <CardMulti movie={movie}></CardMulti>;
        })}
      </div>
    </div>
  );
}

export default SearchPage