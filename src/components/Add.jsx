import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import styled from "@emotion/styled";


const Add = () => {
  const[click, setClick] = useState(false)
  const handleClick= ()=>{
    setClick(!click)
  }
  const handleClose= ()=>{
    setClick(false)
  }
 
  const StyledModal= styled(Modal)({
    display:'flex',
    justifyContent:'center',
    height:300,
    width:500,
    borderRadius:'10px',
    backgroundColor:'gray',
    color:"white",
    marginLeft:'360px',
    marginTop:'130px'
   
  })
  const UserBox= styled(Box)({
    display:'flex',
    justifyContent:'center',
    gap:'20px',
    marginRight:'20rem'
    
  })
  return (
    <Box>
    <Tooltip 
    onClick={handleClick}
    title="add" sx={{position:'fixed' , bottom:20, left:{xs:'calc(40%)', md:30}, height:40, width:45}}>
    <Fab color="info" aria-label="add">
      <AddIcon />
      </Fab>
    </Tooltip>
   
     
          {click ? <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box >
                 <Box sx={{ mt: 2, }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}} bgcolor={"background.default"} color={"text.primary"} >
                        Create a Post
                      </Typography>
                 </Box>
                    <Box sx={{ mt: 2}}>
                        <UserBox>
                              <Avatar alt="Niki Sharp" src="/static/images/avatar/1.jpg"
                              sx={{width:'30px', height:'30px'}}
                              />
                                  <Typography fontWeight={500} variant="span">
                                    Nikita Negi
                                  </Typography>
                                  
                        </UserBox>
                        <TextField
                          id="outlined-textarea"
                          placeholder="What's on your mind?"
                          rows={2}
                          variant="standard"
                          multiline
                          sx={{mt:2, width:'100%'}}
                        />
                        <Stack direction='row' gap={1} sx={{mt:2}}>
                          <EmojiEmotionsIcon/>
                          <CameraAltIcon/>
                          < VideoCameraBackIcon />
                          <PersonAddAlt1Icon/>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{mt:1}}>
                          <Button variant="contained" >Post</Button>
                          <Button variant="contained" ><DateRangeIcon/></Button>
                        </Stack>
                    </Box>
                </Box>
            
          
          </StyledModal> : ''}
     
    </Box>
  )
}

export default Add