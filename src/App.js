import logo from './logo.svg';
import './App.css';

function App() {
  const appLogo = process.env.REACT_APP_LOGO;
  return (
    <div className="App">
      <img src={appLogo ? `/${appLogo}` : logo} className="App-logo" alt="logo" />
        <div className='maintenance-container'>
            <img src={'/maintenance.png'} alt='maintenance' />
            <h1>Under Maintenance</h1>
        </div>
        <p>Sorry for the inconvenience. We'll be back soon.</p>
    </div>
  );
}

export default App;
