/**
 * DO THAT THING YOU DID IN YOUR REGISTER INPUTS
 * THIS IS THE OFFICLE LOGIN
 * v0 by Vercel.
 * @see https://v0.dev/t/ewMxyf6EiPY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client"
import { Button } from "@/components/ui/button"
import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, firestore } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email has not been entered")
    }
    if (!password) {
      setPasswordError("Password has not been entered")
    }
    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
        const user = userCredentials.user;

        console.log("Login with:", user, email);
        router.push("/party") //if the password and email has been entered then push to the party page

      })
    }
  }


  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 flex justify-center">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <img
              alt="Logo"
              className="w-16"
              height="40"
              src="/IEC9.png"
            />
          </div>
          <div className="flex gap-4">
            <Link href="/register">
              <Button className="text-sm bg-black text-white" variant="outline">
                Register
              </Button>
            </Link>
            <Link href="/">
              <Button className="text-sm bg-black text-white" variant="outline">
                View Results
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-center">Political Parties</h1>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Choose your party wisely. Your vote matters.
        </p>
        <div className="flex justify-center">
          <div className="flex">
            <div className="container px-4 flex flex-col items-center">
              <Card className="p-8 bg-sky-200 dark:bg-sky-900 mx-auto">
                <CardHeader className="grid gap-1 text-center">
                  <CardTitle className="text-2xl font-bold">Login</CardTitle>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label className="text-base" htmlFor="id">
                        Email
                      </Label>
                      <Input id="email"
                        placeholder="m@example.com"
                        type="email" required
                        value={email}
                        onChange={handleEmailChange} />
                      {emailError && (<p className="text-red-500 text-sm">{emailError}</p>)}
                      {/* //ADD EMAIL AND PASSWORD AND REMOVE EMAIL NUMBER*/}
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-base" htmlFor="password">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange} />
                      {passwordError && (<p className="text-red-500 text-sm">{passwordError}</p>)}
                    </div>
                    <Link href = "/party">
                    <Button 
                    onClick = {() => handleSubmit}
                    className="w-full" type="submit">
                      Submit
                    </Button>
                    </Link>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          Remember, your vote is your voice. Make it count.
        </p>
      </div>
    </div>
  )
}

