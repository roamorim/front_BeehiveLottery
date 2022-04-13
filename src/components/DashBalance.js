import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Item from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function DashBalance() {
    return (
        <Card elevation={5} className="balance-card" sx={{ borderRadius: 7 }}>
            <CardContent >
                <Grid container xs={12} >
                    <Grid item xs={6} >
                    </Grid>
                    <Grid item xs={6} >
                        <Stack direction={'row'} spacing={1}>
                            <Item>
                                <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>Currency</Typography>
                            </Item>
                            <Item>
                                <img className='logo-meter-balance' src="../../images/logometer.png" />
                            </Item>
                            <Item>
                                <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>MTR</Typography>
                            </Item>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container xs={12} paddingTop={9} >
                    <Grid item xs={12} >
                        <Typography variant="h3" className="balance-card-value" sx={{ fontWeight: 700 }}>250,000</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} paddingTop={3} >
                    <Grid item xs={12} >
                        <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>Total<p /></Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} paddingTop={3} >
                    <Grid item xs={12} >
                        <button style={{
                            padding: '8px',
                            paddingLeft: '30px',
                            paddingRight: '30px',
                            borderRadius: '15px',
                            border: 'none',
                            outline: 'inherit',
                            cursor: 'pointer',
                            background: '#5956e9',
                            color: 'white'
                        }}>Cancel</button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
