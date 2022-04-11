import './Components.css';
import TransactionRow from './TransactionRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

var cardStyle = {
    height: '300px'
}
export default function TransactionList() {
    return (
        <Card elevation={5} style={cardStyle}>
            <CardContent >
                <div class="tx-header">
                    <span class="tx-title tx-history">Transaction History</span>
                    <span class="tx-title tx-prize">Ticket Prize</span>
                    <span class="tx-title tx-status">Status</span>
                    <span class="tx-title tx-date">Weekly</span>
                </div>
                <TransactionRow />
                <TransactionRow />
            </CardContent>
        </Card>
    );
}

