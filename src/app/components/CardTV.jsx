import Link from 'next/link'

function Cardtv({tvshow}) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    return (
        <div>
            <Link className='text-decoration-none' href={'/tvshow/' + tvshow.id}>
                <div className='card' style={{width: '15rem'}}>
                    <img src={IMAGE_BASE_URL + tvshow.backdrop_path} alt='movie_img' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 >{tvshow.name}</h5>
                        <p>{tvshow.media_type}</p>
                        <p>{tvshow.first_air_date}</p>
                        <div className='d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <p>:{tvshow.vote_average}</p>   
                        </div>
                        
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cardtv