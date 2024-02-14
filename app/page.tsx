/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kWnxjMr90j1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen py-12 items-center justify-center space-y-4 md:py-24 md:gap-10">
      <div className="mx-auto flex items-center space-x-2">
        {/* <img
          alt="Logo"
          className="rounded-lg"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        /> */}

          <div className="flex justify-center">
            <img
              alt="Logo"
              className="mt-4 w-32"
              height="100"
              src="/iec.png"
            />
          </div>
        <div className="text-2xl font-bold">IEC Election Platform</div>
      </div>
      <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id-number">ID Number</Label>
            <Input id="id-number" placeholder="Enter your ID number" />
          </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Sign in</Button>
        <Link className="block w-full" href="/register">
          <Button className="w-full" variant="outline">
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

