import { MapPinIcon } from "@heroicons/react/24/solid";
import { Author } from "../assets/images";
import StarBtn from "../elements/StarBtn";
import ModalProp from "./ModalProp";

export default function PropertyCard({ item }) {
  return (
    <div className="col-span-1 property-card rounded-xl">
      <figure className="card-banner rounded-xl">
        <ModalProp type="" compo={
          <img src={`${process.env.PUBLIC_URL}/images/${item.img}`} alt={item.title} className="w-100" />
        } house_id={item.id}/>
        {
          item.type === "rent" ?
            (<div className="card-badge green">À Louer</div>)
            : (<div className="card-badge orange">À Vendre</div>)
        }
        <div className="banner-actions">

          <button className="banner-actions-btn">
            <MapPinIcon className="h-4 w-auto" />

            <address>{item.location}</address>
          </button>
        </div>

      </figure>


      <div className="card-content">

        <div className="card-price">
          <strong>{item.price} MAD</strong>{item.type === "rent" ? "/Mois" : ""}
        </div>

        <h3 className="h3 card-title">
          {item.title}
        </h3>

        <p className="card-text">
          {item.details}
        </p>

        <ul className="card-list">

          <li className="card-item">
            <strong>{item.bedrooms}</strong>
            <span>Chambres</span>
          </li>

          <li className="card-item">
            <strong>{item.bathrooms}</strong>
            <span>Salles de Bains</span>
          </li>

          <li className="card-item">
            <strong>{item.squareft}</strong>
            <span>Pieds Carrés</span>
          </li>

        </ul>

      </div>
      <div className="card-footer">
        <div className="card-author">
          <figure className="author-avatar">
            <img src={Author} alt="William Seklo" className="w-100" />
          </figure>
          <div>
            <p className="author-name">
            Administrateur
            </p>
            <p className="author-title">Agent immobilier</p>
          </div>
        </div>
        <div className="card-footer-actions">
          <ModalProp type="modal" house_id={item.id} />
          <StarBtn house_id={item.id} />
        </div>
      </div>
    </div>
  )
}