import logo from './pusheen.gif';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Yes from './Yes';
import Home from './Home';

function App() {

  const onclick = ()=>{
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
                <Routes>
                <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path="/iloveyou"
                        element={<Yes/>}
                    />
             </Routes>
            </Router>
      </header>
    </div>
  );
}

export default App;
