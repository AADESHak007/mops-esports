"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Team {
  id: string
  name: string
}

interface Match {
  id: string
  team1: Team
  team2: Team
  winner?: Team
  loser?: Team
}

export default function Bracket() {
  const [matches] = useState<Match[]>([
    {
      id: "Eliminator1",
      team1: { id: "w", name: "Blind Rushers" },
      team2: { id: "x", name: "S N A K S" },
      // winner: { id: "w", name: "Team W" },
    },
    {
      id: "Eliminator2",
      team1: { id: "y", name: "Thandi Hori" },
      team2: { id: "z", name: "The DYNamic Duo" },
    },
  ])

  const [finalMatch] = useState<Match>({
    id: "Eliminator3",
    team1: { id: "w", name: "ELIMINATOR 1 Losers" },
    team2: { id: "y", name: "ELIMINATOR 2 Winners" },
  })

  const [loserMatch] = useState<Match>({
    id: "finals",
    team1: { id: "x", name: "ELIMINATOR-1 WINNERS" },
    team2: { id: "z", name: "ELIMINATOR-3 WINNERS" },
  })

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-slate-900 rounded-xl min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Tournament Bracket</h1>
        <div className="flex gap-4 text-sm text-gray-300">
          {/* <span>Date: {new Date().toLocaleDateString()}</span>
          <span>Page No. 1</span> */}
        </div>
      </div>

      {/* Tournament Bracket */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Semi-Finals */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-center mb-4 text-white">KNOCKOUTS</h2>

          {matches.map((match, index) => (
            <Card key={match.id} className="relative bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-300">ELIMINATOR {index + 1} :{index + 29} th JUNE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div
                  className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                    match.winner?.id === match.team1.id ? "border-green-500 bg-green-900/30" : "border-slate-700 bg-slate-900"
                  }`}
                >
                  <span className="font-medium text-white">{match.team1.name}</span>
                  {match.winner?.id === match.team1.id && (
                    <Badge variant="default" className="bg-green-600 text-white">
                      Winner
                    </Badge>
                  )}
                </div>

                <div className="text-center text-gray-400 font-bold">VS</div>

                <div
                  className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                    match.winner?.id === match.team2.id ? "border-green-500 bg-green-900/30" : "border-slate-700 bg-slate-900"
                  }`}
                >
                  <span className="font-medium text-white">{match.team2.name}</span>
                  {match.winner?.id === match.team2.id && (
                    <Badge variant="default" className="bg-green-600 text-white">
                      Winner
                    </Badge>
                  )}
                </div>
              </CardContent>

              {/* Connection Line */}
              <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-slate-600"></div>
            </Card>
          ))}
        </div>

        {/* Finals */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-center mb-4 text-white">ELIMINATOR</h2>

          <Card className="relative bg-slate-800 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-300 text-center">ELIMINATOR - 3 : 1st JULY</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div
                className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                  finalMatch.winner?.id === finalMatch.team1.id
                    ? "border-green-500 bg-green-900/30"
                    : "border-slate-700 bg-slate-900"
                }`}
              >
                <span className="font-medium text-white">{finalMatch.team1.name}</span>
                {finalMatch.winner?.id === finalMatch.team1.id && (
                  <Badge variant="default" className="bg-green-600 text-white">
                    Winner
                  </Badge>
                )}
              </div>

              <div className="text-center text-gray-400 font-bold">VS</div>

              <div
                className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                  finalMatch.winner?.id === finalMatch.team2.id
                    ? "border-green-500 bg-green-900/30"
                    : "border-slate-700 bg-slate-900"
                }`}
              >
                <span className="font-medium text-white">{finalMatch.team2.name}</span>
                {finalMatch.winner?.id === finalMatch.team2.id && (
                  <Badge variant="default" className="bg-green-600 text-white">
                    Winner
                  </Badge>
                )}
              </div>
            </CardContent>

            {/* Connection Line to Champion */}
            <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-slate-600"></div>
          </Card>
        </div>

        {/* Champion & Loser Bracket */}
        <div className="space-y-6">
          {/* Champion */}
          <div>
            <h2 className="text-xl font-semibold text-center mb-4 text-white">Champion</h2>
            <Card className="border-4 border-yellow-400 bg-yellow-900/30">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-2">🏆 MOPS Champion</div>
                <div className="text-lg font-semibold text-white">{finalMatch.winner?.name || "TBD"}</div>
              </CardContent>
            </Card>
          </div>

          {/* Loser Bracket */}
          <div>
            <h2 className="text-xl font-semibold text-center mb-4 text-white">MOPS 2v2 FINALS</h2>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-300 text-center">2v2 TDM FINALS : 2nd JULY</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border-2 border-slate-700 bg-slate-900">
                  <span className="font-medium text-white">{loserMatch.team1.name}</span>
                </div>

                <div className="text-center text-gray-400 font-bold">VS</div>

                <div className="flex items-center justify-between p-3 rounded-lg border-2 border-slate-700 bg-slate-900">
                  <span className="font-medium text-white">{loserMatch.team2.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tournament Info */}
      <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <h3 className="font-semibold mb-2 text-white">Tournament Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
          <div>
            <span className="font-medium">KNOCKOUTS:</span> Ongoing
          </div>
          <div>
            <span className="font-medium">Final:</span> TBD
          </div>
          <div>
            <span className="font-medium">Champion: TBD</span> {finalMatch.winner?.name}
          </div>
        </div>
      </div>
    </div>
  )
} 