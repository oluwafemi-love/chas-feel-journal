import React from 'react'
import { Link } from "@tanstack/react-router";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Journal/Journal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Journal />
}

function Journal() {
  return (
    <>
      <div className="text-3xl font-bold underline">
        My Journal
      </div>

     
    </>
  )
}

export default Journal
