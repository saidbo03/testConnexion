import { useState } from "react";
import Connexion from "./components/Connexion/Connexion";
import Home from "./components/Home/Home/Home";
import Inscription from "./components/Inscription/Inscription";
import "./App.css";
function App() {
  const [connected, setConected] = useState(false);
  const [show, setShow] = useState(true);
  const [user,setUser]= useState({ user: "", password: "" ,Date:"",Ville:"",Genre:"",Loisirs:[]})
  return (
    <div className="container">
      {connected ? (
        <Home setConected={setConected} user={user} />
      ) : (
        <>
        {
          show?
          <Connexion setConected={setConected} setShow={setShow} user={user}/>
          :
          <Inscription setShow={setShow} setUser={setUser}/>
        }
          
         
        </>
      )}
    </div>
  );
}

export default App;
