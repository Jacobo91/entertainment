import './App.css';
import { SplitScreen } from '../components/screen-layout/SplitScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components/navbar/Navbar';
import { Main } from '../components/main/Main';


function App() {
  return (
    
      <Router>
        <div className="App">
          <SplitScreen>
            <NavBar />
            <Main />
          </SplitScreen>
        </div>
      </Router>
  );
  
}

export default App;
