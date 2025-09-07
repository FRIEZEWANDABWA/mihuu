'use client'

import { MapPin, Users, Calendar, Target, Phone, Mail, GraduationCap, Heart, Car, Wheat, Droplets } from 'lucide-react'

export function About() {
  const quickFacts = [
    { label: 'County', value: 'Bungoma' },
    { label: 'Constituency', value: 'Webuye East' },
    { label: 'GPS Coordinates', value: '0.62705°N, 34.79142°E' },
    { label: 'Sub-locations', value: 'Misimo, Mitukuyu, Magemo' },
  ]

  const leadership = [
    {
      title: 'Member of County Assembly (MCA)',
      name: 'Hon. Violet Makhanu',
      description: 'Elected representative for Mihuu Ward, committed to transparent governance and community development',
      contact: '+254 700 000 000',
      email: 'mca.mihuu@bungoma.go.ke'
    },
    {
      title: 'Ward Administrator',
      name: 'Mr. John Wekesa',
      description: 'Administrative head overseeing day-to-day ward operations and service delivery',
      contact: '+254 700 000 001',
      email: 'admin.mihuu@bungoma.go.ke'
    },
    {
      title: 'Community Development Officer',
      name: 'Ms. Grace Nafula',
      description: 'Coordinates community development programs and citizen engagement initiatives',
      contact: '+254 700 000 002',
      email: 'cdo.mihuu@bungoma.go.ke'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ward <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated leaders working to transform Mihuu Ward through transparent governance and community-driven development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mihuu Ward is part of Webuye East Constituency in Bungoma County and comprises 
                several sub-locations including Misimo, Mitukuyu and Magemo. The ward sits at 
                approximately 0.627° N, 34.791° E and is a mixed agricultural and peri-urban 
                community focused on smallholder farming, education and local enterprise.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our vision is to ensure that Mihuu is a connected, inclusive ward where 
                development projects are implemented transparently and residents can easily 
                access public services. We are committed to strengthening community participation, 
                improving service delivery, and making development information openly available 
                to every resident.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-500">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To strengthen community participation, improve service delivery, and make 
                    development information openly available to every resident of Mihuu Ward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/pics/classroom4.jpg"
                alt="Mihuu Ward Community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="font-semibold text-gray-900 dark:text-white">Mihuu Ward</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Facts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {fact.label}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MCA Profile Section */}
        <div className="mb-16">
          <div className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/wetransfer_fb_img_1757232587151-jpg_2025-09-07_0812/Personal/6.jpg"
                alt="Background"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-white/90 dark:bg-gray-700/90"></div>
            </div>
            <div className="relative z-10 md:flex">
              <div className="md:w-1/3">
                <img
                  src="/pics/profile/4.jpeg"
                  alt="Hon. Violet Makhanu - MCA Mihuu Ward"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Hon. Violet Makhanu
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    Member of County Assembly - Mihuu Ward
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hon. Violet Makhanu is the elected representative for Mihuu Ward, serving with dedication 
                    and commitment to transparent governance. She champions community-driven development 
                    initiatives and ensures equitable access to quality public services for all ward residents.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Key Priorities:</h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Education infrastructure and bursary programs</li>
                      <li>• Healthcare facility upgrades and community health</li>
                      <li>• Road construction and infrastructure development</li>
                      <li>• Agricultural support and food security</li>
                      <li>• Youth empowerment and women's economic programs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
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
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Elected 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ward Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Ward Leadership Team
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our dedicated team works together to ensure effective service delivery and community development across Mihuu Ward.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                    {leader.title}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                  {leader.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {leader.contact}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {leader.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ward Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Mihuu Ward
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mihuu Ward is part of Webuye East Constituency in Bungoma County and comprises 
                  several sub-locations including Misimo, Mitukuyu and Magemo. The ward sits at 
                  approximately 0.627° N, 34.791° E and is a mixed agricultural and peri-urban 
                  community focused on smallholder farming, education and local enterprise.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our vision is to ensure that Mihuu is a connected, inclusive ward where 
                  development projects are implemented transparently and residents can easily 
                  access public services. We are committed to strengthening community participation, 
                  improving service delivery, and making development information openly available 
                  to every resident.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      To strengthen community participation, improve service delivery, and make 
                      development information openly available to every resident of Mihuu Ward.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/pics/images (2).jpg"
                  alt="Mihuu Ward Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">Mihuu Ward</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Her Leadership Journey Section */}
        <div className="mt-20">
          <section className="relative py-16 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/wetransfer_fb_img_1757232587151-jpg_2025-09-07_0812/Personal/7.jpg"
                alt="Leadership Journey"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-blue-900/70"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Her Leadership Journey
                </h3>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  From community advocate to elected representative - a story of dedication and service
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-white mb-3">Early Community Work</h4>
                      <p className="text-blue-100">
                        Started as a grassroots community organizer, focusing on women's empowerment 
                        and youth development programs in Mihuu Ward.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-white mb-3">Education Advocacy</h4>
                      <p className="text-blue-100">
                        Championed education initiatives, leading campaigns for improved school 
                        infrastructure and increased bursary allocations for needy students.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-white mb-3">Healthcare Champion</h4>
                      <p className="text-blue-100">
                        Advocated for better healthcare services, working to upgrade local dispensaries 
                        and improve maternal health programs in the ward.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-white mb-3">Elected Leadership</h4>
                      <p className="text-blue-100">
                        Elected as MCA in 2022 with a mandate to bring transparent governance 
                        and accelerated development to Mihuu Ward.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <blockquote className="text-xl text-white italic mb-4">
                      "My commitment is to serve with integrity, transparency, and dedication. 
                      Every project, every decision, every action is guided by the needs and 
                      aspirations of the people of Mihuu Ward."
                    </blockquote>
                    <cite className="text-blue-200 font-semibold">- Hon. Violet Makhanu</cite>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Message from the MCA Section */}
        <div className="mt-20">
          <section className="relative py-16 bg-gradient-to-br from-green-900 to-green-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/8.jpg"
                alt="Message from MCA"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-green-900/70"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Message from the MCA
                </h3>
                <p className="text-xl text-green-200 max-w-3xl mx-auto">
                  A personal message from Hon. Violet Makhanu to the people of Mihuu Ward
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
                  <blockquote className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                    "Dear residents of Mihuu Ward, it is my honor and privilege to serve as your elected representative. 
                    Together, we are building a ward that prioritizes transparency, inclusivity, and sustainable development. 
                    Every project we undertake, every decision we make, is guided by your needs and aspirations. 
                    I remain committed to ensuring that every voice is heard and every community benefits from our collective progress."
                  </blockquote>
                  <cite className="text-green-200 font-semibold text-lg">- Hon. Violet Makhanu, MCA Mihuu Ward</cite>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Key Achievements & Initiatives Section */}
        <div className="mt-20">
          <section className="relative py-16 bg-gradient-to-br from-purple-900 to-purple-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/pics/profile/88.jpg"
                alt="Key Achievements"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-purple-900/70"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key Achievements & Initiatives
                </h3>
                <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                  Major milestones and ongoing initiatives transforming Mihuu Ward
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Education Infrastructure</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• 5 ECDE classrooms constructed</li>
                    <li>• KSh 2.5M education budget allocated</li>
                    <li>• 200+ bursaries distributed</li>
                    <li>• School water projects completed</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Healthcare Development</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• Lukusi Dispensary upgrade (KSh 30M)</li>
                    <li>• Maternal health programs expanded</li>
                    <li>• Medical equipment procurement</li>
                    <li>• Community health initiatives</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Infrastructure Projects</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• Kodhiambo-Tinga road opened</li>
                    <li>• 2 modern markets constructed</li>
                    <li>• Bridge construction ongoing</li>
                    <li>• Water drilling projects</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Community Engagement</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• Monthly public forums</li>
                    <li>• Transparent budget reporting</li>
                    <li>• Youth empowerment programs</li>
                    <li>• Women's economic groups</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wheat className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Agricultural Support</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• Farmer training programs</li>
                    <li>• Seed distribution initiatives</li>
                    <li>• Irrigation system development</li>
                    <li>• Market linkage programs</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Water & Sanitation</h4>
                  </div>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• 8 boreholes drilled</li>
                    <li>• Water point installations</li>
                    <li>• Sanitation facility upgrades</li>
                    <li>• Clean water access improved</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}