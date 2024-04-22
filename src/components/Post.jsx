import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } 
from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { brown } from "@mui/material/colors";
import pizza from '../assets/images/pizza.jpg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <Box  flex={4} p={2}>
       <Card sx={{ maxWidth: 845 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: brown[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nikita Negi"
        subheader="April 14, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        
        image={pizza}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox   icon={<FavoriteBorder  />} checkedIcon={<Favorite sx={{color:'red'}}/>}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>
    </Box>
  )
}

export default Post