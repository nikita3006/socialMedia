import { Box, Stack } from "@mui/material"
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction='row' justifyContent='space-around'>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  )
}

export default App