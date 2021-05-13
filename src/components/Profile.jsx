import React from 'react'
import Card from './Card'

const Profile = ({ profile }) => {
  return(
    <Card title='Profile' className='Profile-title'>
      <p className='Profile-desc'>{ profile }</p>
    </Card>
  )
}

export default Profile