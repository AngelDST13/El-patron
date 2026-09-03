import heroImage from '../img/barberobryan.png'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            TRADICIÓN • ESTILO • PRECISIÓN
          </span>

          <h1>
            El arte de una
            <span> barbería clásica.</span>
          </h1>

          <p>
            Una experiencia de barbería premium para hombres
            que valoran el estilo, la atención y los detalles.
          </p>

          <div className="hero-buttons">

            <a
              href="#reservar"
              className="btn-primary"
            >
              Agendar Cita Ahora
            </a>

            <a
              href="#servicios"
              className="btn-secondary"
            >
              Ver Servicios
            </a>

          </div>

        </div>

        <div className="hero-image-container">

          <img
            src={heroImage}
            alt="El Patrón Luxury Barbershop"
            className="hero-image"
          />

          <div className="hero-image-overlay">
            <span>EL PATRÓN</span>
            <small>EST. 2024</small>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero