import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import PaginaInicio from '../pages/paginaInicio.jsx'
import Login from '../pages/login.jsx'
import Dashboard from '../pages/dashboard.jsx'
import Citas from '../pages/citas.jsx'
import Inventario from '../pages/inventario.jsx'
import Gastos from '../pages/gastos.jsx'
import WhatsApp from '../pages/whatsapp.jsx'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PÁGINA PRINCIPAL */}
        <Route
          path="/"
          element={<PaginaInicio />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* PANEL ADMINISTRATIVO */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/citas"
          element={<Citas />}
        />

        <Route
          path="/inventario"
          element={<Inventario />}
        />

        <Route
          path="/gastos"
          element={<Gastos />}
        />

        <Route
          path="/whatsapp"
          element={<WhatsApp />}
        />

        {/* CUALQUIER RUTA DESCONOCIDA */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default Routing