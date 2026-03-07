import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import Layout from "../components/AppLayout/Layout"
export const Route = createRootRoute({
  component: Layout,
})

