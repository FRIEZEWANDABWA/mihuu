'use client'

import { Car, Droplets, Building, Zap, Wrench, MapPin } from 'lucide-react'

export function Infrastructure() {
  const infrastructureProjects = [
    {
      category: 'Roads & Transport',
      icon: Car,
      color: 'text-blue-500',
      projects: [
        {
          name: 'Makona Box Culvert Construction',
          status: 'Completed',
          description: 'Box culvert works completed to improve road drainage and accessibility',
          location: 'Makona Area',
          budget: 'KSh 1,500,000'
        },
        {
          name: 'Kodhiambo – Tinga Road',
          status: 'Newly Opened',
          description: 'Newly opened road connecting Kodhiambo and Tinga areas',
          location: 'Kodhiambo - Tinga',
          budget: 'KSh 2,800,000'
        },
        {
          name: 'Marang\'inya – Gingo – Ndwara Road',
          status: 'Ongoing',
          description: 'Road construction and improvement project connecting multiple areas',
          location: 'Marang\'inya - Gingo - Ndwara',
          budget: 'KSh 4,200,000'
        }
      ]
    },
    {
      category: 'Water & Sanitation',
      icon: Droplets,
      color: 'text-cyan-500',
      projects: [
        {
          name: 'Nabuyole FYM Primary Borehole',
          status: 'Ongoing',
          description: 'Water drilling and equipping project to provide clean water access',
          location: 'Nabuyole FYM Primary School',
          budget: 'KSh 1,800,000'
        },
        {
          name: 'Community Water Points',
          status: 'Planned',
          description: 'Installation of water points across various sub-locations',
          location: 'Multiple Locations',
          budget: 'KSh 3,500,000'
        }
      ]
    },
    {
      category: 'Public Buildings',
      icon: Building,
      color: 'text-green-500',
      projects: [
        {
          name: 'Mihuu Ward Office',
          status: 'Near Completion',
          description: 'Ward administrator office construction (flagged in audit reports)',
          location: 'Mihuu Ward Center',
          budget: 'KSh 5,000,000'
        },
        {
          name: 'Mahaya Modern Market',
          status: 'Completed',
          description: 'Modern market facility to boost local trade and commerce',
          location: 'Mahaya',
          budget: 'KSh 8,500,000'
        },
        {
          name: 'Wangarot Modern Market',
          status: 'Completed',
          description: 'Market infrastructure to support local traders and farmers',
          location: 'Wangarot',
          budget: 'KSh 7,200,000'
        }
      ]
    }
  ]

  const infrastructureStats = [
    { icon: Car, label: 'Roads Improved', value: '15 km', color: 'text-blue-500' },
    { icon: Droplets, label: 'Water Points', value: '8', color: 'text-cyan-500' },
    { icon: Building, label: 'Public Buildings', value: '12', color: 'text-green-500' },
    { icon: Zap, label: 'Electricity Coverage', value: '75%', color: 'text-yellow-500' },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'near completion':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 'newly opened':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <section id="infrastructure" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Infrastructure & <span className="gradient-text">Public Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            We publish all infrastructure projects funded by the county and partners — from box culvert 
            construction to boreholes and public buildings. Example items include Makona box culvert works 
            and periodic maintenance contracts listed in county tenders for Mihuu Ward.
          </p>
        </div>

        {/* Infrastructure Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {infrastructureStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center card-hover"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Infrastructure Projects by Category */}
        <div className="space-y-12">
          {infrastructureProjects.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <Icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-hover"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-2">
                            {project.name}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {project.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Wrench className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {project.budget}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Infrastructure Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Infrastructure Progress Gallery
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/Kodhiambo – Tinga road (newly opened).jpg"
                alt="Kodhiambo - Tinga Road"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Kodhiambo – Tinga Road</h4>
                  <p className="text-sm opacity-90">Newly opened road connection</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/Mahayamodernmarket.jpg"
                alt="Mahaya Modern Market"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Mahaya Modern Market</h4>
                  <p className="text-sm opacity-90">Completed market facility</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/WangarotModernmarket.jpg"
                alt="Wangarot Modern Market"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Wangarot Modern Market</h4>
                  <p className="text-sm opacity-90">Market infrastructure project</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/Obaga Rakombe bridge – ongoing.jpg"
                alt="Obaga Rakombe Bridge"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Obaga Rakombe Bridge</h4>
                  <p className="text-sm opacity-90">Bridge construction ongoing</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/obaga-after2.jpg"
                alt="Infrastructure Development"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Infrastructure Progress</h4>
                  <p className="text-sm opacity-90">Development in progress</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/obaga-after3.jpg"
                alt="Community Infrastructure"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Community Infrastructure</h4>
                  <p className="text-sm opacity-90">Ongoing development projects</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/AkomTigaKayodoRoad.jpg"
                alt="Road Infrastructure"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Road Development</h4>
                  <p className="text-sm opacity-90">Improved connectivity</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/download (3).jpg"
                alt="Agricultural Infrastructure"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Agricultural Support</h4>
                  <p className="text-sm opacity-90">Farming infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/pics/3b485a15-ox-ploughing-lr-1024x682.jpg"
                alt="Agricultural Development"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Agricultural Programs</h4>
                  <p className="text-sm opacity-90">Supporting local farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Infrastructure Issue */}
        <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg border border-primary-200 dark:border-primary-800 text-center">
          <Wrench className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">
            Report Infrastructure Issues
          </h3>
          <p className="text-primary-700 dark:text-primary-300 mb-6 max-w-2xl mx-auto">
            Notice damaged roads, broken water systems, or other infrastructure problems? 
            Report them to help us prioritize maintenance and repairs.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Report Infrastructure Issue
          </button>
        </div>
      </div>
    </section>
  )
}