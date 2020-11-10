import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import { Dashboard } from "./pages"

function App() {
  return (
      <Router>
        <Route path="/x" component={Dashboard}/>
      </Router>

  );
}

export default App;
