import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/api/auth/callback/discord')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to='/game'></Navigate>
}
