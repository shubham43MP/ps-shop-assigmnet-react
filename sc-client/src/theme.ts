import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import constants from './styles/constants.module.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: constants.primaryColor,
    },
    secondary: {
      main: constants.secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed'
  }
})

export default theme