import { UserIcon } from "@heroicons/react/20/solid";
import { Blog01, Blog02, Blog03 } from "../../assets/images";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";


export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">

        <p className="section-subtitle">Actualités et blogs</p>

        <h2 className="h2 section-title">Derniers flux d'actualités</h2>

        <ul className="blog-list has-scrollbar">

          <li>
            <div className="blog-card">

              <figure className="card-banner">
                <img src={Blog01} alt="The Most Inspiring Interior Design Of 2021" className="w-100" />
              </figure>

              <div className="blog-content">

                <div className="blog-content-top">

                  <ul className="card-meta-list">

                    <li>
                      <a href="#_" className="card-meta-link">
                        <UserIcon className="text-green-500 h-[18px] w-auto"/>

                        <span>par : Administrateur</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#_">Le design d’intérieur le plus inspirant de 2021</a>
                  </h3>

                </div>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <CalendarDaysIcon className="text-green-500 h-[18px] w-auto"/>

                    <time dateTime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <a href="#_" className="read-more-btn">En savoir plus</a>
                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="blog-card">

              <figure className="card-banner">
                <img src={Blog02} alt="Recent Commercial Real intérieur Transactions" className="w-100" />
              </figure>

              <div className="blog-content">

                <div className="blog-content-top">

                  <ul className="card-meta-list">

                    <li>
                      <a href="#_" className="card-meta-link">
                        <UserIcon className="text-green-500 h-[18px] w-auto"/>

                        <span>par : Administrateur</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#_">Transactions immobilières commerciales récentes</a>
                  </h3>

                </div>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <CalendarDaysIcon className="text-green-500 h-[18px] w-auto"/>

                    <time dateTime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <a href="#_" className="read-more-btn">En savoir plus</a>
                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="blog-card">

              <figure className="card-banner">
                <img src={Blog03} alt="Renovating a Living Room? Experts Share Their Secrets"
                  className="w-100" />
              </figure>

              <div className="blog-content">

                <div className="blog-content-top">

                  <ul className="card-meta-list">

                    <li>
                      <a href="#_" className="card-meta-link">
                        <UserIcon className="text-green-500 h-[18px] w-auto"/>

                        <span>par : Administrateur</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#_">Rénover un salon ? Les experts partagent secrets</a>
                  </h3>

                </div>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <CalendarDaysIcon className="text-green-500 h-[18px] w-auto"/>

                    <time dateTime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <a href="#_" className="read-more-btn">En savoir plus</a>
                </div>

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}