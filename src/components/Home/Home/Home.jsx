import React from "react";
import "./Home.css";

function Home({ user, setConected }) {
  return (
    <div className="home">
      <h1>Espace membre</h1>
      <p className="welcome">
        Bonjour <span>{user}</span>, vous êtes connecté.
      </p>
      <p className="instructions">
        Cliquez sur le bouton ci-dessous pour vous déconnecter en toute
        sécurité.
      </p>
      <button
        type="button"
        className="logout"
        onClick={() => setConected(false)}
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default Home;
