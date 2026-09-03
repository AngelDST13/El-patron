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
    const { name, value } = e.target

    // 1. Validar campo Nombre: Solo letras y espacios (bloquea números y caracteres especiales)
    if (name === 'nombre') {
      const soloLetras = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
      setForm({ ...form, [name]: soloLetras })
      return
    }

    // 2. Validar campo WhatsApp: Solo números y guiones (bloquea letras)
    if (name === 'whatsapp') {
      const soloNumeros = value.replace(/[^0-9-]/g, '')
      setForm({ ...form, [name]: soloNumeros })
      return
    }

    // Para el resto de inputs (selects, date, time)
    setForm({
      ...form,
      [name]: value
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
            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
            title="Ingresa únicamente letras"
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
            inputMode="numeric"
            pattern="[0-9\-]+"
            maxLength={12}
            title="Ingresa únicamente números"
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