import React, {useState} from 'react'
import LandingPage from './pages/LandingPage';
import './App.css';
import MainPage from './pages/MainPage';

function App() {

  const [start, setStart] = useState(false)
  return (
    <div className="App">
      {
        !start? <LandingPage setStart={setStart}/>: <MainPage />
      }
    </div>
  );
}

export default App;
