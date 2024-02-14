/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SsBFlBNzO8M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="grid items-center min-h-screen px-4 space-y-4 md:px-6">
      <div className="mx-auto w-full max-w-sm space-y-4">
      <div className="flex justify-center">
            <img
              alt="Logo"
              className="mt-4 w-32"
              height="100"
              src="/iec.png"
            />
          </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id-number">ID Number</Label>
            <Input id="id-number" placeholder="Enter your ID number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </form>
        <div className="space-y-2">
          <Link className="w-full" href="/">
            <Button className="w-full bg-white text-black" type="button">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

