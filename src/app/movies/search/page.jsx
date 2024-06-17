import { getMovies, getMulti } from "@/src/utils/requests";
import React from 'react';
import SearchResults from "../../components/SearchResults";

async function SearchPage({searchParams}) {
    const searchText = searchParams.query
    const movies = await getMovies(searchText)
     return (
      <SearchResults searchtext={searchText} movies={movies}></SearchResults> 
    )
}

export default SearchPage