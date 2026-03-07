import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/QuotesPage/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/QuotesPage/"!</div>
}
