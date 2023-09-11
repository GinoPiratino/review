import { useState } from 'react';
import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Reviewed } from './components/Reviewed/Reviewed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [starCount, setStarCount] = useState(5);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home starCount={starCount} setStarCount={setStarCount} />}
          />
          <Route path="/reviewed" element={<Reviewed starCount={starCount} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

