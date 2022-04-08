import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'



export default function Appbar() {
  return (
      <Grid container item xs={12}>
        <Grid container item xs={2}>
          Image Beehive here
        </Grid>
        <Grid container item xs={10} style={{background:'transparent',justifyContent:'flex-end'}}>
          <button style={{
              marginRight:'15%',
              marginTop:'50px',
              padding:'8px',
              paddingLeft:'40px',
              paddingRight:'40px',
              borderRadius:'15px',
              border:'none',
              outline:'inherit',
              cursor:'pointer',
              background:'#5956e9',
              color:'white'
              }}>
          Wallet
          </button>
        </Grid>
      </Grid>
  )
}
