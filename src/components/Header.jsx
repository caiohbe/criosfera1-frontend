import { Toolbar } from "@mui/material"
import StyledImage from "../styles/StyledImage"
import criosferaLogo from "../assets/criosferaLogo.png"
import StyledButton from "../styles/StyledButton"
import ButtonMenu from "./ButtonMenu"

function Header() {
  return (
    <Toolbar
      sx={{
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledImage src={criosferaLogo} alt='logo' />
      <StyledButton
        variant='text'
        sx={{
          display: { xs: "none", sm: "inline" },
          ":hover": { bgcolor: "primary.main", color: "secondary.main" },
        }}
      >
        Quem Somos
      </StyledButton>
      <ButtonMenu />
      <StyledButton variant='text'>História</StyledButton>
      <StyledButton variant='text'>Ciência</StyledButton>
      <StyledButton variant='text'>Infraestrutura</StyledButton>
      <StyledButton variant='text'>Missões Científicas</StyledButton>
      <StyledButton variant='text'>Educacional</StyledButton>
      <StyledButton variant='text'>Galeria</StyledButton>
      <StyledButton variant='text'>Banco de Dados</StyledButton>
      <StyledButton variant='text'>Divulgação</StyledButton>
      <StyledButton variant='text'>Contato</StyledButton>
    </Toolbar>
  )
}

export default Header
