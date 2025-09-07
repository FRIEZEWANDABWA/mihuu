'use client'

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import { Users, Building, Heart, Zap, ArrowRight, MapPin, Phone, Mail, Award, Droplets, Car, GraduationCap, Stethoscope, Wheat } from 'lucide-react'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/2.jpg"
                alt="Mihuu Ward Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
              <div className="max-w-5xl mx-auto">
                {/* Main Headline - Fixed positioning */}
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                    <span className="block mb-2">Mihuu Ward</span>
                    <span className="block text-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      Empowering Community Growth
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200">
                    Through Transparent Service Delivery
                  </p>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Welcome to the official Mihuu Ward portal. Your gateway to transparent governance, 
                  community projects, and quality public services in Webuye East, Bungoma County.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>Report Issue / Request Service</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => window.location.href = '/projects'}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>View Current Projects</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-xl sm:text-2xl font-bold mb-1">1000+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Families Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <Building className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-green-400" />
                    <div className="text-xl sm:text-2xl font-bold mb-1">10+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Schools Supported</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-400" />
                    <div className="text-xl sm:text-2xl font-bold mb-1">5+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Health Facilities</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-yellow-400" />
                    <div className="text-xl sm:text-2xl font-bold mb-1">50+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Projects Completed</div>
                  </div>
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

          {/* MCA Leadership Section */}
          <section className="relative py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/21.jpg"
                alt="Meet Your Representative"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gray-50/30 dark:bg-gray-800/30"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Representative</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Committed to transparent governance and community development
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src="/pics/profile/1.png"
                        alt="Hon. Violet Makhanu - MCA Mihuu Ward"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 sm:p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          Hon. Violet Makhanu
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                          Member of County Assembly - Mihuu Ward
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Dedicated to serving the people of Mihuu Ward through transparent governance, 
                        community-driven development, and ensuring equitable access to quality public services. 
                        Working together to build a prosperous and inclusive community.
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">Mihuu Ward Office</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">+254 700 000 000</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">mca.mihuu@bungoma.go.ke</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">Elected 2022</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => window.location.href = '/about'}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Learn More About Leadership
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Services Overview */}
          <section className="relative py-16 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/23.jpg"
                alt="Community Services"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Key Services</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive development across education, health, infrastructure, and agriculture
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <GraduationCap className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">ECDE classrooms, school infrastructure, and bursary programs for quality education access.</p>
                  <button 
                    onClick={() => window.location.href = '/education'}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <Stethoscope className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Healthcare</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Dispensary upgrades, health facility construction, and community health programs.</p>
                  <button 
                    onClick={() => window.location.href = '/health'}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <Car className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Infrastructure</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Road construction, bridges, markets, and public building development projects.</p>
                  <button 
                    onClick={() => window.location.href = '/infrastructure'}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <Wheat className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Agriculture</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Farming support, irrigation projects, and agricultural extension services for farmers.</p>
                  <button 
                    onClick={() => window.location.href = '/projects'}
                    className="text-orange-600 hover:text-orange-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Projects Highlight */}
          <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Recent <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Project Highlights</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  See the latest development projects transforming our community
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src="/pics/Kodhiambo – Tinga road (newly opened).jpg"
                      alt="Kodhiambo - Tinga Road"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kodhiambo – Tinga Road
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Newly opened road connecting Kodhiambo and Tinga areas, improving transport and trade.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">KSh 2.8M</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src="/pics/Mahayamodernmarket.jpg"
                      alt="Mahaya Modern Market"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Mahaya Modern Market
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Modern market facility boosting local trade and providing better trading environment.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">KSh 8.5M</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src="/pics/classroom2.jpg"
                      alt="ECDE Classroom Construction"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Ongoing
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      ECDE Classrooms
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Construction of Early Childhood Development classrooms at multiple primary schools.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">KSh 2.5M</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">View Details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button 
                  onClick={() => window.location.href = '/projects'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 mx-auto"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          {/* Quick Access Section */}
          <section className="relative py-16 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/6.png"
                alt="Quick Access"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Access</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Fast access to essential services and information
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <button
                  onClick={() => window.location.href = '/about'}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Users className="w-8 h-8 mx-auto mb-3" />
                  <span className="text-lg font-semibold">Leadership</span>
                </button>
                <button
                  onClick={() => window.location.href = '/education'}
                  className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <GraduationCap className="w-8 h-8 mx-auto mb-3" />
                  <span className="text-lg font-semibold">Education</span>
                </button>
                <button
                  onClick={() => window.location.href = '/health'}
                  className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Heart className="w-8 h-8 mx-auto mb-3" />
                  <span className="text-lg font-semibold">Health</span>
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <span className="text-lg font-semibold">Contact Us</span>
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}