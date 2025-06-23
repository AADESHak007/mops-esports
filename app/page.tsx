import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, DollarSign, Calendar, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredTournaments = [
    {
      id: 1,
      name: "MOPS 2v2 TDM Battle",
      date: "June 23-27, 2025",
      prizePool: "TBA",
      registeredTeams: 6,
      status: "Live",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { icon: Trophy, label: "Tournaments Hosted", value: "150+" },
    { icon: Users, label: "Active Players", value: "5,000+" },
    { icon: DollarSign, label: "Total Prize Pool", value: "₹10L+" },
    { icon: Calendar, label: "Years Active", value: "3+" },
  ]

  const recentNews = [
    {
      title: "MOPS Championship 2024 Registration Now Open",
      date: "Dec 10, 2024",
      excerpt: "The biggest tournament of the year is here! Register your squad now for a chance to win ₹50,000.",
    },
    {
      title: "Winter Clash Tournament Goes Live",
      date: "Dec 8, 2024",
      excerpt: "32 teams battle it out in our winter tournament. Watch live streams and follow the action.",
    },
    {
      title: "New Anti-Cheat System Implemented",
      date: "Dec 5, 2024",
      excerpt: "Enhanced security measures ensure fair play for all participants in upcoming tournaments.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/50 to-transparent z-10" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="BGMI Battle Scene"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            MOPS
            <span className="text-blue-400"> OFFICIAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional BGMI Tournament Organizer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Join the ultimate battleground where legends are born. Compete in high-stakes tournaments, climb the
            leaderboards, and claim your victory royale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/tournaments" className="flex items-center gap-2">
                Join Tournament <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Live
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Tournaments</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our premier BGMI tournaments and compete for massive prize pools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTournaments.map((tournament) => (
              <Card
                key={tournament.id}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        tournament.status === "Live"
                          ? "destructive"
                          : tournament.status === "Open"
                            ? "default"
                            : "secondary"
                      }
                      className={
                        tournament.status === "Live"
                          ? "bg-red-600 animate-pulse"
                          : tournament.status === "Open"
                            ? "bg-green-600"
                            : "bg-gray-600"
                      }
                    >
                      {tournament.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">{tournament.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white">{tournament.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Prize Pool:</span>
                    <span className="text-blue-400 font-semibold">{tournament.prizePool}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Teams:</span>
                    <span className="text-white">{tournament.registeredTeams}</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href={`/tournament/${tournament.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Link href="/tournaments">View All Tournaments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-400">
              Stay updated with the latest tournament announcements and esports news
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-sm text-blue-400 mb-2">{news.date}</div>
                  <CardTitle className="text-white text-lg leading-tight">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">{news.excerpt}</p>
                  <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 mt-4">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Dominate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players in the ultimate BGMI tournament experience. Register now and start your journey to
            victory.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
            <Link href="/tournaments">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
