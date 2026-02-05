import { Card, 
        CardHeader,
        CardTitle,
        CardAction,
        CardDescription,
 } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { createFileRoute} from '@tanstack/react-router'
import { createAuthClient } from 'better-auth/client'

export const Route = createFileRoute('/')({ component: App })

const authClient = createAuthClient()
const login = async () => {
    const data = await authClient.signIn.social({
        provider: "discord"
    })
}

function App() {
  return (<div className='flex items-center justify-center h-screen'>
    <Card className=' w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Login to your Discord</CardTitle>
        <CardDescription>
          You Have no choice
        </CardDescription>
        <CardAction>
          <Button variant="default" className='hover:bg-sky-500' onClick={login}>
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  </div>)
}
