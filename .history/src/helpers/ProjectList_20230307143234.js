import Axereal from "../assets/Axereal.jpg";
import Musee from "../assets/musee.jpg";
import SNCF from "../assets/SNCF.jpg";
import PECHEUR from "../assets/Pecheur.jpg";
import AMAP from "../assets/Amap.jpg";
import Portfolio from "../assets/portfolio.jpg";
import Chiffrement from "../assets/chiffrement.jpg"
import Papeterie from "../assets/papeterie.jpg"
import CV from "../assets/CV.jpg"
import Allier_Test from "../assets/Allier_Test.jpg"
import Recherche_et_Dev from "../assets/Recherche.jpg"
import SNCF_PDF from "../assets/Mission_SNCF/SNCF.pdf"
import AMAP_PDF from "../assets/Mission_AMAP/AMAP.pdf"
import Papeterie_PDF from "../assets/Mission_Papeterie/Vichy Papeterie.pdf"
import Allier_Test_PDF from "../assets/Mission_Allier_Test/ALLIER TESTS.pdf"
import Film from "../assets/Film.jpg"
import Allier_Test_PDF from "../assets/Mission_Axereal/Missi.pdf"

export const ProjectList = [
  {
    name: "CV/Letrres de Motivations",
    image: CV,
    skills: "Rédaction",
    content: <p style={{textAlign: "center"}}>Pour cette missions j'ai developés la connaissance des normes et des conventions professionnelles, 
      la capacité à synthétiser les informations, la capacité à mettre en avant les compétences et les réalisations les plus pertinentes, 
      et la capacité à rédiger un texte clair, concis et convaincant.</p>
  },
  {
    name: "Portfolio",
    image: Portfolio,
    skills: "React Native, JavaScript, HTML, CSS",
    content: <p style={{textAlign: "center"}}>Pour cette missions j'ai developés mes compétences en React Native ainsi quand HTML/CSS/Javascript 
    pour pouvoir vous proposer le portfolio que vous etes entrain de regarder.<br />
    De plus j'ai du faire beaucoup de Recherche notamanent sur React pour pouvoir vous proposez ce portfolio</p>
  },
  {
    name: "Gestion de Formation",
    image: SNCF,
    skills: "Python",
    content: 
    <div id="center-button">
      <button id="monBouton">
        <a href={SNCF_PDF} target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Axéréal élevage",
    image: Axereal,
    skills: "Bootstrap, HTML, CSS, Bash",
    <div id="center-button">
      <button id="monBouton">
        <a href={Mission_Axereal} target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Gestion des Contrats et Paysans/Mangeurs",
    image: AMAP,
    skills: "PHP, HTML, CSS, Symfony",
    content:
    <div id="center-button">
      <button id="monBouton">
        <a href={AMAP_PDF} target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Pecheur.com",
    image: PECHEUR,
    skills: "ASP.NET, C#, Razor, MySql",
  },
  {
    name: "Musée des celestins",
    image: Musee,
    skills: "C#",
  },
  {
    name: "Allier Test",
    image: Allier_Test,
    skills: "C#, PHP, XML",
    content:
    <div id="center-button">
      <button id="monBouton">
        <a href={Allier_Test_PDF} target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Chiffrement Rijndael - chaines/fichiers binaires",
    image: Chiffrement,
    skills: "C# (Orienté Cybersécurité)",
  },
  {
    name: "Vichy Papeterie",
    image: Papeterie,
    skills: "C#, Service Web, MySql",
    content:
    <div id="center-button">
      <button id="monBouton">
        <a href={Papeterie_PDF} target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Recherche & Developement",
    image: Recherche_et_Dev,
    skills: "C#, ASP.NET, Razor",
    content: 
    <div id="center-button">
      <button id="monBouton">
        <a href="" target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Musée des Celestins (Mobile)",
    image: Musee,
    skills: "Xamarin.Forms, C#",
    content: 
    <div id="center-button">
      <button id="monBouton">
        <a href="" target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
  {
    name: "Recherche de Film (Mobile)",
    image: Film,
    skills: "Xamarin.Forms, Web service, C#",
    content: 
    <div id="center-button">
      <button id="monBouton">
        <a href="" target="_blank" id="lien">Plus D'informations</a>
      </button>
    </div>
  },
];
