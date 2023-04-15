import { Toolbar } from "@mui/material"
import StyledImage from "../styles/StyledImage"
import criosferaLogo from "../assets/criosferaLogo.png"
import ButtonMenu from "./ButtonMenu"
import headerItems from "../assets/headerItems"

function Header() {
  const items = headerItems.map((item, index) => {
    return <ButtonMenu key={index} topic={item} />
  })

  return (
    <Toolbar
      sx={{
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledImage src={criosferaLogo} alt='logo' />
      {items}
    </Toolbar>
  )
}

export default Header
