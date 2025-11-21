import { useState } from 'react'
import Connexion from './components/Connexion/Connexion'
import Home from './components/Home/Home/Home'
import './App.css'
function App() {
  const [connected,setConected]=useState(false);
  const [show, setShow] = useState(false);
  const { user, password } = { user: "said", password: "said2003" };
  return (
    <div className='container'>
      {connected?
      <Home setConected={setConected} user={user}/>
      :
      <>
      <Connexion setConected={setConected} setShow={setShow}/>
      {show && (
        <div className="show">
            <p>
                Identifiant : <span>{user}</span>
            </p>
            <p>
                Mot de passe : <span>{password}</span>
            </p>
        </div>
        )}
      </>
      }
      
    </div>
  )
}

export default App
