import { Link } from 'react-router-dom'
import logoImg from '../img/logo.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img 
            src={logoImg} 
            alt="El Patrón Logo" 
            style={{ height: '40px', width: 'auto', objectFit: 'contain', marginRight: '10px' }} 
          />
          <div>
            <span>EL PATRÓN</span>
            <small>LUXURY BARBERSHOP</small>
          </div>
        </Link>

        <nav className="navbar-menu">
          <a href="#servicios">Servicios</a>
          <a href="#promociones">Promociones</a>
          <a href="#reservar">Reservar</a>
          <Link to="/login" className="navbar-login">
            Personal
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar