import { Container, Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import criosferaGif from "../../assets/criosferaGif.gif"

function Home() {
  const navigate = useNavigate()

  return (
    <Container
      disableGutters={true}
      sx={{ bgcolor: "orange", display: "flex", width: "" }}
    >
      <Box sx={{ bgcolor: "aqua", height: "80vh", width: "50%" }}>
        <Typography
          variant='h2'
          sx={{
            letterSpacing: 0,
            marginTop: 7,
          }}
        >
          Criosfera 1
        </Typography>
        <Typography variant='h3' sx={{ marginTop: 1, marginBottom: 4 }}>
          O primeiro módulo científico brasileiro instalado no interior <br />
          da antártica
        </Typography>
        <Button
          onClick={() => {
            navigate("/infra")
          }}
          variant='contained'
          sx={{ color: "#fff", fontWeight: 700, width: 180, height: 55 }}
        >
          Saiba mais
        </Button>
        <Button
          onClick={() => {
            navigate("/about")
          }}
          variant='text'
          sx={{
            width: 180,
            height: 55,
            marginLeft: 1,
          }}
        >
          Quem somos
        </Button>
      </Box>
      <Box
        component='img'
        src={criosferaGif}
        alt='Criosfera 1 Container'
        sx={{
          height: "400px",
          marginTop: 20,
          paddingLeft: 0,
        }}
      ></Box>
    </Container>
  )
}

export default Home
