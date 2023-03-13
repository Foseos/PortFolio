import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> ccueil </Link>
        <Link to="/projects"> Projets </Link>
        <Link to="/experience"> Experience </Link>
        <div class="right-btn">
          <button id="monBoutonNav">
            <a href="CV_LUCAS.pdf" download='CV_LUCAS.pdf' id="lienNav">Télécharger mon CV </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
