import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const navigate = useNavigate()

  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {

    logout()

    navigate('/login')

  }

  return (
    <>

      {/* SALE BAR */}

      <div
        className='text-center text-white py-2 fw-bold'
        style={{
          background:
            'linear-gradient(to right, #ff416c, #ff4b2b)',
          fontSize: '15px'
        }}
      >
        🔥 MEGA SALE LIVE NOW | UP TO 70% OFF |
        FREE DELIVERY AVAILABLE 🔥
      </div>

      {/* NAVBAR */}

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow'>

        <div className='container'>

          <Link
            className='navbar-brand fw-bold fs-2'
            to='/'
          >
            ShopEZ
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='collapse navbar-collapse'
            id='navbarNav'
          >

            <ul className='navbar-nav ms-auto align-items-center gap-2'>

              <li className='nav-item'>
                <Link
                  className='nav-link fw-semibold'
                  to='/'
                >
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link fw-semibold'
                  to='/products'
                >
                  Products
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link fw-semibold'
                  to='/cart'
                >
                  Cart
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link fw-semibold'
                  to='/orders'
                >
                  Orders
                </Link>
              </li>

              {user ? (
                <>
                  <li className='nav-item'>
                    <span className='nav-link text-warning fw-bold'>
                      Welcome {user.name}
                    </span>
                  </li>

                  {user.isAdmin && (
                    <li className='nav-item'>
                      <Link
                        className='btn btn-danger fw-bold'
                        to='/admin'
                      >
                        Admin
                      </Link>
                    </li>
                  )}

                  <li className='nav-item'>
                    <button
                      className='btn btn-warning'
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link
                      className='btn btn-light'
                      to='/login'
                    >
                      Login
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      className='btn btn-warning'
                      to='/register'
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}

            </ul>

          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar