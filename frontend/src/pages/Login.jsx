import React, {
  useContext,
  useState
} from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'

import { AuthContext } from '../context/AuthContext'

import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const { login } =
    useContext(AuthContext)

  const [formData, setFormData] =
    useState({

      email: '',
      password: ''

    })

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const { data } = await axios.post(

        'http://localhost:5000/api/auth/login',

        formData

      )

      login(data)

      alert('Login Successful')

      navigate('/')

    } catch (error) {

      alert('Invalid Credentials')

    }

  }

  return (

    <div>

      <Navbar />

      <div className='container mt-5'>

        <div className='row justify-content-center'>

          <div className='col-md-5'>

            <div className='card p-4 shadow'>

              <h3 className='mb-4 text-center'>
                User Login
              </h3>

              <form onSubmit={handleSubmit}>

                <input
                  type='email'
                  placeholder='Email'
                  className='form-control mb-3'
                  name='email'
                  onChange={handleChange}
                  required
                />

                <input
                  type='password'
                  placeholder='Password'
                  className='form-control mb-3'
                  name='password'
                  onChange={handleChange}
                  required
                />

                <button className='btn btn-dark w-100'>

                  Login

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Login