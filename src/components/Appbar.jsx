import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "pageTitle",
          },
          style: {
            fontSize: 20,
            color: 'purple',
          },
        },

      ],
    },
  },
})

export default function Appbar() {
  return (
    <Grid container item xs={12} >
      <ThemeProvider theme={theme}>
        <Grid item xs={10} className='page-title'>
          <Typography variant="pageTitle" component="h4" >My Dashboard</Typography>
        </Grid>
        <Grid item xs={2} >
          <button style={{
            padding: '8px',
            paddingLeft: '40px',
            paddingRight: '40px',
            borderRadius: '15px',
            border: 'none',
            outline: 'inherit',
            cursor: 'pointer',
            background: '#5956e9',
            color: 'white'
          }}>
            Wallet
          </button>
        </Grid>
      </ThemeProvider>
    </Grid>
  )
}
