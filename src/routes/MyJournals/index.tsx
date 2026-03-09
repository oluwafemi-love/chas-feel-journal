import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import DisplayMyJournals from './DisplayMyJournals';
import FloatingButtons  from '../../components/FloatingButtons/FloatingButtons'


export const Route = createFileRoute('/MyJournals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <DisplayMyJournals />
      {/* Todo: If it is mobile use floating button, if it is tablet / desktop use DynamicInputCombo */}
      <FloatingButtons />
    </>

  )
}

