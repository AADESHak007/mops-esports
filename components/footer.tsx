import Link from "next/link"
import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MOPS Official</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional BGMI tournament organizer bringing you the most competitive esports experience in India.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/tournaments" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Tournaments
              </Link>
              <Link href="/leaderboard" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Leaderboard
              </Link>
              <Link href="/rules" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Rules & Regulations
              </Link>
              <Link href="/prizes" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Prize Distribution
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Help Center
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/discord" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Discord Server
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@mopsofficial.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MOPS Official. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
