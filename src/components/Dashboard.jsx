import React from 'react'
import Grid from '@mui/material/Grid'

/*
  This is an idea
*/

export default function Dashboard() {

    const renderGridData = () => {
        return(
            <Grid container item xs={12}>
              
                <Grid container item xs={12} style={{display:'flex',background:'transparent'}}>
                  
                    <Grid container item xs={3} style={{margin:'5px auto',marginLeft:'15px'}}>
                      <div style={{maxHeight:'100px',minWidth:'100px',background:'orange',borderRadius:'50%'}}> image here </div>
                    </Grid>
                    <Grid container item xs={8} style={{margin:'5px auto'}}>
                      <Grid container item xs={12}>
                        <h1 style={{margin:'auto'}}>Prize</h1>
                      </Grid>
                      <Grid container item xs={12}>
                        <p style={{margin:'auto',fontSize:'20px'}}>Price here $ MTR</p>
                      </Grid>
                    </Grid>

                </Grid>

            </Grid>
        )
    }

    const repeatGrid = () => {
        return [0,0,0].map((cont,index) => {
            return(
                <Grid container item xs={4} style={{background:'#ebebeb',margin:'15px auto',padding:'15px'}}>
                
                    <Grid container item xs={12} style={{background:'white',borderRadius:'10px'}}>
                        { (index == 0) ? <div style={{ width:'100px', height:'100px',background:'#5956e9',margin:'auto',borderRadius:'50%'}}> Image here </div> : null }
                        { ( index != 0) ? renderGridData() : null }
                    </Grid>
                </Grid>
            )
        });
    }

  return (
    <Grid container item xs={11} style={{margin:'15px auto'}}>

        <Grid container item xs={12} style={{background:'#ebebeb',padding:'35px'}}>
          <h1> My Dashboard </h1>
        </Grid>


        <Grid container item xs={12}>
          
            {repeatGrid()}

        </Grid>


    </Grid>
  )
}
