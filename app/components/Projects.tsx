'use client'

import { useState } from 'react'
import { Calendar, MapPin, DollarSign, Users, Download, Filter, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'Construction of ECDE Classrooms',
      description: 'Proposed construction of ECDE classrooms at Froy Lugulu, Pag Primary and Murumba Primary within Mihuu Ward.',
      status: 'proposed',
      progress: 0,
      budget: 'KSh 2,500,000',
      implementer: 'Bungoma County Government',
      location: 'Multiple Schools',
      category: 'education',
      lastUpdated: '2024-01-15',
      documents: ['Project Proposal', 'Budget Breakdown'],
      image: '/pics/classroom2.jpg'
    },
    {
      id: 2,
      name: 'Borehole and Water Projects',
      description: 'County-funded water drilling project at Nabuyole FYM Primary School and other water access works.',
      status: 'ongoing',
      progress: 65,
      budget: 'KSh 1,800,000',
      implementer: 'County Water Department',
      location: 'Nabuyole FYM Primary',
      category: 'water',
      lastUpdated: '2024-01-10',
      documents: ['Contract Agreement', 'Progress Report'],
      image: '/pics/download (4).jpg'
    },
    {
      id: 3,
      name: 'Health Facility Upgrades',
      description: 'Planned storey building projects including KSh 30M storey building at Lukusi Dispensary.',
      status: 'ongoing',
      progress: 40,
      budget: 'KSh 30,000,000',
      implementer: 'County Health Department',
      location: 'Lukusi Dispensary',
      category: 'health',
      lastUpdated: '2024-01-08',
      documents: ['Architectural Plans', 'Environmental Impact'],
      image: '/pics/download (5).jpg'
    },
    {
      id: 4,
      name: 'Ward Office Construction',
      description: 'Ward administrator office works reported as near completion but flagged in public audit reports.',
      status: 'review',
      progress: 85,
      budget: 'KSh 5,000,000',
      implementer: 'County Administration',
      location: 'Mihuu Ward Center',
      category: 'infrastructure',
      lastUpdated: '2024-01-05',
      documents: ['Audit Report', 'Completion Certificate'],
      image: '/pics/Mahayamodernmarket.jpg'
    },
    {
      id: 5,
      name: 'Road Infrastructure Improvement',
      description: 'Makona box culvert works and periodic maintenance contracts for Mihuu Ward roads.',
      status: 'completed',
      progress: 100,
      budget: 'KSh 3,200,000',
      implementer: 'County Roads Department',
      location: 'Makona Area',
      category: 'infrastructure',
      lastUpdated: '2023-12-20',
      documents: ['Completion Report', 'Quality Assessment'],
      image: '/pics/Kodhiambo – Tinga road (newly opened).jpg'
    },
    {
      id: 6,
      name: 'Agricultural Support Program',
      description: 'Supporting local farmers with modern farming techniques and equipment access.',
      status: 'ongoing',
      progress: 70,
      budget: 'KSh 4,500,000',
      implementer: 'County Agriculture Department',
      location: 'Multiple Locations',
      category: 'agriculture',
      lastUpdated: '2024-01-12',
      documents: ['Program Guidelines', 'Beneficiary List'],
      image: '/pics/workers-racks-coffee-Kenya-Nyeri.webp'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'education', name: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'health', name: 'Health', count: projects.filter(p => p.category === 'health').length },
    { id: 'water', name: 'Water', count: projects.filter(p => p.category === 'water').length },
    { id: 'infrastructure', name: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length },
    { id: 'agriculture', name: 'Agriculture', count: projects.filter(p => p.category === 'agriculture').length },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'ongoing':
        return <Clock className="w-5 h-5 text-blue-500" />
      case 'proposed':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'review':
        return <AlertCircle className="w-5 h-5 text-orange-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'proposed':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'review':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Projects</span> — Current, Ongoing and Completed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            This section tracks Ward and County projects implemented within Mihuu. Each project shows 
            status, budget (where public), implementer, and progress photos. New projects are uploaded 
            as they are cleared by the County.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {getStatusIcon(project.status)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.budget}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.implementer}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.lastUpdated}
                    </span>
                  </div>
                </div>

                {/* Documents */}
                <div className="flex flex-wrap gap-2">
                  {project.documents.map((doc, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Download className="w-3 h-3" />
                      <span>{doc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Project Report CTA */}
        <div className="text-center">
          <button className="btn-hover bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Download className="w-5 h-5" />
            <span>Download Complete Project Report</span>
          </button>
        </div>
      </div>
    </section>
  )
}