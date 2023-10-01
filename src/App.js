import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";


function App() {
  return (
    
    <div className="App">
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
      <div className="box">
       <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} /> 
    </div>
    </div>
    
  
  );
}

export default App;
