'use client'

import { FileText, DollarSign, Eye, Download, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'

export function Transparency() {
  const budgetData = [
    { category: 'Education Projects', allocated: 15000000, spent: 12500000, percentage: 83 },
    { category: 'Health Infrastructure', allocated: 35000000, spent: 28000000, percentage: 80 },
    { category: 'Water & Sanitation', allocated: 8000000, spent: 6500000, percentage: 81 },
    { category: 'Roads & Transport', allocated: 12000000, spent: 11200000, percentage: 93 },
    { category: 'Administration', allocated: 5000000, spent: 4800000, percentage: 96 },
  ]

  const procurementItems = [
    {
      title: 'Borehole Drilling Services',
      status: 'Open',
      closingDate: '2024-02-15',
      estimatedValue: 'KSh 2,500,000',
      category: 'Water Projects'
    },
    {
      title: 'ECDE Classroom Construction',
      status: 'Evaluation',
      closingDate: '2024-01-30',
      estimatedValue: 'KSh 3,200,000',
      category: 'Education'
    },
    {
      title: 'Medical Equipment Supply',
      status: 'Awarded',
      closingDate: '2024-01-15',
      estimatedValue: 'KSh 1,800,000',
      category: 'Health'
    },
    {
      title: 'Road Maintenance Services',
      status: 'Open',
      closingDate: '2024-02-20',
      estimatedValue: 'KSh 4,500,000',
      category: 'Infrastructure'
    }
  ]

  const documents = [
    {
      title: 'Annual Budget Report 2024',
      type: 'Budget',
      size: '2.4 MB',
      date: '2024-01-10',
      downloads: 245
    },
    {
      title: 'Q3 Project Progress Report',
      type: 'Progress Report',
      size: '1.8 MB',
      date: '2024-01-05',
      downloads: 189
    },
    {
      title: 'Audit Findings Summary',
      type: 'Audit Report',
      size: '3.1 MB',
      date: '2023-12-20',
      downloads: 156
    },
    {
      title: 'Procurement Plan 2024',
      type: 'Procurement',
      size: '1.2 MB',
      date: '2024-01-01',
      downloads: 203
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'evaluation':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'awarded':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'evaluation':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'awarded':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="transparency" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Public Finance & <span className="gradient-text">Transparency</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Transparency is core to our site. We provide downloadable project documents, budgets and 
            audit summaries where available. The ward publishes monthly updates on project spending 
            and procurement documents to keep residents informed.
          </p>
        </div>

        {/* Budget Dashboard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Budget Allocation & Spending Dashboard
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Budget Breakdown */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Project Spend vs Budget
              </h4>
              <div className="space-y-4">
                {budgetData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Spent: {formatCurrency(item.spent)}</span>
                      <span>Allocated: {formatCurrency(item.allocated)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-400">
                  KSh 75M
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-300">
                  Total Budget 2024
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-800 dark:text-green-400">
                  85%
                </div>
                <div className="text-sm text-green-600 dark:text-green-300">
                  Budget Utilization
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-800 dark:text-purple-400">
                  24
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-300">
                  Active Projects
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg text-center">
                <Eye className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-800 dark:text-orange-400">
                  12
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-300">
                  Audit Findings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Procurement & Tenders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Open Tenders & Contracts
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            All current tenders and procurement notices relevant to Mihuu are listed here. 
            Contractors can download RFPs and submit queries through the site.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {procurementItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(item.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Category:</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Estimated Value:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.estimatedValue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Closing Date:</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.closingDate}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download RFP</span>
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="btn-hover bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Eye className="w-5 h-5" />
              <span>View All Procurement & Tenders</span>
            </button>
          </div>
        </div>

        {/* Document Library */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Public Documents & Reports
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <FileText className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{doc.size}</span>
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {doc.title}
                </h4>
                
                <div className="space-y-1 mb-4">
                  <div className="text-xs text-gray-500">
                    Type: <span className="text-gray-700 dark:text-gray-300">{doc.type}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Date: <span className="text-gray-700 dark:text-gray-300">{doc.date}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Downloads: <span className="text-gray-700 dark:text-gray-300">{doc.downloads}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Commitment */}
        <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg border border-primary-200 dark:border-primary-800 text-center">
          <Eye className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">
            Our Transparency Commitment
          </h3>
          <p className="text-primary-700 dark:text-primary-300 mb-6 max-w-3xl mx-auto">
            We are committed to open governance and accountability. All project documents, budgets, 
            and audit summaries are made available to the public. Monthly updates on project spending 
            and procurement documents ensure residents stay informed about ward development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Subscribe to Updates
            </button>
            <button className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300">
              Request Information
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}