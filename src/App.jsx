import { Box, Stack } from "@mui/material"
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import Navbar from "./components/Navbar"
import Add from './components/Add';
import { createTheme } from '@mui/material/styles';
import { useState } from "react"
import { ThemeProvider } from '@mui/material'


const App = () => {
  const[mode, setMode] = useState("dark")
  const theme = createTheme({
    palette : {
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Box bgcolor={"background.default"} color={"text.primary"}> 
          <Navbar/>
          <Stack direction='row' justifyContent='space-around'>
            <SideBar setMode={setMode} mode={mode}/>
            <Feed/>
            <RightBar/>
          </Stack>
          <Add/>
        </Box>
    </ThemeProvider>
   
  )
}

export default App