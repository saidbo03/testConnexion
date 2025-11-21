import React, { useState } from "react";
import "./Inscription.css";

function Inscription({ setShow, setUser }) {
  const [formData, setFormData] = useState({
    identifiant: "",
    password: "",
    date: "",
    ville: "Casablanca",
    genre: "homme",
    loisirs: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoisirChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => {
      const loisirs = checked
        ? [...prev.loisirs, value]
        : prev.loisirs.filter((item) => item !== value);
      return { ...prev, loisirs };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.identifiant.trim() || !formData.password.trim()) {
      return;
    }
    setUser({
      user: formData.identifiant.trim(),
      password: formData.password.trim(),
      Date: formData.date,
      Ville: formData.ville,
      Genre: formData.genre,
      Loisirs: formData.loisirs,
    });
    setShow(true);
  };

  return (
    <div className="container-inscription">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="identifiant-ins">L'identifiant <span style={{color:'red'}}>*</span></label>
        <input
          type="text"
          id="identifiant-ins"
          name="identifiant"
          value={formData.identifiant}
          onChange={handleChange}
        />

        <label htmlFor="password-ins">Mot de passe <span style={{color:'red'}}>*</span></label>
        <input
          type="password"
          id="password-ins"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="birth-ins">Date de naissance</label>
        <input
          type="date"
          id="birth-ins"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="ville-ins">Ville</label>
        <select
          id="ville-ins"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
        >
          <option value="Casablanca">Casablanca</option>
          <option value="Rabat">Rabat</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Fès">Fès</option>
        </select>

        <fieldset>
          <legend>Genre</legend>
          <label>
            <input
              type="radio"
              name="genre"
              value="homme"
              checked={formData.genre === "homme"}
              onChange={handleChange}
            />
            Homme
          </label>
          <label>
            <input
              type="radio"
              name="genre"
              value="femme"
              checked={formData.genre === "femme"}
              onChange={handleChange}
            />
            Femme
          </label>
        </fieldset>

        <fieldset>
          <legend>Loisirs</legend>
          <label>
            <input
              type="checkbox"
              name="loisirs"
              value="sport"
              checked={formData.loisirs.includes("sport")}
              onChange={handleLoisirChange}
            />
            Sport
          </label>
          <label>
            <input
              type="checkbox"
              name="loisirs"
              value="lecture"
              checked={formData.loisirs.includes("lecture")}
              onChange={handleLoisirChange}
            />
            Lecture
          </label>
          <label>
            <input
              type="checkbox"
              name="loisirs"
              value="musique"
              checked={formData.loisirs.includes("musique")}
              onChange={handleLoisirChange}
            />
            Musique
          </label>
        </fieldset>

        <label htmlFor="photo-ins">Photo</label>
        <input type="file" id="photo-ins" name="photo" />

        <button type="submit" id="signup-btn">
          S'inscrire
        </button>
      </form>
      <p className="link" onClick={() => setShow((p) => !p)}>
        I have account already
      </p>
    </div>
  );
}

export default Inscription;
