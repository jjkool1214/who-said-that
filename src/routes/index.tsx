import { Card, 
        CardHeader,
        CardTitle,
        CardAction,
        CardDescription,
        CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { createClientOnlyFn } from '@tanstack/react-start'

export const Route = createFileRoute('/')({ component: App })

const login = () => {
  console.log("LMFAIO")
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
            <Link to="/game">Sign Up</Link>
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  </div>)
}
