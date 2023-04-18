import { createTheme } from "@mui/material"

let criosferaTheme = createTheme({
  palette: {
    primary: {
      main: "#7D8DBE",
    },
    secondary: {
      main: "#FFF ",
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
})

export default criosferaTheme
