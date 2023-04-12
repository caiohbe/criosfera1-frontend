import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import criosferaTheme from "./styles/Theme"
import { ThemeProvider } from "@mui/material"

function App() {
  return (
    <ThemeProvider theme={criosferaTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
