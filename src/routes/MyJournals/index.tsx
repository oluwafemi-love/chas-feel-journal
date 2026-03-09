import React from 'react'
import { Link } from "@tanstack/react-router";
import { createFileRoute } from '@tanstack/react-router'
import DisplayMyJournals from './DisplayMyJournals';
import AddJournalByText from '../../components/AddJournalByText/AddJournalByText';



export const Route = createFileRoute('/MyJournals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <DisplayMyJournals />
      <div>Hello</div>
      <AddJournalByText size="1rem" backgroundColor="#000" color="#fff"/>
    </>

  )
}

