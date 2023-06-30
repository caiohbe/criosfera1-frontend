import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledButton = styled(Button)(() => ({
  margin: 8,
  marginTop: 40,
  fontSize: 12,
  borderRadius: 15,
  fontSize: 18,
  ":hover": { bgcolor: "primary.main", color: "secondary.main" },
}))

export default StyledButton
