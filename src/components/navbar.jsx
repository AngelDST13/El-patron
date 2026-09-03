import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link
          to="/"
          className="navbar-logo"
        >
          <span>EL PATRÓN</span>
          <small>LUXURY BARBERSHOP</small>
        </Link>

        <nav className="navbar-menu">

          <a href="#servicios">
            Servicios
          </a>

          <a href="#promociones">
            Promociones
          </a>

          <a href="#reservar">
            Reservar
          </a>

          <Link
            to="/login"
            className="navbar-login"
          >
            Personal
          </Link>

        </nav>

      </div>

    </header>
  )
}

export default Navbar