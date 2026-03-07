import { createFileRoute } from '@tanstack/react-router'
import Welcome from "../components/WelcomeScreen/Welcome"

export const Route = createFileRoute('/')({
  component: Welcome,
})

