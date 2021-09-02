import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Create from "./components/Create"
import './App.css';
import {
  BrowserRouter as Router,
  
  Route
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <hr />
      <Route exact path="/">
      <Content />
      </Route>
      <Route path="/create" component={Create} />
      </Router>
    </div>
  );
}

export default App;
