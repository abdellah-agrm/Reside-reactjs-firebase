import { BuildingOfficeIcon, HomeIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";
import { AboutBanner01, AboutBanner02 } from "../../assets/images";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <figure className="about-banner">
          <img src={AboutBanner01} alt="House interior" />

          <img src={AboutBanner02} alt="House interior" className="abs-img" />
        </figure>

        <div className="about-content">

          <p className="section-subtitle">À propos de nous</p>

          <h2 className="h2 section-title">Le premier marché de location immobilière.</h2>

          <p className="about-text">
          Plus de 80 personnes travaillent pour nous dans plus de 40 pays à travers le monde. Cette étendue de couverture mondiale, combinée à des services spécialisés
          </p>

          <ul className="about-list">

            <li className="about-item">
              <div className="about-item-icon">
                <HomeIcon className="h-5 w-auto text-green-soda"/>
              </div>

              <p className="about-item-text">Conception de maison intelligente</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <StarIcon className="h-5 w-auto text-green-soda"/>
              </div>

              <p className="about-item-text">Belle scène autour</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <BuildingOfficeIcon className="h-5 w-auto text-green-soda"/>
              </div>

              <p className="about-item-text">Style de vie d'exception</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ShieldCheckIcon className="h-5 w-auto text-green-soda"/>
              </div>

              <p className="about-item-text">Sécurité complète 24h/24 et 7j/7</p>
            </li>

          </ul>

          <p className="callout">
            "Enimad minim veniam quis nostrud exercitation
            llamco laboris. Lorem ipsum dolor sit amet"
          </p>

          <a href="#service" className="btn">Nos Services</a>

        </div>

      </div>
    </section>
  )
}