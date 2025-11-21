import React, { useState } from "react";
import { FaKey } from "react-icons/fa";

import "./Connexion.css";
function Connexion({ setConected,setShow ,user}) {
  const [data, setData] = useState({ identifiant: "", password: "" });
  const [erreurs, setErreurs] = useState({
    identifiant: false,
    password: false,
  });
  function VerfierData(event) {
    event.preventDefault();
    if (data.identifiant !== user.user && user.user!=="") {
      setErreurs({ erreurs, identifiant: true });
    } else if (data.password !== user.password && user.password!=="") {
        setErreurs({ erreurs, identifiant: false })
      setErreurs({ ...erreurs, password: true });
    } else {
      setConected(true);
    }
  }
  return (
    <div className="container-connexion">
      <h1>Connexion</h1>
      <form action="">
        <label htmlFor="identifiant">L'identifiant</label>
        <input
          type="text"
          id="identifiant"
          name="identifiant"
          onChange={(e) => setData({ ...data, identifiant: e.target.value.trim() })}
        />
        {erreurs.identifiant && (
          <p className="erreur">Votre identifiant est incorrect</p>
        )}
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value.trim() })}
        />
        {erreurs.password && (
          <p className="erreur">Votre mot de passe est incorrect</p>
        )}
        <button type="submit" id="connexion" onClick={(e) => VerfierData(e)}>
          Se connecter
        </button>
      </form>
      <p
        className="link"
        onClick={() => setShow(p=>!p)}
      >
        I don't have account
      </p>
      
    </div>
  );
}

export default Connexion;
