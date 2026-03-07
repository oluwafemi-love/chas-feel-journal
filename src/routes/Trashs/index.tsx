import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Trashs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Trashs/"!</div>
}
