import Sidebar from '../components/sidebar.jsx'

function Citas() {
  return (
    <main className="admin-layout">

      <Sidebar />

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <span className="admin-label">
              GESTIÓN DE CITAS
            </span>

            <h1>
              Calendario
            </h1>

          </div>

        </header>


        <section className="dashboard-panel">

          <h2>
            Agenda de barberos
          </h2>

          <p className="empty-message">
            Aquí estará el calendario de citas.
          </p>

        </section>

      </section>

    </main>
  )
}

export default Citas