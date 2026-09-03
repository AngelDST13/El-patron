import Sidebar from '../components/sidebar.jsx'
import { Link } from 'react-router-dom'

function Dashboard() {

  const kpis = [
    {
      title: 'Citas de hoy',
      value: '24',
      detail: '+8% vs ayer'
    },
    {
      title: 'Barberos activos',
      value: '4',
      detail: 'De 5 disponibles'
    },
    {
      title: 'Recaudación estimada',
      value: '$8,450',
      detail: 'Meta: $10,000'
    },
    {
      title: 'Ocupación',
      value: '78%',
      detail: '+12% esta semana'
    }
  ]

  return (
    <main className="admin-layout">

      <Sidebar />

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <span className="admin-label">
              PANEL ADMINISTRATIVO
            </span>

            <h1>
              Buenos días, Roberto
            </h1>

          </div>

          <div className="admin-user">
            Administrador
          </div>

        </header>


        <section className="kpi-grid">

          {kpis.map((kpi) => (

            <article
              className="kpi-card"
              key={kpi.title}
            >

              <span>
                {kpi.title}
              </span>

              <strong>
                {kpi.value}
              </strong>

              <small>
                {kpi.detail}
              </small>

            </article>

          ))}

        </section>


        <section className="dashboard-panel">

          <div className="panel-header">

            <div>

              <span>
                AGENDA
              </span>

              <h2>
                Citas de hoy
              </h2>

            </div>

            <Link
              to="/citas"
              className="btn-primary"
            >
              Ver calendario
            </Link>

          </div>


          <div className="appointment-preview">

            <div className="appointment-item">

              <span className="appointment-time">
                10:00
              </span>

              <div className="appointment-client">

                <strong>
                  Carlos Ramírez
                </strong>

                <span>
                  Corte Clásico · Mateo
                </span>

              </div>

              <span className="status confirmed">
                Confirmada
              </span>

            </div>


            <div className="appointment-item">

              <span className="appointment-time">
                11:00
              </span>

              <div className="appointment-client">

                <strong>
                  Alejandro Torres
                </strong>

                <span>
                  Combo Patrón VIP · Carlos
                </span>

              </div>

              <span className="status progress">
                En progreso
              </span>

            </div>


            <div className="appointment-item">

              <span className="appointment-time">
                12:00
              </span>

              <div className="appointment-client">

                <strong>
                  Miguel Herrera
                </strong>

                <span>
                  Perfilado de Barba · Leo
                </span>

              </div>

              <span className="status confirmed">
                Confirmada
              </span>

            </div>

          </div>

        </section>

      </section>

    </main>
  )
}

export default Dashboard