'use client'

import { GraduationCap, BookOpen, Users, Download, Award, School } from 'lucide-react'

export function Education() {
  const schools = [
    {
      name: 'Misimo Primary School',
      type: 'Primary',
      status: 'ECDE classroom and latrine upgrades proposed',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['ECDE Construction', 'Latrine Upgrades'],
      image: '/pics/classroom2.jpg'
    },
    {
      name: 'Froy Lugulu Primary',
      type: 'Primary',
      status: 'ECDE construction listed under county projects',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['ECDE Construction'],
      image: '/pics/classroom4.jpg'
    },
    {
      name: 'Bakisa Girls Secondary',
      type: 'Secondary',
      status: 'Listed for storey building project funding',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['Storey Building Construction'],
      image: '/pics/images (3).jpg'
    },
    {
      name: 'Pag Primary School',
      type: 'Primary',
      status: 'Mentioned in county project lists',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['Infrastructure Improvements'],
      image: '/pics/images (4).jpg'
    },
    {
      name: 'Murumba Primary',
      type: 'Primary',
      status: 'ECDE construction proposed',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['ECDE Construction'],
      image: '/pics/download (1).jpg'
    },
    {
      name: 'Nabuyole FYM Primary',
      type: 'Primary',
      status: 'Water drilling project ongoing',
      enrollment: 'To be verified',
      principal: 'To be verified',
      projects: ['Borehole Installation', 'Water Access'],
      image: '/pics/download (2).jpg'
    }
  ]

  const educationStats = [
    { icon: School, label: 'Schools Served', value: '10+', color: 'text-blue-500' },
    { icon: Users, label: 'Students Supported', value: '500+', color: 'text-green-500' },
    { icon: Award, label: 'Bursaries Awarded', value: '200+', color: 'text-purple-500' },
    { icon: BookOpen, label: 'ECDE Projects', value: '5', color: 'text-orange-500' },
  ]

  const bursaryRequirements = [
    'Student details and academic records',
    'School information and fee structure',
    'Financial need documentation',
    'Parent/guardian identification',
    'Academic performance records',
    'Recommendation letter from school'
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education in <span className="gradient-text">Mihuu Ward</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Mihuu is served by a network of primary and secondary schools supporting ECDE, 
            primary and secondary education. County education projects include construction 
            of classrooms and school water/sanitation upgrades.
          </p>
        </div>

        {/* Education Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {educationStats.map((stat, index) => {
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

        {/* Schools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Schools to Highlight
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Please verify enrollment and principal names before publication.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {school.name}
                    </h4>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-full">
                      {school.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {school.status}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Enrollment:</span>
                      <span className="text-gray-700 dark:text-gray-300">{school.enrollment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Principal:</span>
                      <span className="text-gray-700 dark:text-gray-300">{school.principal}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {school.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bursary Information */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Bursary Application Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Mihuu Ward provides fair and transparent bursary distribution to support 
              students in need. Applications are reviewed quarterly to ensure equitable 
              access to education for all ward residents.
            </p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">Required Documents:</h4>
              {bursaryRequirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">{requirement}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-hover bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Download className="w-5 h-5" />
              <span>Download Bursary Application Form</span>
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <GraduationCap className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Education Support Services
              </h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Bursary Applications</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <School className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">School Infrastructure Projects</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <Award className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Scholarship Opportunities</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Vocational Training Links</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Application Period:</strong> Bursary applications are reviewed quarterly. 
                Submit your complete application to the Ward Office or upload via the website contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}