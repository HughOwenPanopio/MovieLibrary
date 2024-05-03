import { useEffect, useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'

function MovieDetails({ selectedID }) {
  const [movie, setMovie] = useState({})

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
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        )
        const data = await res.json()
        setMovie(data)
      }

      getMovieDetails()
    },
    [selectedID]
  )

  return (
    <>
      <div className="movieDetails-container">
        <div className="movieDetails-header">
          <img src={poster} alt={movie.title} />
          <div>
            <h2>{title}</h2>
            <h3>{released}</h3>
            <p>
              <span>{runtime}</span> <span>min</span>
            </p>
            <p>{genre}</p>
            <p>
              <span>
                <img
                  src="../../../public/imdbLogo.png"
                  className="imdbLogo"
                  alt="imdbLogo"
                />
              </span>
              <span>{imdbRating}</span>
              <span>
                <StarBorderPurple500Icon
                  sx={{ fontSize: 'largest', color: '#FFC700' }}
                />
              </span>
            </p>
            <p>{type}</p>
          </div>
        </div>
        <p>{plot}</p>
        <p>{actors}</p>
        <p>{director}</p>
        <p>{writer}</p>
        <p>{year}</p>
      </div>
    </>
  )
}

MovieDetails.propTypes = {
  selectedID: PropTypes.string,
}

export default MovieDetails
