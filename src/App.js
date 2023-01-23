
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { About } from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success")

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success")
    }

  }

  return (
    <Router>
      <div className="App">

        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>    
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/>
          </Routes>

        </div>
      </div >
    </Router>
  );
}

export default App;
