// import React from "react";

// const Footer = () => {
//   // Récupère l'année actuelle
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-mentions">
//           <p>
//             © {currentYear} Ytty — Tous droits réservés
//           </p>
//           <p className="footer-links">
//             <a href="/protection-des-donnees" className="underline-hover">
//               Protection des données
//             </a>
//             |
//             <a href="/mentions-legales" className="underline-hover">
//               Mentions légales
//             </a>
//             |
//             <a href="/politique-de-confidentialite">
//               Politique de confidentialité
//             </a>
//             |
//             <a href="/conditions-generales-dutilisation">
//               Conditions générales d’utilisation
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-mentions">
          <p>© {currentYear} Ytty — Tous droits réservés</p>
          <p className="footer-links">
            <Link to="/protection-des-donnees" className="underline-hover">
              Protection des données
            </Link>
            {" | "}
            <Link to="/mentions-legales" className="underline-hover">
              Mentions légales
            </Link>
            {" | "}
            <Link to="/politique-de-confidentialite">
              Politique de confidentialité
            </Link>
            {" | "}
            <Link to="/conditions-generales-dutilisation">
              Conditions générales d’utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

