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

const currentUserId = "u-9f33x";
const currentUser = ALL_USERS.find(
  (user) => user.id === currentUserId,
);


function ProfilePage() {
  return (
    <div className="profile-wrapper">
      <div>{currentUser.email}</div>

      <div className="set-dp-wrapper">
        <ProfileDP/>
        
        <EditProfileDP />
      </div>

      <div>Hi {currentUser.displayName}!</div>

      <p>{currentUser ? `signed in as ${currentUser.displayName}` : 'Sign in to save your data'}</p>

      <ChangeColor />

      <Footer />

    </div>
  )
}

export default ProfilePage
