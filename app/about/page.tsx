'use client'

import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'
import { ScrollProgress } from '../components/ScrollProgress'
import { ThemeProvider } from '../components/ThemeProvider'
import { Award, Users, Heart, Target, Quote, CheckCircle, Calendar, MapPin } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      title: "Education & Youth Empowerment",
      description: "Consistently supported schools across Mihuu Ward through bursary allocations, mentorship programs, and advocacy for improved learning facilities.",
      impact: "500+ students supported"
    },
    {
      icon: Heart,
      title: "Women & Community Development", 
      description: "Championed programs that uplift women, empower self-help groups, and provide training for sustainable livelihoods.",
      impact: "50+ women groups empowered"
    },
    {
      icon: Target,
      title: "Infrastructure & Basic Services",
      description: "Prioritized road improvements, water accessibility projects, and better health facilities to ensure dignity in daily life.",
      impact: "15+ projects completed"
    },
    {
      icon: Award,
      title: "Agriculture & Local Economy",
      description: "Worked closely with farmers to push for access to inputs, markets, and extension services, making agriculture more profitable.",
      impact: "1000+ farmers reached"
    }
  ]

  const visionPoints = [
    "Expanding access to quality education and digital opportunities for youth",
    "Strengthening healthcare services and access to medicine at local facilities", 
    "Increasing support for farmers through cooperatives, value addition, and modern farming methods",
    "Ensuring accountability and transparency in all ward projects and county-level engagements"
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hon. <span className="text-yellow-300">Violet</span>
                  </h1>
                  <p className="text-2xl mb-4 text-primary-100">MCA Mihuu Ward</p>
                  <p className="text-xl mb-8 text-primary-200">
                    A Visionary Leader. A Trusted Voice. A Servant of the People.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                      <MapPin className="w-5 h-5" />
                      <span>Mihuu Ward, Bungoma County</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                      <Calendar className="w-5 h-5" />
                      <span>Elected 2017</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-32 h-32 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Story */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Her Leadership Journey
                </h2>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Hon. Violet serves as the elected Member of County Assembly (MCA) for Mihuu Ward, Bungoma County. 
                    She was chosen by the people because of her proven dedication, integrity, and unwavering commitment to service. 
                    Today, she stands as the voice of Mihuu Ward in the County Assembly, ensuring that every decision made 
                    reflects the needs, aspirations, and values of her people.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hon. Violet entered leadership with one mission: to transform Mihuu Ward into a community of opportunity, 
                    progress, and dignity for all. From her early engagements with grassroots initiatives to her election as MCA, 
                    she has always placed the people at the center of her vision.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
                Key Achievements & Initiatives
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {achievement.description}
                          </p>
                          <div className="bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full inline-block">
                            <span className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                              {achievement.impact}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Message from MCA */}
          <section className="py-20 bg-primary-600 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Message from the MCA</h2>
                <div className="bg-white/10 p-8 rounded-lg">
                  <Quote className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
                  <blockquote className="text-xl italic leading-relaxed mb-6">
                    "Leadership is not about personal gain—it is about service. I remain fully committed to working 
                    hand in hand with the people of Mihuu Ward, because together we can transform our communities, 
                    uplift our families, and secure a brighter future for generations to come."
                  </blockquote>
                  <cite className="text-yellow-300 font-semibold">
                    – Hon. Violet, MCA Mihuu Ward
                  </cite>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}