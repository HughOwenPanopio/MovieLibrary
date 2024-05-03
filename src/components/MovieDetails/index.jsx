import { useEffect, useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import LoadingMessage from '../LoadingMessage'
import StarRating from '../StarRating'
// import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'

function MovieDetails({ selectedID }) {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const KEY = '13f0e909'

  const {
    Title: title,
    Poster: poster,
    Actors: actors,
    Director: director,
    Genre: genre,
    Plot: plot,
    Released: released,
    Runtime: runtime,
    Type: type,
    Writer: writer,
    imdbRating,
    Year: year,
  } = movie

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true)
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        )
        const data = await res.json()
        setMovie(data)

        setIsLoading(false)
      }

      getMovieDetails()
    },
    [selectedID]
  )

  return (
    <>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <div className="movieDetails-container">
          <div className="movieDetails-header">
            {/* <KeyboardReturnIcon className="btn-back" /> */}
            <img src={poster} alt={movie.title} />
            <div>
              <h1>{title}</h1>
              <h3>{released}</h3>
              <p>
                <span>{runtime}</span> <span>min</span>
              </p>
              <p>{genre}</p>

              <p className="rating-container">
                <span className="imdbLogo-container">
                  <img
                    src="../../../public/imdbLogo.png"
                    className="imdbLogo"
                    alt="imdbLogo"
                  />
                </span>
                <span className="rating"> {imdbRating} </span>
                <span>
                  <StarBorderPurple500Icon
                    sx={{ fontSize: 'largest', color: '#FFC700' }}
                  />
                </span>
              </p>

              <p>{type}</p>
            </div>
          </div>
          <div className="movieDetails-content">
            <div className="starRating-container">
              <StarRating />
            </div>
            <p style={{ fontStyle: 'italic' }}>&quot;{plot}&quot;</p>
            <p>
              <span>Starring </span>
              <span>{actors}</span>
            </p>
            <p>
              <span>Directed by </span> <span>{director}</span>
            </p>
            <p>
              <span>Written by</span> <span>{writer}</span>
            </p>
            <p>{year}</p>
          </div>
        </div>
      )}
    </>
  )
}

MovieDetails.propTypes = {
  selectedID: PropTypes.string,
}

export default MovieDetails
