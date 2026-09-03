const services = [
  {
    id: 1,
    name: 'Corte Clásico El Patrón',
    price: '$350 MXN',
    duration: '45 min',
    description:
      'Corte personalizado, lavado y acabado profesional.'
  },
  {
    id: 2,
    name: 'Afeitado con Toalla Caliente',
    price: '$300 MXN',
    duration: '30 min',
    description:
      'Afeitado tradicional con toalla caliente y productos premium.'
  },
  {
    id: 3,
    name: 'Perfilado de Barba',
    price: '$250 MXN',
    duration: '30 min',
    description:
      'Diseño y perfilado de barba adaptado a tu rostro.'
  },
  {
    id: 4,
    name: 'Combo Patrón VIP',
    price: '$600 MXN',
    duration: '75 min',
    description:
      'Corte clásico, barba y tratamiento premium.'
  }
]

function Services() {
  return (
    <section
      id="servicios"
      className="services"
    >

      <div className="section-title">

        <span className="section-label">
          NUESTRA CARTA
        </span>

        <h2>
          Servicios Premium
        </h2>

        <p>
          La experiencia clásica de El Patrón.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <article
            key={service.id}
            className="service-card"
          >

            <div className="service-icon">
              ✂
            </div>

            <h3>
              {service.name}
            </h3>

            <p>
              {service.description}
            </p>

            <div className="service-footer">

              <strong>
                {service.price}
              </strong>

              <span>
                {service.duration}
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Services