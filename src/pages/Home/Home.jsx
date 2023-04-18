import { Container, Typography, Box, Button } from "@mui/material"
import TEMP from "../../assets/TEMP.jpg"

function Home() {
  return (
    <Container
      sx={{ bgcolor: "tomato", display: "flex", width: "100vw", padding: 0 }}
    >
      <Box sx={{ bgcolor: "aqua", height: "80vh", width: "50%" }}>
        <Typography>TEXTO</Typography>
        <Button
          onClick={() => {
            /*FIXME*/
          }}
          variant='contained'
          sx={{ color: "#fff", fontWeight: 700 }}
        >
          Saiba mais
        </Button>
        <Button variant='text' sx={{ fontWeight: 700 }}>
          Saiba mais
        </Button>
      </Box>
      <Box
        component='img'
        src={TEMP /*FIXME*/}
        alt='Criosfera 1 Container'
        sx={{ bgcolor: "orange", width: "50%", height: "400px" }}
      ></Box>
    </Container>
  )
}

export default Home
