import React from 'react'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div>

      <Navbar />

      <div className='container mt-5'>

        <div className='card p-4'>

          <h3>User Profile</h3>

          <p>Name: John Doe</p>

          <p>Email: john@gmail.com</p>

        </div>

      </div>

    </div>
  )
}

export default Profile