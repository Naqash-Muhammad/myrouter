import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './RouterA/About';
import Home from './RouterA/Home';
import Context from './RouterA/Context'; 
import Navbar from './RouterA/Navbar';
import Body from './RouterA/Body';
import {BrowserRouter,Route,} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
   <div>
       <Navbar /> 
                {/* This cod use to Route start here */}
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/context" component={Context} />
                  {/* This cod use to Route start here */}
       <Body />
   </div>
   </BrowserRouter>
   
  );
}

export default App;
