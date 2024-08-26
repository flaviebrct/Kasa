import React from "react";
import FooterLOGO from "../img/LOGO_footer.svg";

export default function Footer() {
  return (
    <section className="footerContainer">
      <div className="creditFooter">
        <img className="logoFooter" src={FooterLOGO} alt="Logo 'Kasa'" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </section>
  );
}
