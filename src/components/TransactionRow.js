import './Components.css';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Item from '@mui/material/Stack'

export default function TransactionRow() {
    return (

        <div class="row">
            <Grid container>
                <Grid item xs={5} >
                    <Stack direction="horizontal">
                        <Item>
                            <span class="tx-dot" >Tx</span>
                        </Item>
                        <Item>
                            <Grid container xs >
                                <Grid item zeroMinWidth >
                                    <Typography variant="h7" className="content-address" color="gray" noWrap>0x00cd07d9f827583ac3277b087adcc17669b87eb45280740884583770840f0e14</Typography>
                                </Grid></Grid>
                        </Item>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>$24 MTR</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>                <span class="content-status">PAID</span>
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h7" className="tx-table-title" sx={{ fontWeight: 700 }}>SEP 12, 2019</Typography>
                </Grid>
            </Grid>
            {/*             <div class="tx-dot-container" >
                <span class="tx-dot" >Tx</span>
            </div>
            <div class="tx-content-container">
                <p class="content-address">0x00cd07d9f827583ac3277b087adcc17669b87eb45280740884583770840f0e14
                </p>
                <p class="content-ticket">Ticket ID: 54578965585dhjsh2</p>
            </div>
            <div class="content-prize" >
                <span>$24 MTR</span>
            </div>
            <div class="content-status-container" >
                <span class="content-status">PAID</span>
            </div>
            <div class="content-date">
                <span>SEP 12, 2019</span>
            </div> */}
        </div>
    );
}

