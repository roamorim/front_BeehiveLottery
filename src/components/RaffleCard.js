import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import '@fontsource/roboto/500.css';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack'
import Item from '@mui/material/Stack'


var cardStyle = {
    height: '300px'
}
export default function RaffleCard(props) {
    return (
        <Card elevation={5} className="card" sx={{ borderRadius: 7 }} >
            <CardContent >
                <Grid container xs={12} >
                    <Grid item xs={2} >
                        <img className='logo-meter' src="../../images/logometer.png" />
                    </Grid>
                    <Grid item xs={10} >
                        <Typography variant="h5" sx={{ fontWeight: 500 }}>Prize</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>{props.prize} $MTR</Typography>

                    </Grid>
                </Grid>
                <Grid container xs={12} >
                    <Grid item xs={2} >
                        <Stack spacing={1}>
                            <Item>
                                <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 500 }}>Raffle 1</Typography>
                            </Item>
                            <Item>
                                <Typography variant="h8" color="gray" >Description</Typography>
                            </Item>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container xs={12} paddingTop={3}>
                    <Grid lineHeight={0.2} item xs={4} >
                        <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>02:30<p /></Typography>
                        <Typography variant="h8" sx={{ fontWeight: 500 }} color="gray" >Time</Typography>
                    </Grid>
                    <Grid lineHeight={0.2} item xs={4} style={{ borderLeft: "1px solid grey" }}>
                        <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>127<p /></Typography>
                        <Typography variant="h8" sx={{ fontWeight: 500 }} color="gray" >Users</Typography>
                    </Grid>
                    <Grid lineHeight={0.2} item xs={4} style={{ borderLeft: "1px solid grey" }}>
                        <Typography variant="h7" className="raffle-card-title" sx={{ fontWeight: 700 }}>01<p /></Typography>
                        <Typography variant="h8" sx={{ fontWeight: 500 }} color="gray" >Errors</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} paddingTop={2} >
                    <Grid item xs={12} >
                        <Slider
                            disabled
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            color="primary"
                        />
                    </Grid>
                    <Grid item xs={12} paddingTop={1}>
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
                            Finish
                        </button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
