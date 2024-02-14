/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VbHd1D5jROT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm bg-blue-100 relative">
        <CardHeader className="flex justify-between items-center space-y-2">
          <Link
            className="text-lg font-medium absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            href="#"
          >
            Register
          </Link>
          <CardTitle className="text-4xl">Login</CardTitle>
          <CardDescription className="text-lg">Enter your email and password to login to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-lg" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder=" " required type="email" />
          </div>
          <div className="space-y-2">
            <Label className="text-lg" htmlFor="password">
              Password
            </Label>
            <Input id="password" placeholder=" " required type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="text-lg">Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
