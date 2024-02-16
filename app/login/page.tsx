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
import { auth, firestore } from "../../lib/Firebase"
import { useRouter } from "next/navigation"

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
    
        if(!email){
          setEmailError("Email has not been entered")
        }
        if(!password){
          setPasswordError("Email has not been entered")
        }
        if(email && password){
              router.push("/party")
        }

        await signInWithEmailAndPassword (auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
      
            console.log("Registered with:", user, email);
          })
    }



  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 flex justify-center">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <img
              alt="Logo"
              className="mr-2"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </div>
          <div className="flex gap-4">
            <div>
              <Button className="text-sm bg-black text-white" variant="outline">
                Login
              </Button>
            </div>
            <div>
              <Button className="text-sm bg-black text-white" variant="outline">
                Register
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-center">Political Parties</h1>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Choose your party wisely. Your vote matters.
        </p>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          <div className="flex items-center flex justify-center">
          <div className="container px-4 flex flex-col items-center">
            <Card className="p-8 bg-sky-200 dark:bg-sky-900 mx-auto">
              <CardHeader className="grid gap-1 text-center">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label className="text-base" htmlFor="name">
                      Name
                    </Label>
                    {/* //ADD EMAIL AND PASSWORD AND REMOVE EMAIL NUMBER*/}
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-base" htmlFor="id">
                      ID Number
                    </Label>
                    <Input id="id" placeholder="1234567890" />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-base" htmlFor="password">
                      Password
                    </Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
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

