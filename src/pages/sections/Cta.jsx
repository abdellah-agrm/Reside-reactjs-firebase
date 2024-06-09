export default function Cta() {
  return (
    <section className="cta">
      <div className="container">

        <div className="cta-card bg-green-600">
          <div className="card-content">
            <h2 className="h2 card-title">A la recherche d'une maison de rêve?</h2>

            <p className="card-text">Nous pouvons vous aider à réaliser votre rêve d'une nouvelle maison</p>
          </div>

          <a href="#property" className="btn cta-btn">
            <span>Explorer les propriétés</span>

            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>

      </div>
    </section>
  )
}