import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  primary: '#cc9e07',
  secondary: grey[500],
  backgroundColor: '#ffffff',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});
