import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navpage from './Navpage';
import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';
;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navpage />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2/:id" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
