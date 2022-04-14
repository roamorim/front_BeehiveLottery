import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { hover } from '@testing-library/user-event/dist/hover';

export default function Sidebar() {
    return (
        <Grid className="sidebar" container xs={12} >
            <Grid item xs={12} >
                <img className='logo' src="../../images/logo512.png" />
            </Grid>
            <Grid item xs={12} >
                <button style={{
                    padding: '2px',
                    border: 'none',
                    fontWeight: '800',
                    width: '110px',
                    cursor: 'pointer',
                    background: 'rgba(73, 53, 227, 0.1)',
                    color: '#4935E3',
                }}>
                    Create
                </button>
            </Grid>
            <Grid item xs={12} >
                <button style={{
                    padding: '2px',
                    border: 'none',
                    fontWeight: '800',
                    width: '110px',
                    cursor: 'pointer',
                    color: '#4935E3',
                }}>
                    Join
                </button>
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
