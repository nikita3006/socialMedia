import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar, Icon, Box } from "@mui/material";
import  styled  from "@emotion/styled";
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp';
import Mail from '@mui/icons-material/Mail'
import { NotificationAdd } from "@mui/icons-material";



const Navbar= () => {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
      justifyContent:'space-between'
    })
    const Search = styled("div")(({theme}) =>({
      backgroundColor:'white',
      borderRadius:'10px',
      padding:'5px'
    }))
    const Icon = styled(Box)(({theme}) =>({
      display:'none',
      gap:'20px',
      alignItems:'center',
      [theme.breakpoints.up("sm")]:
     { display:'flex'}
    }))
    const UserBox = styled(Box)(({theme}) =>({
      display:'flex',
      gap:'20px',
      alignItems:'center',
      [theme.breakpoints.up("sm")]:
     { display:'none'}
    }))
   
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs :'none', sm:'block'}}}>
            Nikita Negi
          </Typography>
          <AllInclusiveSharpIcon  sx={{display:{xs :'block', sm:'none'}}}/>
          <Search  ><InputBase placeholder="search" sx={{width:{xs :'10rem', sm:'20rem'}}}></InputBase></Search>
        <Icon>
        <Badge badgeContent={4} color="error">
              <Mail color="action" />
            </Badge>
        <Badge badgeContent={4} color="error" >
            <NotificationAdd color="action"/> 
            </Badge>
            <Avatar alt="Nikemy Sharp" src="/static/images/avatar/1.jpg" />
        </Icon>
        <UserBox>
        <Avatar alt="Nikemy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography>Nikita</Typography>
        </UserBox>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar