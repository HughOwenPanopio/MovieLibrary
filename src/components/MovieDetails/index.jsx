import { useEffect, useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import LoadingMessage from '../LoadingMessage'
import StarRating from '../StarRating'
import imdbLogo from '../../assets/imdbLogo.png'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'

function MovieDetails({ selectedID, onAddMovie, onCloseMovie, watched }) {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState(0)

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID)
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating

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

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      poster,
      imdbRating,
      runtime,
      userRating,
    }

    onAddMovie(newWatchedMovie)
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === 'Escape') {
          onCloseMovie()
        }
      }
      document.addEventListener('keydown', callback)

      return function () {
        document.removeEventListener('keydown', callback)
      }
    },
    [onCloseMovie]
  )

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

  useEffect(
    function () {
      if (!title) return
      document.title = `${type} | ${title}`

      return function () {
        document.title = 'MovieLibrary'
      }
    },
    [title, type]
  )

  return (
    <>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <div className="movieDetails-container">
          <KeyboardReturnIcon className="btn-back" onClick={onCloseMovie} />
          <div className="movieDetails-header">
            <img src={poster} alt={movie.title} />
            <div>
              <h1>{title}</h1>
              <h3>{released}</h3>
              <p>
                <span>{runtime}</span>
              </p>
              <p>{genre}</p>

              <p className="rating-container">
                <span className="imdbLogo-container">
                  <img src={imdbLogo} className="imdbLogo" alt="imdbLogo" />
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
              {!isWatched ? (
                <>
                  <StarRating onSetRating={setUserRating} />
                  <button className="btn-add" onClick={handleAdd}>
                    Add to list
                  </button>
                </>
              ) : (
                <p>
                  Added to list with {watchedUserRating}{' '}
                  <StarBorderPurple500Icon
                    sx={{ fontSize: 'medium', color: '#FFC700' }}
                  />
                </p>
              )}
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
  onAddMovie: PropTypes.func,
  onCloseMovie: PropTypes.func,
  watched: PropTypes.array,
}

export default MovieDetails
