import './App.css';

// Appbar
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
import NewRaffleCard from './components/NewRaffleCard'
import RaffleCard from './components/RaffleCard'
import DashBalance from './components/DashBalance'

// Pages

import TransactionList from './components/TransactionList';
import Grid from "@mui/material/Grid"


function App() {
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={1}> <Sidebar />
        </Grid>
        <Grid container xs={11} spacing={3}>
          <Grid item xs={12}> <Appbar />
          </Grid>
          <Grid item xs={4}> <NewRaffleCard />
          </Grid>
          <Grid item xs={4}> <RaffleCard />
          </Grid>
          <Grid item xs={4}> <RaffleCard />
          </Grid>
          <Grid item xs={4}> <DashBalance />
          </Grid>
          <Grid item xs={8}> <TransactionList />
          </Grid>
        </Grid>
      </Grid>



    </div>
  );
}

export default App;
