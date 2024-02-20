"use client";

import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import Link from 'next/link';
import database from "@/lib/database";
import { useEffect, useState } from "react";
import { Vote } from "@/models/vote";


{/* //CODE FOR RESULTS */ }
export default function Component() {

  const [votes, setVotes] = useState<Vote[]>([]);


  useEffect(() => {
    fetchVotes();
  }, []
  );

  const getVotesByParty = () => {
    const partyIds: { [key: string]: number } = {};

    for (const { party_id } of votes) {
      partyIds[party_id] = (partyIds[party_id] || 0) + 1;
    }

    return partyIds;
  }


  const fetchVotes = async () => {
    const votes = await database.getVotes();
    setVotes(votes)
  }

  const getTotalVotes = () => {
    if (votes) {
      return votes.length;
    }
    0;
  }

  return (

    <div className="bg-gray-50 dark:bg-gray-900 py-12">
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
            {/* //Link here */}
            <div>
              <Link href="/login">
                <Button className="text-sm bg-black text-white" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
            {/* //Link here */}
            <div>
              <Link href="/register">
                <Button className="text-sm bg-black text-white" variant="outline">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-center">Political Party</h1>
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
          {/* //ANC Section */}
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">African National Congress</CardTitle>
              <img
                alt="Freedom Party"
                className="mx-auto rounded-full border"
                height="150"
                src="/ANC.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 mx-auto">
                <div
                  className="h-full bg-yellow-500 dark:bg-yellow-500 flex items-center justify-center"
                  style={{
                    width: `${Math.round(
                      getVotesByParty()[0] / votes.length * 100
                    )}%`,
                  }}
                >
                  {Math.round(
                    getVotesByParty()[0] / votes.length * 100
                  )
                  } %
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{getVotesByParty()[0]} voters
              </p>
            </CardHeader>
          </Card>
          {/* //Eff Section */}
          <Card className="flex flex-col items-center justify-center gap-4 p-8 bg-sky-200 dark:bg-sky-900">
            <CardHeader className="grid gap-1 text-center">
              <CardTitle className="text-2xl font-bold">Economic Freedom Figthers</CardTitle>
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
              <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 mx-auto">
              <div
                  className="h-full bg-yellow-500 dark:bg-yellow-500 flex items-center justify-center"
                  style={{
                    width: `${Math.round(
                      getVotesByParty()[1] / votes.length * 100
                    )}%`,
                  }}
                >
                  {Math.round(
                    getVotesByParty()[1] / votes.length * 100
                  )
                  } %
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{getVotesByParty()[1]} voters</p>
            </CardHeader>
          </Card>
          {/* //DA Section */}
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
              <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 mx-auto">
              <div
                  className="h-full bg-yellow-500 dark:bg-yellow-500 flex items-center justify-center"
                  style={{
                    width: `${Math.round(
                      getVotesByParty()[2] / votes.length * 100
                    )}%`,
                  }}
                >
                  {Math.round(
                    getVotesByParty()[2] / votes.length * 100
                  )
                  } %
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{getVotesByParty()[2]} voters</p>
            </CardHeader>
          </Card>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          Remember, your vote is your voice. Make it count. Choose your party wisely. Your vote matters.
        </p>
      </div>
    </div>
  )
}




