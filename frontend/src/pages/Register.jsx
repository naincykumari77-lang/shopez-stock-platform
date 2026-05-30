import React, { useState } from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'

import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] =
    useState({

      name: '',
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

      await axios.post(

        'http://localhost:5000/api/auth/register',

        formData

      )

      alert('Registration Successful')

      navigate('/login')

    } catch (error) {

      alert('Registration Failed')

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
                User Register
              </h3>

              <form onSubmit={handleSubmit}>

                <input
                  type='text'
                  placeholder='Name'
                  className='form-control mb-3'
                  name='name'
                  onChange={handleChange}
                  required
                />

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

                  Register

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Register