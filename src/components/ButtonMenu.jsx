import { Menu, MenuItem } from "@mui/material"
import StyledButton from "../styles/StyledButton"
import { useState } from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
})

function ButtonMenu() {
  let currentlyHovering = false
  const styles = useStyles()

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
        Open Menu
      </StyledButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" },
        }}
        getcontentanchorel={null}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PopoverClasses={{
          root: styles.popOverRoot,
        }}
      >
        <MenuItem sx={{ color: "primary.main" }} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default ButtonMenu
