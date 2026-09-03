import { useState } from 'react'

function BookingForm() {

  const [form, setForm] = useState({
    nombre: '',
    whatsapp: '',
    barbero: '',
    servicio: '',
    fecha: '',
    hora: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `
Hola El Patrón.

Quiero reservar una cita.

Nombre: ${form.nombre}
WhatsApp: ${form.whatsapp}
Barbero: ${form.barbero}
Servicio: ${form.servicio}
Fecha: ${form.fecha}
Hora: ${form.hora}
    `

    const encodedMessage = encodeURIComponent(mensaje)

    window.open(
      `https://wa.me/5210000000000?text=${encodedMessage}`,
      '_blank'
    )
  }

  return (
    <section
      id="reservar"
      className="booking"
    >

      <div className="section-title">

        <span className="section-label">
          RESERVA EXPRESS
        </span>

        <h2>
          Reserva tu experiencia
        </h2>

        <p>
          Selecciona tu servicio, barbero y horario.
        </p>

      </div>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            Nombre completo
          </label>

          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />

        </div>

        <div className="form-group">

          <label>
            WhatsApp
          </label>

          <input
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="8888-8888"
            required
          />

        </div>

        <div className="form-group">

          <label>
            Barbero
          </label>

          <select
            name="barbero"
            value={form.barbero}
            onChange={handleChange}
            required
          >

            <option value="">
              Seleccionar barbero
            </option>

            <option value="Mateo">
              Mateo
            </option>

            <option value="Carlos">
              Carlos
            </option>

            <option value="Leo">
              Leo
            </option>

          </select>

        </div>

        <div className="form-group">

          <label>
            Servicio
          </label>

          <select
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            required
          >

            <option value="">
              Seleccionar servicio
            </option>

            <option value="Corte Clásico El Patrón">
              Corte Clásico El Patrón
            </option>

            <option value="Afeitado con Toalla Caliente">
              Afeitado con Toalla Caliente
            </option>

            <option value="Perfilado de Barba">
              Perfilado de Barba
            </option>

            <option value="Combo Patrón VIP">
              Combo Patrón VIP
            </option>

          </select>

        </div>

        <div className="form-group">

          <label>
            Fecha
          </label>

          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>
            Hora
          </label>

          <input
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
          />

        </div>

        <button
          type="submit"
          className="btn-primary booking-button"
        >
          Confirmar Reserva por WhatsApp
        </button>

      </form>

    </section>
  )
}

export default BookingForm