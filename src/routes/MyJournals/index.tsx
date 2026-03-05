import React from 'react'
import { Link } from "@tanstack/react-router";
import { createFileRoute } from '@tanstack/react-router'
import DisplayMyJournals from './DisplayMyJournals';



export const Route = createFileRoute('/MyJournals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DisplayMyJournals />
}

