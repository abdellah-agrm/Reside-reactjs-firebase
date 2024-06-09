import { Service01,Service02 } from "../../assets/images";

export default function Service() {
  return (
    <section className="service" id="service">
      <div className="container">

        <p className="section-subtitle">Nos Services</p>

        <h2 className="h2 section-title">Notre objectif principal</h2>

        <ul className="service-list">

          <li>
            <div className="service-card">

              <div className="card-icon bg-green-100 rounded-full p-5">
                <img src={Service01} className="h-28 w-auto" alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#_">Acheter une maison</a>
              </h3>

              <p className="card-text">
              plus de 30 maisons à vendre disponibles sur le site Web, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.
              </p>

              <a href="#property" className="card-link">
                <span>Trouver une maison</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>

            </div>
          </li>

          <li>
            <div className="service-card">

              <div className="card-icon bg-green-100 rounded-full p-5">
                <img src={Service02} className="h-28 w-auto" alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#_">Louer une maison</a>
              </h3>

              <p className="card-text">
              plus de 30 maisons à vendre disponibles sur le site Web, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.
              </p>

              <a href="#property" className="card-link">
                <span>Louer une maison</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}