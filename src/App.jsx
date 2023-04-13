import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import criosferaTheme from "./styles/Theme"
import { ThemeProvider } from "@mui/material"
import Header from "./components/Header"

function App() {
  return (
    <ThemeProvider theme={criosferaTheme}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
