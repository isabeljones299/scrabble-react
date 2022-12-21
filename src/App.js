import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom";
import ScrabbleBoard from './components/ScrabbleBoard.jsx'

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path='/' element={<ScrabbleBoard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
