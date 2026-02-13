import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile/>
}




function Profile() {
  return (
    <div className="profile-wrapper">
      <div>The Nav</div>
      <div>The Settings</div>
    </div>
  )
}

export default Profile
