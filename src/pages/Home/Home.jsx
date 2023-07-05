import { Container, Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import criosferaGif from "../../assets/criosferaGif.gif"
import { homeSx } from "./homeStyles"

function Home() {
  const navigate = useNavigate()

  return (
    <Container disableGutters={true} sx={homeSx.Container.sx}>
      <Box sx={homeSx.Container.boxLeft.sx}>
        <Typography variant='h3' sx={{ marginTop: 1 }}>
          CRIOSFERA 1
        </Typography>
        <Typography
          variant='h2'
          sx={{ marginTop: 1, marginBottom: 4, fontSize: 45 }}
        >
          o primeiro módulo científico brasileiro instalado no interior <br />
          da Antártida
        </Typography>
        <Button
          onClick={() => {
            navigate("/infra")
          }}
          variant='contained'
          sx={homeSx.Container.buttonLeft.sx}
        >
          Saiba mais
        </Button>
        <Button
          onClick={() => {
            navigate("/about")
          }}
          variant='text'
          sx={homeSx.Container.buttonRight.sx}
        >
          Quem somos
        </Button>
      </Box>
      <Box>
        <Box
          component='img'
          src={criosferaGif}
          alt='Criosfera 1 Container'
          sx={homeSx.Container.criosferaGif.sx}
        ></Box>
      </Box>
    </Container>
  )
}

export default Home
