import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: '#96e9d6',
      main: '#0ac99c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#96e9d6',
      main: '#fff',
      contrastText: '#0ac99c',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h1: {
      fontWeight: 'bold',
    },
  },
})

export default theme
