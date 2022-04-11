import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

var cardStyle = {
    height: '300px',
    backgroundColo: 'grey'
}
export default function DashBalance() {
    return (
        <Card elevation={5} style={cardStyle} p>
            <CardContent >
                <Grid container xs={12} >
                    <Grid item xs={2} >
                        <img className='logo-meter' src="../../images/logometer.png" />
                    </Grid>
                    <Grid item xs={10} >
                        Prize 70,000 $MTR
                    </Grid>
                </Grid>
                <Grid container xs={12} >
                    <Grid item xs={12} >
                        Raffle 1
                        Brief Description
                    </Grid>
                </Grid>
                <Grid container xs={12} >
                    <Grid item xs={4} >
                        02:30
                    </Grid>
                    <Grid style={{ borderLeft: "1px solid grey" }} item xs={4} >
                        127
                    </Grid>
                    <Grid style={{ borderLeft: "1px solid grey" }} item xs={4} >
                        01
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
