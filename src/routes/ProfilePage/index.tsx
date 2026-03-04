import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ProfileDP from '../../components/Profile/ProfileDP'
import EditProfileDP from '../../components/Profile/EditProfileDP'
import ChangeColor from '../../components/Profile/ChangeColor'
import Footer from '../../components/Footer/Footer'

import  ALL_USERS  from '../../data/AllUsers'

export const Route = createFileRoute('/ProfilePage/')({
  component: RouteComponent,
})



function RouteComponent() {
  return <ProfilePage />
}

const userInfo = ALL_USERS[1]


function ProfilePage() {
  return (
    <div className="profile-wrapper">
      <div>{userInfo.email}</div>

      <div className="set-dp-wrapper">
        <ProfileDP imageSource={userInfo.displayPicture}/>
        
        <EditProfileDP />
      </div>

      <div>Hi {userInfo.displayName}!</div>

      <p>{userInfo ? `signed in as ${userInfo.displayName}` : 'Sign in to save your data'}</p>

      <ChangeColor />

      <Footer />

    </div>
  )
}

export default ProfilePage
