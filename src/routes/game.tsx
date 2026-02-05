import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'
import { createFileRoute } from '@tanstack/react-router'
import { betterAuth } from 'better-auth'

export const Route = createFileRoute('/game')({
  component: RouteComponent,
})

const user = await authClient.getSession()

const bruh = () => {
  console.log(user)
}

function RouteComponent() {
  return (<div>
  <Card>
    <CardHeader>
      <CardTitle>
        OH MY GODDDD SEE DETAILS
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Button onClick={bruh}>SEE IT RN</Button>
    </CardContent>
  </Card>
  </div>)
}
