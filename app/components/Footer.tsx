'use client'

import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

const currentYear = new Date().getFullYear()

export function Footer() {

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Health', href: '#health' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Bursary Applications', href: '#education' },
    { name: 'Project Reports', href: '#projects' },
    { name: 'Health Services', href: '#health' },
    { name: 'Water Issues', href: '#contact' },
    { name: 'Infrastructure Problems', href: '#contact' },
    { name: 'Tender Information', href: '#transparency' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Ward Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mihuu Ward</h3>
                <p className="text-gray-400 text-sm">Webuye East, Bungoma</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering community growth through transparent service delivery. 
              Your single point of access for ward services, projects, and civic engagement.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mihuu Ward Offices, Bungoma County</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@mihuuward.go.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get updates on projects and announcements
              </p>
              <form onSubmit={(e) => {
                e.preventDefault()
                const email = (e.target as HTMLFormElement).email.value
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  alert('Please enter a valid email address')
                  return
                }
                alert('Thank you for subscribing!')
                ;(e.target as HTMLFormElement).reset()
              }} className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button type="submit" className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Mihuu Ward. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with ❤️ for the people of Mihuu Ward
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Site Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Emergency: 999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Ward Office: +254 700 000 000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">Emergency: emergency@mihuuward.go.ke</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}