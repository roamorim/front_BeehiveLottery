import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { borderRadius } from '@mui/system';
var cardStyle = {
    height: '300px',
    borderRadius:20
}
export default function NewRaffleCard() {
    return (
        <Card elevation={5} className="card" sx={{ borderRadius: 7 }} p>
            <CardContent sx={{ paddingTop: 15 }}>
                <AddCircleOutlineOutlinedIcon fontSize="large" />
            </CardContent>
        </Card>
    );
}
