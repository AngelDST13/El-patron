import Sidebar from '../components/sidebar.jsx'

function Gastos() {
  return (
    <main className="admin-layout">

      <Sidebar />

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <span className="admin-label">
              FINANZAS
            </span>

            <h1>
              Gastos y Comisiones
            </h1>

          </div>

        </header>


        <section className="dashboard-panel">

          <h2>
            Registro financiero
          </h2>

          <p className="empty-message">
            Aquí estará el registro de gastos y liquidación
            de comisiones.
          </p>

        </section>

      </section>

    </main>
  )
}

export default Gastos