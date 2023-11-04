import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage';
import Politics from './Politics'
import Business from './Business'
import Entertainment from './Entertainment';
import Environment from './Environment';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Homepage/>}  />
          <Route path="/Environment" element={<Environment/>}  />
          <Route path="/Entertainment" element={<Entertainment/>}  />
          <Route path='/Politics' element={<Politics/>} />
          <Route path='/Business' element={<Business/>} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
