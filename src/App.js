import './App.css';

// Appbar
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
import NewRaffleCard from './components/NewRaffleCard'
import RaffleCard from './components/RaffleCard'
import DashBalance from './components/DashBalance'

// Pages

import TransactionCard from './components/TransactionCard';
import Grid from "@mui/material/Grid"


function App() {
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={1}> <Sidebar />
        </Grid>
        <Grid padding={4} container xs={11} spacing={3}>
          <Grid item xs={12}> <Appbar />
          </Grid>
          <Grid item xs={4}> <NewRaffleCard />
          </Grid>
          <Grid item xs={4}> <RaffleCard prize="70,000"/>
          </Grid>
          <Grid item xs={4}> <RaffleCard prize="130,000"/>
          </Grid>
          <Grid item xs={4}> <DashBalance />
          </Grid>
          <Grid item xs={8}> <TransactionCard />
          </Grid>
        </Grid>
      </Grid>



    </div>
  );
}

export default App;
