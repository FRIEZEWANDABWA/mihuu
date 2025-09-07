'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Users, Building, Heart, Zap } from 'lucide-react'

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: Users, label: 'Families Served', value: '1000+', color: 'text-blue-500' },
    { icon: Building, label: 'Schools Supported', value: '10+', color: 'text-green-500' },
    { icon: Heart, label: 'Dispensaries Built', value: '5+', color: 'text-red-500' },
    { icon: Zap, label: 'Projects Completed', value: '50+', color: 'text-yellow-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])



  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/pics/classroom2.jpg')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block">Mihuu Ward</span>
            <span className="block gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Empowering Community Growth
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up animation-delay-200">
            Through Transparent Service Delivery
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Welcome to the official Mihuu Ward portal. Your single point of access for news, 
            project updates, public resources, health & education services, and citizen feedback. 
            Our mission is to strengthen community participation and improve service delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-600">
            <button
              onClick={() => window.location.href = '/contact'}
              className="btn-hover bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Report an Issue / Request Service</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.location.href = '/projects'}
              className="btn-hover bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View Current Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <button
              onClick={() => window.location.href = '/about'}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 text-center"
            >
              <Users className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">About MCA</span>
            </button>
            <button
              onClick={() => window.location.href = '/education'}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 text-center"
            >
              <Building className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Education</span>
            </button>
            <button
              onClick={() => window.location.href = '/health'}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 text-center"
            >
              <Heart className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Health</span>
            </button>
            <button
              onClick={() => window.location.href = '/news'}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 text-center"
            >
              <Zap className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">News</span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animation-delay-800">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className={`glass rounded-lg p-6 text-center transition-all duration-500 ${
                    currentStat === index ? 'scale-110 bg-white/20' : 'bg-white/10'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}