import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  mainColor: '#cc9e07',
  backgroundColor: '#ffffff',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.mainColor,
    },
    secondary: {
      main: green[500],
    },
  },
});
