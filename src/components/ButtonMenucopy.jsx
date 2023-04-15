import { Menu, MenuItem } from "@mui/material"
import StyledButton from "../styles/StyledButton"
import { useState } from "react"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
})

function ButtonMenu({teste}) {
  let currentlyHovering = false
  const styles = useStyles()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  function handleHover() {
    currentlyHovering = true
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleCloseHover() {
    currentlyHovering = false
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose()
      }
    }, 50)
  }

  if (teste.popOver) {
    const menuItems = teste.popOver.map( (item, index) => {
      return (
          <MenuItem key={index} sx={{ color: "secondary.main" }} onClick={() => {handleClose, navigate(`/${item.href}`)}}>{item.name}</MenuItem>
      )
    })

    return (
      <div>
        <StyledButton
          sx={{ ":hover": { bgcolor: "primary.main", color: "secondary.main" } }}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup='true'
          onClick={handleClick}
          onMouseOver={handleClick}
          onMouseLeave={handleCloseHover}
        >
          {teste.name}
        </StyledButton>
        <Menu
          disableAutoFocusItem
          PaperProps={{ elevation: 0, style: { backgroundColor: "#7D8DBE", borderRadius: 12, marginTop: 3}}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseEnter: handleHover,
            onMouseLeave: handleCloseHover,
            style: { pointerEvents: "auto" },
          }}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          PopoverClasses={{
            root: styles.popOverRoot,
          }}
          sx={{color: "primary.main", border: 0, boxShadow: 0}}
        >
          {menuItems}
        </Menu>
      </div>
    )
  } else {
    return (
      <StyledButton
      sx={{ ":hover": { bgcolor: "primary.main", color: "secondary.main" } }}
      onClick={() => {handleClick, navigate(`/${teste.href}`)}}
      onMouseOver={handleClick}
      onMouseLeave={handleCloseHover}
    >
      {teste.name}
    </StyledButton>
    )
  }

}

export default ButtonMenu