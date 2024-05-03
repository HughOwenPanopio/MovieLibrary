import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default function StarRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate the movie</Typography>
      <Rating name="customized-10" defaultValue={1} max={10} />
    </Box>
  )
}
