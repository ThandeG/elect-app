/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BVWzgtJa3Zm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from 'next/link';
{/* //THIS IS THE PARTY CODE */}

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <img
              alt="Logo"
              className="mr-2"
              height="40"
              src="/IEC.png"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </div>
          <div>
            <Link href="/app">
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
        In the pursuit of modernizing and enhancing our democratic processes, South Africa proudly
        introduces a transformative initiative for the upcoming 2024 elections online voting.
        Embracing the digital era, this innovative approach aims to bring about unprecedented
        accessibility and efficiency to our electoral system. By enabling citizens to cast their
        votes electronically, we usher in a new era of inclusivity, breaking down geographical
        barriers and fostering greater civic engagement. This forward-looking initiative seeks
        to instill trust in the electoral process through robust security measures, transparency,
        and real-time data analytics. As we embark on this journey, we anticipate not only a
        streamlined and cost-effective voting experience but a meaningful step towards a more
        interconnected, resilient, and participatory democracy for the people of South Africa.
        </p>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">African National Congress</CardTitle>
              <img
                alt="African National Congress"
                className="mx-auto rounded-full border"
                height="150"
                src="/ANC.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
            </CardHeader>
            <CardContent className="text-center grid gap-4">
              <p className="text-sm leading-loose">
                Embrace the legacy of liberation with ANC, advocating for unity and transformation. Our commitment to social justice and economic
                development ensures a better future for all South Africans. Vote ANC for a continued journey towards equality and prosperity
              </p>
              <Button size="sm">Vote</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">Economic Freedom Fighters</CardTitle>
              <img
                alt="Unity Party"
                className="mx-auto rounded-full border"
                height="150"
                src="/EFF.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
            </CardHeader>
            <CardContent className="text-center grid gap-4">
              <p className="text-sm leading-loose">
               Join EFF in the fight for economic emancipation and social justice. We champion radical policies to address inequality and advocate for the 
               marginalized. Vote EFF for a bold and transformative vision that challenges the status quo.
              </p>
              <Button size="sm">Vote</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">Democratic Alliance</CardTitle>
              <img
                alt="Progress Party"
                className="mx-auto rounded-full border"
                height="150"
                src="/DA.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
            </CardHeader>
            <CardContent className="text-center grid gap-4">
              <p className="text-sm leading-loose">
                Choose the DA for a diverse and inclusive South Africa. We prioritize good governance, accountability, and economic growth. With a 
                commitment to individual freedoms, we aim to build a nation where opportunities are accessible to all. Vote DA for a united future.
              </p>
              <Button size="sm">Vote</Button>
            </CardContent>
          </Card>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          Remember, your vote is your voice. Make it count. Choose your party wisely. Your vote matters.
        </p>
      </div>
    </div>
  )
}