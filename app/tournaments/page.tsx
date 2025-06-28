import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Bracket from "@/components/Bracket"

export default function TournamentsPage() {
  const upcomingTournaments: any[] = [];

  const liveTournaments = [
    {
      id: 1,
      name: "MOPS 2v2 TDM Battle",
      date: "June 23-27, 2025",
      prizePool: "TBA",
      registeredTeams: 6,
      maxTeams: 6,
      status: "Live",
      image: "/placeholder.svg?height=150&width=200",
      type: "2v2 TDM",
      currentMatch: "Eliminator Round - Day 1",
    },
  ];

  const completedTournaments: any[] = [];

  const TournamentCard: React.FC<{ tournament: any; showWinner?: boolean; showCurrentMatch?: boolean }> = ({ tournament, showWinner = false, showCurrentMatch = false }) => (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="flex">
        <div className="relative w-32 h-24 flex-shrink-0">
          <Image
            src={tournament.image || "/placeholder.svg"}
            alt={tournament.name}
            fill
            className="object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <Badge
              variant={
                tournament.status === "Live" ? "destructive" : tournament.status === "Open" ? "default" : "secondary"
              }
              className={
                tournament.status === "Live"
                  ? "bg-red-600 animate-pulse text-xs"
                  : tournament.status === "Open"
                    ? "bg-green-600 text-xs"
                    : "bg-gray-600 text-xs"
              }
            >
              {tournament.status}
            </Badge>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-semibold text-lg leading-tight">{tournament.name}</h3>
              <p className="text-gray-400 text-sm">{tournament.type}</p>
            </div>
            <div className="text-right">
              <div className="text-blue-400 font-semibold">{tournament.prizePool}</div>
              <div className="text-gray-400 text-sm">{tournament.date}</div>
            </div>
          </div>

          {showCurrentMatch && tournament.currentMatch && (
            <div className="mb-2">
              <Badge variant="outline" className="border-red-500 text-red-400 text-xs">
                {tournament.currentMatch}
              </Badge>
            </div>
          )}

          {showWinner && tournament.winner && (
            <div className="mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium">Winner: {tournament.winner}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center text-sm mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">
                  {tournament.registeredTeams}/{tournament.maxTeams}
                </span>
              </div>
            </div>
          </div>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
            <Link href={`/tournament/${tournament.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tournament Hub</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover, join, and compete in BGMI tournaments. From weekly scrimmages to championship events.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search tournaments..."
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Prize Pool" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Prizes</SelectItem>
                  <SelectItem value="low">Under ₹10K</SelectItem>
                  <SelectItem value="medium">₹10K - ₹50K</SelectItem>
                  <SelectItem value="high">Above ₹50K</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="championship">Championship</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="special">Special Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Tournament Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Upcoming ({upcomingTournaments.length})
            </TabsTrigger>
            <TabsTrigger value="live" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Live ({liveTournaments.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">
              Completed ({completedTournaments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-4">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live" className="mt-8">
            <div className="space-y-4">
              {liveTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} showCurrentMatch={true} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-8">
            <div className="space-y-4">
              {completedTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} showWinner={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
