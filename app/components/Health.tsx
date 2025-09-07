'use client'

import { Heart, MapPin, Clock, Phone, AlertTriangle, Stethoscope, Building, Users } from 'lucide-react'

export function Health() {
  const healthFacilities = [
    {
      name: 'Lukusi Dispensary',
      type: 'Dispensary',
      status: 'Under Upgrade - KSh 30M Storey Building',
      services: ['Outpatient Care', 'Maternal Health', 'Immunization', 'Basic Laboratory'],
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      contact: 'To be verified',
      projects: ['Storey Building Construction', 'Equipment Upgrade'],
      image: '/pics/images (1).jpg'
    },
    {
      name: 'Mihuu Health Center',
      type: 'Health Center',
      status: 'Operational - Equipment Upgrade Planned',
      services: ['General Medicine', 'Family Planning', 'HIV Testing', 'TB Treatment'],
      hours: 'Mon-Sun: 24 Hours',
      contact: '+254 700 000 003',
      projects: ['Medical Equipment', 'Staff Training'],
      image: '/pics/download.jpg'
    }
  ]

  const nearbyFacilities = [
    {
      name: 'Webuye County Hospital',
      type: 'Level 4 Hospital',
      distance: '15 km',
      services: ['Emergency Care', 'Surgery', 'Specialized Treatment'],
      contact: '+254 700 000 000'
    },
    {
      name: 'Bungoma County Referral Hospital',
      type: 'Level 5 Hospital',
      distance: '25 km',
      services: ['Specialized Care', 'ICU', 'Advanced Surgery'],
      contact: '+254 700 000 001'
    }
  ]

  const healthStats = [
    { icon: Building, label: 'Health Facilities', value: '5+', color: 'text-red-500' },
    { icon: Users, label: 'Patients Served Monthly', value: '1000+', color: 'text-blue-500' },
    { icon: Stethoscope, label: 'Health Programs', value: '8', color: 'text-green-500' },
    { icon: Heart, label: 'Maternal Health Cases', value: '50+', color: 'text-pink-500' },
  ]

  const healthServices = [
    {
      title: 'Outpatient Services',
      description: 'General consultation, basic treatment, and health screening',
      icon: Stethoscope
    },
    {
      title: 'Maternal Health',
      description: 'Antenatal care, delivery services, and postnatal support',
      icon: Heart
    },
    {
      title: 'Immunization',
      description: 'Child immunization programs and adult vaccination services',
      icon: Users
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency response and ambulance services',
      icon: AlertTriangle
    }
  ]

  return (
    <section id="health" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Health Services & <span className="gradient-text">Clinics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Mihuu residents access health services through local dispensaries and county health facilities. 
            Where projects are active (clinic upgrades, maternal health improvements), we list contact 
            details and operating hours.
          </p>
        </div>

        {/* Health Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {healthStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center card-hover"
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

        {/* Local Health Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Local Health Facilities
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {healthFacilities.map((facility) => (
              <div
                key={facility.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {facility.name}
                    </h4>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-full">
                      {facility.type}
                    </span>
                  </div>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {facility.status}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {facility.hours}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {facility.contact}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Services:</h5>
                    <div className="flex flex-wrap gap-2">
                      {facility.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Current Projects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {facility.projects.map((project) => (
                        <span
                          key={project}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Report Health Issue Card */}
            <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-lg p-8 flex flex-col justify-center">
              <AlertTriangle className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Report a Health Facility Issue</h4>
              <p className="mb-6 opacity-90">
                Experiencing problems with health services? Report issues with facilities, 
                equipment, or service delivery to help us improve healthcare access.
              </p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 self-start">
                Report Issue
              </button>
            </div>
          </div>
        </div>

        {/* Nearby Referral Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nearby Referral Hospitals
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {nearbyFacilities.map((facility) => (
              <div
                key={facility.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {facility.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{facility.type}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{facility.distance}</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {facility.contact}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded border"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Services Overview */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Available Health Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center card-hover"
                >
                  <Icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border border-red-200 dark:border-red-800 text-center">
          <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">
            Emergency Health Services
          </h3>
          <p className="text-red-700 dark:text-red-300 mb-4">
            For medical emergencies, contact the nearest health facility or call the county ambulance service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-red-700 dark:text-red-300">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Emergency: 999</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-red-700 dark:text-red-300">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Ambulance: +254 700 000 000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}