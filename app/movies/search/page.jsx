import { getMovies, getMulti } from '@/utils/requests';
import React from 'react';
import Card from '@/app/components/Card';
import Pagination from '@/app/components/Pagination';
import SearchResults from '@/app/components/SearchResults';

async function SearchPage({searchParams}) {
    const searchText = searchParams.query
    const movies = await getMovies(searchText)
     return (
      <SearchResults searchtext={searchText} movies={movies}></SearchResults> 
    )
}

export default SearchPage