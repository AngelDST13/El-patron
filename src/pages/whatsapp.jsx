import Sidebar from '../components/sidebar.jsx'

function WhatsApp() {
  return (
    <main className="admin-layout">

      <Sidebar />

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <span className="admin-label">
              CONCIERGE
            </span>

            <h1>
              WhatsApp
            </h1>

          </div>

        </header>


        <section className="dashboard-panel">

          <h2>
            Bandeja de WhatsApp
          </h2>

          <p className="empty-message">
            Aquí estará la bandeja de conversaciones
            con los clientes.
          </p>

        </section>

      </section>

    </main>
  )
}

export default WhatsApp