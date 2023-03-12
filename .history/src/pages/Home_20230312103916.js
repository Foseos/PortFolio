import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Bonjour je suis Lucas Dachez</h2>
        <div className="prompt">
          <p>Etudiant en BTS SIO spécialité SLAM</p>
          <LinkedInIcon /></a>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,
               BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java, .NET,
              MySQL, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C# </span>
          </li>
        </ol>
      </div>
      <div className="plaquette">
        <h1> Compétences du BTS SIO </h1>
      </div>
      <div className="Competences">
        <ol className="list">
            <li className="item">
              <h2> Analyse/Modelisation </h2>
              <span>
              <p>Analyse et modélisation : UML, schéma relationnel des données.</p>
              <p>Création et évolution d’un schéma de données, modification et interrogation des données, utilisateurs et autorisations, vues sur les tables.</p> 
              <p>Procédures stockées, curseurs, déclencheurs…</p>
              </span>
            </li>
            <li className="item">
              <h2> Developement </h2>
              <span>
                  <p>Programmation procédurale et objet.</p>
                  <p>Mise en œuvre d’interfaces graphiques (Windows Forms, XAML/WPF)</p>
                  <p>« Mapping » objet – relationnel : LINQ to SQL</p>
                  <p>Techniques de liaison de données («Binding»)</p>
                  <p>Architecture 3 couches et MVC. Web Services REST</p>
                  <p>Xamarin.Android et Xamarin.Forms</p>

                  <p>Développement Web </p>
                  <p> HTML/CSS</p>
                  <p> PHP / ASP.NET / RAZOR</p>
                  <p>Techniques de débogage. Gestion d’exceptions. Gestion des versions (Git / GitHub).</p>
                </span>
            </li>
            <li className="item">
              <h2> Cybersécurité </h2>
              <span>
                  <p>Étapes de mise en conformité, notification de violation de données personnelles, logiciel d'analyse d'impact (AIPD), 
                    préservation de l'identité numérique d'une organisation... Modèles de chartes : informatique, RGPD…</p>
                  <p>Eléments de sécurité : web / PHP, BD / MySQL, bases des techniques de chiffrement en .NET / C#</p>
                  <p>Eléments de sécurité BD / MySQL : Vulnérabilités des bases de données / 
                    Risques dans les manipulations de données / 
                    Injections SQL /	
                    Utilisateurs & privilèges /	
                    Vues sur les tables (CHECK OPTION) </p>
                    <p>Techniques de chiffrement en .NET / C# (éléments de base) : Mise en œuvre d’algorithmes simples de chiffrement</p>
                    <p>Développement Web ASP.NET : Autorisations par attributs, Cookies sécurisés, DES / AES, Injections SQL & XSS, Authentification & Mots de passe, 
                        email sécurisé, Vol de session, Razor & validation MVC</p>
              </span>
            </li>
          </ol>
      </div> 
      <div id="center-button">
        <button id="monBouton">
          <a href="Plaquette SLAM.pdf" download id="lien">Plaquette du BTS SIO</a>
        </button>
        <button id="monBouton">
          <a href="Tableau des Compétences.pdf" download id="lien">Tableau des Compétences</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
