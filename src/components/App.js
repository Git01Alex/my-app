import { TextField } from '@mui/material';
import logo from '../pictures/logo.svg';
import '../styles/App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <p>
          <Button variant="outlined" onClick={alertsign }>Sign in</Button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function alertsign(){alert("Esta funcionando" );}

export default App;
