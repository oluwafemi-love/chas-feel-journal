import React from 'react'
import { Link } from "@tanstack/react-router";
import { createFileRoute } from '@tanstack/react-router'
import Journal from '../../components/Journal/Journal';

export const Route = createFileRoute('/MyJournals/MyJournals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MyJournals />
}

function MyJournals() {
  return (
    <>
      <div className="text-3xl font-bold underline">
        My Journals Page
      </div>

      <Journal />
    </>



  )
}

export default MyJournals
