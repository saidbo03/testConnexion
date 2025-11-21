import React, { useState } from "react";
import { FaKey } from "react-icons/fa";

import "./Connexion.css";
function Connexion({ setConected,setShow }) {
  const [data, setData] = useState({ identifiant: "", password: "" });
  const [erreurs, setErreurs] = useState({
    identifiant: false,
    password: false,
  });
  function VerfierData(event) {
    event.preventDefault();
    if (data.identifiant !== "said") {
      setErreurs({ erreurs, identifiant: true });
    } else if (data.password !== "said2003") {
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
          onChange={(e) => setData({ ...data, identifiant: e.target.value })}
        />
        {erreurs.identifiant && (
          <p className="erreur">Votre identifiant est incorrect</p>
        )}
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {erreurs.password && (
          <p className="erreur">Votre mot de passe est incorrect</p>
        )}
        <button type="submit" id="connexion" onClick={(e) => VerfierData(e)}>
          Se connecter
        </button>
      </form>
      <div
        className="icons"
        onClick={() => setShow(p=>!p)}
      >
        <FaKey />
      </div>
      
    </div>
  );
}

export default Connexion;
