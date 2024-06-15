import { getMovieDetails } from "@/utils/requests"

async function DetailsOfMovies({params}) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const movieDetails = await getMovieDetails(params.id)
    return (
    <div className="my-4 mx-3">
        <div className="d-flex align-itens-center">
            <div className="col-3">
            <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="imgfilme" />
        </div>
        <div className="mx-5 text-success">
            <h3>{movieDetails.title}</h3>
            <div className="d-flex">
                <p className="py-1 px-2 bg-white text-success me-2 rounded">{movieDetails.release_date}</p>
                <p className="py-1 px-2 bg-white text-success me-2 rounded">{movieDetails.original_language}</p>
            </div>
            <div>
                <p >
                    {movieDetails.genres.map(genre => {
                    return <span className='mx-1 p-1 bg-success text-dark me-2 rounded'>{genre.name}</span>
                    })}
                </p>
            </div>
            <div className='d-flex'>
                <p>Rating: {movieDetails.vote_average}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            </div>
            <p className="text-white">{movieDetails.overview}</p>
            
        </div></div>
    </div>
    )
}
export default DetailsOfMovies