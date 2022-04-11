import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
var cardStyle = {
    height: '300px'
}
export default function NewRaffleCard() {
    return (
        <Card elevation={5} style={cardStyle} p>
            <CardContent sx={{ paddingTop: 15 }}>
                <AddCircleOutlineOutlinedIcon fontSize="large" />
            </CardContent>
        </Card>
    );
}
