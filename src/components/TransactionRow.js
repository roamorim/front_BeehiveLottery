import './Components.css';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Item from '@mui/material/Stack'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

let statusStyle = {
    padding: '8px',
    paddingLeft: '34px',
    paddingRight: '34px',
    borderRadius: '15px',
    border: 'none',
    outline: 'inherit',
    background: '#5956e9',
    color: 'white'
};


export default function TransactionRow(props) {
    if (!props.statusPaid) {
        statusStyle = {
            padding: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderRadius: '15px',
            border: 'solid 1px red',
            outline: 'inherit',
            background: '#FFFFFF',
            color: 'red',
            fontWeight: 'bold'
        }
    }

    return (

        <div class="row">
            <Grid container paddingTop={2}>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={2} >
                            <span class="tx-dot" >
                                <Typography variant="h6" paddingTop={1.4}>Tx</Typography>
                            </span>
                        </Grid>
                        <Grid item paddingLeft={2} xs={10} display={'flex'}>
                            <Stack minWidth={1}>
                                <Item>
                                    <Typography variant="h7" className="content-address" color="gray" noWrap>0x00cd07d9f827583ac3277b087adcc17669b87eb45280740884583770840f0e14</Typography>
                                </Item>
                                <Item>
                                    <Typography variant="h7" className="content-address" color="#5956E9" noWrap>Ticket Id : 87627982674874274</Typography>
                                </Item>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>$24 MTR</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>
                        <button style={statusStyle}>
                            {props.statusPaid ? 'Paid' : 'Pending'}
                        </button>
                    </Typography>
                </Grid>
                <Grid item xs={3} paddingLeft={3}>
                    <Stack direction={'horizontal'}>
                    <CalendarTodayIcon fontSize="small"/>
                <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }} paddingLeft={1}>SEP 12, 2019</Typography>

                    </Stack>
                </Grid>
            </Grid>

        </div>
    );
}

