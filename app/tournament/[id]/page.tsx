import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Users, DollarSign, Calendar, MapPin, Clock, Target } from "lucide-react"
import Image from "next/image"

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  // Mock tournament data - in real app, fetch based on params.id
  const tournament = {
    id: 1,
    name: "MOPS 2v2 TDM Battle",
    date: "June 23-27, 2025",
    prizePool: "TBA",
    registeredTeams: 6,
    maxTeams: 6,
    status: "Live",
    image: "/placeholder.svg?height=300&width=600",
    type: "2v2 TDM",
    description:
      "A 2v2 TDM battle featuring 6 teams. Eliminator round with 5 days of matches. Top 4 teams advance to Knockout Rounds.",
    rules: [
      "All participants must read and agree to the rules. No withdrawals after registration; fees are non-refundable.",
      "Join the match room on time. Late entry = disqualification.",
      "Contact the manager (notfinefr@gmail.com) 6+ hours before match for schedule issues. No last-minute changes.",
      "Zero tolerance for abuse, harassment, or misconduct. Report issues to liquidbth@gmail.com.",
      "Prize money distributed within 3-4 business days after event.",
      "Book slots before the deadline. Ensure device, maps, and connection are ready. No rematches for tech issues.",
      "Do not share Room ID/password. Cheating, hacks, or third-party tools = permanent ban.",
      "Winners decided by management. No arguments after results.",
      "No teaming with opponents. Early match issues must be reported in first 60s.",
      "TDM: Tap every 7s, move every 10s (unless healing). No slide. 3 penalties = disqualification.",
      "No suppressors on specified guns. Self-nade only after 5-kill streak. No grenades, stuns, or picking up spawned gear.",
    ],
    prizeDistribution: [
      { position: "1st Place", amount: "TBA", percentage: "-" },
      { position: "2nd Place", amount: "TBA", percentage: "-" },
      { position: "3rd Place", amount: "TBA", percentage: "-" },
      { position: "4th Place", amount: "TBA", percentage: "-" },
    ],
  }

  const teams = [
    { name: "D-Famiersers", members: ["PZYKÉN", "STEELX"] },
    { name: "S N A K S", members: ["PZYGÓD", "DARk KING"] },
    { name: "Thundi Hori", members: ["Garmi Hori", "Garmi Hori"] },
    { name: "The Sénior", members: ["HZÁKI", "Capybara"] },
    { name: "The DYNamic Duo", members: ["DefinatelyTDM", "Sherni"] },
    { name: "Blind Rushers", members: ["BR OXY", "BR BRUTAL"] },
  ]

  const pointsTable = [
    { rank: 1, team: "Blind Rushers", totalPoints: 10, kills: 159, placement: 0, matches: 5 },
    { rank: 2, team: "S N A K S", totalPoints: 6, kills: 138, placement: 0, matches: 5},
    { rank: 3, team: "Thandi Hori", totalPoints: 6, kills: 112, placement: 0, matches: 5},
    { rank: 4, team: "The DYNamic Duo", totalPoints: 4, kills: 113, placement: 0, matches: 5 },
    { rank: 5, team: "D-Famiersers", totalPoints: 2, kills: 122, placement: 0, matches: 5 },
    { rank: 6, team: "The Sénior", totalPoints: 2, kills: 115, placement: 0, matches: 5 },
  ]

  const fixtures = [
    { day: "Day 1", matches: [
      { match: "Blind Rushers vs D-Famiersers" },
      { match: "The DYNamic Duo vs S N A K S" },
      { match: "The Sénior vs Thundi Hori" },
    ]},
    { day: "Day 2", matches: [
      { match: "The DYNamic Duo vs D-Famiersers" },
      { match: "The Sénior vs Blind Rushers" },
      { match: "Thundi Hori vs S N A K S" },
    ]},
    { day: "Day 3", matches: [
      { match: "The Sénior vs D-Famiersers" },
      { match: "Thundi Hori vs The DYNamic Duo" },
      { match: "S N A K S vs Blind Rushers" },
    ]},
    { day: "Day 4", matches: [
      { match: "Thundi Hori vs D-Famiersers" },
      { match: "S N A K S vs The Sénior" },
      { match: "Blind Rushers vs The DYNamic Duo" },
    ]},
    { day: "Day 5", matches: [
      { match: "S N A K S vs D-Famiersers" },
      { match: "Blind Rushers vs Thundi Hori" },
      { match: "The DYNamic Duo vs The Sénior" },
    ]},
  ]

  // Leaderboard data: player, team, finishes, assists
  const leaderboard = [
    { player: "PZYKÉN", team: "D-Famiersers", finishes: 49, assists: 51 },
    { player: "STEELX", team: "D-Famiersers", finishes: 73, assists: 31 },
    { player: "PZYGÓD", team: "S N A K S", finishes: 65, assists: 36 },
    { player: "DARk KING", team: "S N A K S", finishes: 73, assists: 43 },
    { player: "Garmi Hori-1", team: "Thandi Hori", finishes: 69, assists: 26 },
    { player: "Garmi Hori-2", team: "Thandi Hori", finishes: 43, assists: 37 },
    { player: "HZÁKI", team: "The Sénior", finishes: 63, assists: 39 },
    { player: "Capybara", team: "The Sénior", finishes: 52, assists: 41 },
    { player: "DefinatelyTDM", team: "The DYNamic Duo", finishes: 47, assists: 36 },
    { player: "Sherni", team: "The DYNamic Duo", finishes: 66, assists: 20 },
    { player: "BR OXY", team: "Blind Rushers", finishes: 72, assists: 37 },
    { player: "DEEPAK THAKUR", team: "Blind Rushers", finishes: 87, assists: 32 },
  ];

  // Sort leaderboard by finishes, then assists
  const sortedLeaderboard = [...leaderboard].sort((a, b) =>
    b.finishes !== a.finishes ? b.finishes - a.finishes : b.assists - a.assists
  );

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Tournament Header */}
        <div className="mb-8">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
            <Image src={tournament.image || "/placeholder.svg"} alt={tournament.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="mb-2 bg-blue-600">{tournament.type}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{tournament.name}</h1>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{tournament.prizePool}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>
                    {tournament.registeredTeams}/{tournament.maxTeams} Teams
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <Badge
                variant={tournament.status === "Live" ? "destructive" : "default"}
                className={tournament.status === "Live" ? "bg-red-600 animate-pulse" : "bg-green-600"}
              >
                {tournament.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Tournament Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="points" className="data-[state=active]:bg-blue-600">
              Points Table
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-blue-600">
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="fixtures" className="data-[state=active]:bg-blue-600">
              Fixtures
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-blue-600">
              Results
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Tournament Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{tournament.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Rules & Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tournament.rules.map((rule, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Teams & Players</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {teams.map((team, idx) => (
                        <li key={idx} className="text-gray-200">
                          <span className="font-semibold text-blue-300">{team.name}:</span> {team.members.join(", ")}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Prize Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tournament.prizeDistribution.map((prize, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                          <div>
                            <div className="text-white font-medium">{prize.position}</div>
                            <div className="text-gray-400 text-sm">{prize.percentage}</div>
                          </div>
                          <div className="text-blue-400 font-semibold">{prize.amount}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Team</Button>
                    <p className="text-center text-gray-400 text-sm mt-2">Registration closes in 3 days</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Points Table Tab */}
          <TabsContent value="points" className="mt-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Live Points Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700">
                        <TableHead className="text-gray-300">Rank</TableHead>
                        <TableHead className="text-gray-300">Team</TableHead>
                        <TableHead className="text-gray-300">Total Points</TableHead>
                        <TableHead className="text-gray-300">Kills</TableHead>
                        <TableHead className="text-gray-300">Placement</TableHead>
                        <TableHead className="text-gray-300">Matches</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pointsTable.map((team) => (
                        <TableRow key={team.rank} className="border-slate-700 hover:bg-slate-700/50">
                          <TableCell className="font-medium text-white">
                            <div className="flex items-center gap-2">
                              {team.rank <= 3 && <Trophy className="w-4 h-4 text-yellow-500" />}#{team.rank}
                            </div>
                          </TableCell>
                          <TableCell className="text-white font-medium">{team.team}</TableCell>
                          <TableCell className="text-blue-400 font-semibold">{team.totalPoints}</TableCell>
                          <TableCell className="text-gray-300">{team.kills}</TableCell>
                          <TableCell className="text-gray-300">{team.placement}</TableCell>
                          <TableCell className="text-gray-300">{team.matches}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="mt-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Player Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700">
                        <TableHead className="text-gray-300">Rank</TableHead>
                        <TableHead className="text-gray-300">Player</TableHead>
                        <TableHead className="text-gray-300">Team</TableHead>
                        <TableHead className="text-gray-300">Finishes</TableHead>
                        <TableHead className="text-gray-300">Assists</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedLeaderboard.map((entry, idx) => (
                        <TableRow key={idx} className="border-slate-700 hover:bg-slate-700/50">
                          <TableCell className="font-medium text-white">#{idx + 1}</TableCell>
                          <TableCell className="text-white font-medium">{entry.player}</TableCell>
                          <TableCell className="text-blue-300">{entry.team}</TableCell>
                          <TableCell className="text-blue-400 font-semibold">{entry.finishes}</TableCell>
                          <TableCell className="text-gray-300">{entry.assists}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fixtures Tab */}
          <TabsContent value="fixtures" className="mt-8">
            <div className="space-y-6">
              {fixtures.map((day, dayIndex) => (
                <Card key={dayIndex} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {day.matches.map((match, matchIndex) => (
                        <div
                          key={matchIndex}
                          className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-white font-medium">{match.match}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="mt-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Match Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Results Coming Soon</h3>
                  <p className="text-gray-400">Match results will be updated after each game</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
