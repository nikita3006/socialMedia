import { createTheme } from '@mui/material/styles';
import { brown, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: brown[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
export default theme;
