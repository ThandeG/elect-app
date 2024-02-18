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
import { auth, firestore } from "../../lib/Firebase"
import { doc, setDoc } from "firebase/firestore";

{/* //THIS CODE IS FINE */ }

export default function Component() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [name, setName] = useState("")
  const [racialGroup, setRacialGroup] = useState("");
  const [address, setAddress] = useState("")
  const [voted, setVoted] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [idNumberError, setIdNumberError] = useState("");
  const [nameError, setNameError] = useState("")
  const [racialGroupError, setRacialGroupError] = useState("");
  const [addressError, setAddressError] = useState("")
  {/* //THIS IS FOR THE LOGIC ADD IT FOR ALL OF THEM. DO THIS FOR ALL THE INFORM YOU GET FROM THE FORM */ }
 
  {/* //THIS WHOLE SECTION IS ERROR HANDLING */ }
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
    setIdNumberError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleRacialGroupChange = (e) => {
    setRacialGroup(e.target.value);
    setRacialGroupError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email){
      setEmailError("Email has not been entered")
    }
    if(!name){
      setNameError("Name has not been entered")
    }
    if(!address){
      setAddressError("Address has not been entered")
    }
    if(!password){
      setPasswordError("Password has not been entered")
    }
    if(!idNumber){
      setIdNumberError("ID Number has not been entered")
    }
    if(!racialGroup){
      setRacialGroupError("Racial group has not been entered")
    }

    if(email && name && idNumber && password && racialGroup && address)
    {
      router.push("/party")
    }

    await createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
      const user = userCredentials.user;

      console.log("Registered with:", user, email);
    })

    const user = auth.currentUser;
    const uid = user.uid;

    const userRef = doc(firestore, "users", uid);
    await setDoc(userRef, {
      name,
      racialGroup,
      idNumber,
      address,
      voted,
    });
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
              <Link href="/party">
                <Button className="text-sm bg-black text-white" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/app">
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
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900 mx-auto">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">Register</CardTitle>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe" 
                    required
                    type="name"
                    value={name}
                    onChange={handleNameChange}/>
                    {nameError && (<p className="text-red-500 text-sm">{nameError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="id">
                    ID Number
                  </Label>
                  <Input 
                  id="id"
                  placeholder="1234567890" 
                  required
                  type="idNumber"
                  value={idNumber}
                  onChange={handleIdNumberChange}/>
                  {idNumberError && (<p className="text-red-500 text-sm">{idNumberError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="race">
                    Racial Group
                  </Label>
                  <Input 
                    id="race" 
                    placeholder="e.g. Caucasian" 
                    required
                    type="racial Group"
                    value={racialGroup}
                    onChange={handleRacialGroupChange}/>
                    {racialGroupError && (<p className="text-red-500 text-sm">{racialGroupError}</p>)}
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
                    onChange={handleEmailChange}/>
                    {emailError && (<p className="text-red-500 text-sm">{emailError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="address">
                    Address
                  </Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main St" 
                    required
                    type="address"
                    value={address}
                    onChange={handleAddressChange}/>
                    {addressError && (<p className="text-red-500 text-sm">{addressError}</p>)}
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="password">
                    Password
                  </Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={handlePasswordChange}/>
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

