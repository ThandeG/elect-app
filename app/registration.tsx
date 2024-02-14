/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2uZZM9yMv1j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f0f0]">
      <Card className="w-full max-w-sm bg-blue-100">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Registration</CardTitle>
          <CardDescription>Please fill in the required information to create your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" required type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">ID</Label>
            <Input id="id" placeholder="johndoe123" required type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" placeholder="Confirm Password" required type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Register</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

