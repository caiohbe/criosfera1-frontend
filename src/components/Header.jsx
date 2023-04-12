import { Toolbar } from "@mui/material"
import StyledImage from "../styles/StyledImage"
import criosferaLogo from "../assets/criosferaLogo.png"
import StyledButton from "../styles/StyledButton"

function Header() {
  return (
    <Toolbar
      sx={{
        borderRadius: 2,
        bgcolor: "secondary.main",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledImage src={criosferaLogo} alt='logo' />
      <StyledButton
        variant='contained'
        sx={{ display: { xs: "none", sm: "inline" } }}
      >
        Quem Somos
      </StyledButton>
      <StyledButton variant='contained'>História</StyledButton>
      <StyledButton variant='contained'>Ciência</StyledButton>
      <StyledButton variant='contained'>Infraestrutura</StyledButton>
      <StyledButton variant='contained'>Missões Científicas</StyledButton>
      <StyledButton variant='contained'>Educacional</StyledButton>
      <StyledButton variant='contained'>Galeria</StyledButton>
      <StyledButton variant='contained'>Banco de Dados</StyledButton>
      <StyledButton variant='contained'>Divulgação</StyledButton>
      <StyledButton variant='contained'>Contato</StyledButton>
    </Toolbar>
  )
}

export default Header
