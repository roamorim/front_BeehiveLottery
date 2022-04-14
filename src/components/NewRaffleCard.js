import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Typography from '@mui/material/Typography';


export default function NewRaffleCard() {
    return (
        <Card elevation={5} className="card" sx={{ borderRadius: 7 }} p>
            <CardContent sx={{ paddingTop: 15 }}>
                <span class="new-icon" >
                    <Typography variant="h4" paddingTop={0.4}>+</Typography>
                </span>           
            </CardContent>
        </Card>
    );
}
