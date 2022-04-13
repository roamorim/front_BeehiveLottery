import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Sidebar() {
    return (
        <Grid className="sidebar" container xs={12} >
            <Grid item xs={12} >
                <img className='logo' src="../../images/logo512.png" />
            </Grid>
            <Grid item xs={12} >
                Create
            </Grid>
            <Grid item xs={12} >
                Join
            </Grid>
            <Grid item marginTop={50} xs={12} >
                <SettingsOutlinedIcon />
            </Grid>
            <Grid item xs={12} >
                <NotificationsIcon />
            </Grid>
        </Grid>
    )
}
