/**
 * THIS IS THE REGISTRATION CODE AND IT IS FINE
 * v0 by Vercel.
 * @see https://v0.dev/t/lxSFPevHXk6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, firestore } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Voter } from "@/models/voter";
import database from "@/lib/database";

{/* //THIS CODE IS FINE */ }

export default function Component() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [idNumberError, setIdNumberError] = useState("");
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")

  {/* //THIS IS FOR THE LOGIC ADD IT FOR ALL OF THEM. DO THIS FOR ALL THE INFORM YOU GET FROM THE FORM */ }

  {/* //THIS WHOLE SECTION IS ERROR HANDLING */ }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
    setIdNumberError("");
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
    if (!firstName) {
      setFirstNameError("First name has not been entered")
    }
    if (!lastName) {
      setLastNameError("Last Name has not been entered")
    }
    if (!password) {
      setPasswordError("Password has not been entered")
    }
    if (!idNumber) {
      setIdNumberError("ID Number has not been entered")
    }

    if (email && firstName && idNumber && password && lastName) {

      await createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
        const user = userCredentials.user;

        console.log("Registered with:", user, email);
      })

      const user = auth.currentUser;
      const uid = user.uid;

      const newVoter: Voter = {
        user_id: uid,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        hasVoted: false,
      }

      await database.addVoter(newVoter);
      router.push("/party");
    }

    /*  const userRef = doc(firestore, "users", uid);
     await setDoc(userRef, {
       firstName,
       lastName,
       idNumber,
     }); */
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
            <div>
              <Link href="/login">
                <Button className="text-sm bg-black text-white" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/">
                <Button className="text-sm bg-black text-white" variant="outline">
                  View Results
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-center">Political Parties</h1>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Choose your party wisely. Your vote matters.
        </p>
        <div className="flex">
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900 mx-auto">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">Register</CardTitle>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="name">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange} />
                  {firstNameError && (<p className="text-red-500 text-sm">{firstNameError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="name">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange} />
                  {lastNameError && (<p className="text-red-500 text-sm">{lastNameError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="id">
                    ID Number
                  </Label>
                  <Input
                    id="id"
                    placeholder="1234567890"
                    required
                    type="number"
                    value={idNumber}
                    onChange={handleIdNumberChange} />
                  {idNumberError && (<p className="text-red-500 text-sm">{idNumberError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    type="email" required
                    value={email}
                    onChange={handleEmailChange} />
                  {emailError && (<p className="text-red-500 text-sm">{emailError}</p>)}
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
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="confirm-password">
                    Confirm Password
                  </Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Link href="/party">
                  <Button className="w-full" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Link>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          Remember, your vote is your voice. Make it count.
        </p>
      </div>
    </div>
  )
}

