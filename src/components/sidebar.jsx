import { NavLink, Link } from 'react-router-dom'

function Sidebar() {

  const getClass = ({ isActive }) => {
    return isActive
      ? 'sidebar-link active'
      : 'sidebar-link'
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">

        <Link to="/dashboard">

          <h2>
            EL PATRÓN
          </h2>

          <span>
            LUXURY BARBERSHOP
          </span>

        </Link>

      </div>


      <nav className="sidebar-nav">

        <p className="sidebar-title">
          PRINCIPAL
        </p>

        <NavLink
          to="/dashboard"
          className={getClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/citas"
          className={getClass}
        >
          Citas
        </NavLink>


        <p className="sidebar-title">
          OPERACIONES
        </p>

        <NavLink
          to="/inventario"
          className={getClass}
        >
          Inventario
        </NavLink>

        <NavLink
          to="/gastos"
          className={getClass}
        >
          Gastos
        </NavLink>

        <NavLink
          to="/whatsapp"
          className={getClass}
        >
          WhatsApp
        </NavLink>

      </nav>


      <div className="sidebar-bottom">

        <Link
          to="/"
          className="sidebar-site"
        >
          ← Volver al sitio
        </Link>

      </div>

    </aside>
  )
}

export default Sidebar