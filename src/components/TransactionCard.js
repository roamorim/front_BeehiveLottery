import './Components.css';
import TransactionRow from './TransactionRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


var cardStyle = {
    height: '300px'
}
export default function TransactionCard() {
    return (
        <Card elevation={5} className="card" sx={{ borderRadius: 7 }}>
            <CardContent >
                <Grid container>
                    <Grid item xs={5}>
                        <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>Transaction History</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>Ticket Prize</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>Status</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>Weekly</Typography>
                    </Grid>
                </Grid>

                <TransactionRow />
                <TransactionRow />
            </CardContent>
        </Card>
    );
}

