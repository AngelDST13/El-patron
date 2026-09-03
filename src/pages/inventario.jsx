import Sidebar from '../components/sidebar.jsx'

function Inventario() {
  return (
    <main className="admin-layout">

      <Sidebar />

      <section className="admin-content">

        <header className="admin-header">

          <div>

            <span className="admin-label">
              OPERACIONES
            </span>

            <h1>
              Inventario
            </h1>

          </div>

        </header>


        <section className="dashboard-panel">

          <h2>
            Inventario y Stock
          </h2>

          <p className="empty-message">
            Aquí estará el control de productos y consumibles.
          </p>

        </section>

      </section>

    </main>
  )
}

export default Inventario