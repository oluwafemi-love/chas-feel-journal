import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/MyFavourites/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/MyFavourites/"!</div>
}
