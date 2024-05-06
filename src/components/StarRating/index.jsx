import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

import PropTypes from 'prop-types'
import { useState } from 'react'

export default function StarRating({ onSetRating }) {
  const [rating, setRating] = useState(0)

  const isDesktop = useMediaQuery('(max-width: 415px)')

  function handleRating(e, newRating) {
    setRating(newRating)
    onSetRating(newRating)
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate the movie</Typography>
      <Rating
        name="customized-10"
        defaultValue={1}
        max={10}
        value={rating}
        onChange={handleRating}
        style={isDesktop ? { fontSize: '18px' } : {}}
      />
    </Box>
  )
}

StarRating.propTypes = {
  onSetRating: PropTypes.func,
}
