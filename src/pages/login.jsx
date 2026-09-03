import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../img/logo.png' // Importación del logo

function Login() {

  const navigate = useNavigate()

  const [role, setRole] = useState('admin')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!email || !password) {
      alert('Por favor completa todos los campos.')
      return
    }

    /*
      Por ahora el login es simulado.
      Posteriormente aquí conectaremos
      Firebase / Supabase / API.
    */

    navigate('/dashboard')
  }

  return (
    <main className="login-page">

      <div className="login-card">

        <Link
          to="/"
          className="login-logo"
        >
          <img 
            src={logoImg} 
            alt="El Patrón Logo" 
            className="login-logo-img" 
          />
          <div className="login-logo-text">
            <h1>
              EL PATRÓN
            </h1>

            <span>
              LUXURY BARBERSHOP
            </span>
          </div>
        </Link>

        <div className="login-title">

          <h2>
            Acceso al Sistema
          </h2>

          <p>
            Ingresa a tu cuenta corporativa
          </p>

        </div>


        <div className="role-selector">

          <button
            type="button"
            className={role === 'admin' ? 'active' : ''}
            onClick={() => setRole('admin')}
          >
            Administrador
          </button>

          <button
            type="button"
            className={role === 'barber' ? 'active' : ''}
            onClick={() => setRole('barber')}
          >
            Barbero
          </button>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Correo / Identificador
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@elpatron.com"
            />

          </div>


          <div className="form-group">

            <label>
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

          </div>


          <div className="login-options">

            <label>
              <input type="checkbox" />
              Mantener sesión
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              ¿Olvidaste tu contraseña?
            </button>

          </div>


          <button
            type="submit"
            className="btn-primary login-button"
          >
            Ingresar
          </button>

        </form>


        <Link
          to="/"
          className="back-home"
        >
          ← Volver al sitio
        </Link>

      </div>

    </main>
  )
}

export default Login