import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: true;
      sm: true;
      md: true;
      lg: true;
      xl: true;
      mobileS: true;
      mobileM: true;
      mobileL: true;
      tablet: true;
      laptop: true;
      desktop: true;
    }
  }

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 767,
      lg: 1024,
      xl: 1440,
      mobileS: 0,
      mobileM: 375,
      mobileL: 425,
      tablet: 767,
      laptop: 1024,
      desktop: 1440,
    },
  }
})

export default theme