import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/main" element={<Main />} />
          <Route path ="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
