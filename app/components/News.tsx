'use client'

import { useState, useMemo } from 'react'
import { Calendar, User, Tag, ArrowRight, Clock, TrendingUp } from 'lucide-react'

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const newsArticles = [
    {
      id: 1,
      title: 'County Launches Water Drilling Project at Nabuyole FYM Primary',
      excerpt: 'On January 10th, 2024, the County Government launched a KSh 1.8M water drilling and equipping project at Nabuyole FYM Primary School aimed at improving access to clean water for pupils and nearby households.',
      content: 'The project will provide a reliable water source for pupils and nearby households, support school hygiene and improve community health. The county contractor will install boreholes and connect to school facilities.',
      date: '2024-01-10',
      author: 'Ward Administration',
      category: 'Water Projects',
      image: '/pics/images.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'ECDE Classroom Construction Project Retendered',
      excerpt: 'The ECDE classroom construction at Misimo Primary has been retendered following procurement review. The project aims to improve early childhood education facilities in the ward.',
      content: 'Project status updated to retendered phase. Next step involves contractor selection for the construction of ECDE classrooms at multiple primary schools within Mihuu Ward.',
      date: '2024-01-08',
      author: 'Education Department',
      category: 'Education',
      image: '/pics/classroom2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Ward Office Construction Nears Completion',
      excerpt: 'The ward administrator office construction is at 85% completion as of January 5th, 2024. The project has been flagged in public audit reports for review.',
      content: 'Construction progress continues with expected handover by February 2024. The project has undergone audit review to ensure compliance with county standards.',
      date: '2024-01-05',
      author: 'County Administration',
      category: 'Infrastructure',
      image: '/pics/Mahayamodernmarket.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Health Facility Upgrades Progress Update',
      excerpt: 'The KSh 30M storey building project at Lukusi Dispensary is progressing well, with 40% completion achieved. The upgrade will significantly improve healthcare services.',
      content: 'The health facility upgrade includes modern equipment installation, expanded patient capacity, and improved service delivery capabilities for Mihuu Ward residents.',
      date: '2024-01-03',
      author: 'Health Department',
      category: 'Health',
      image: '/pics/classroom4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Road Infrastructure Improvements Completed',
      excerpt: 'The Makona box culvert works and road maintenance project has been successfully completed, improving accessibility and drainage in the area.',
      content: 'The completed road infrastructure project includes improved drainage systems, better road surfaces, and enhanced connectivity for local communities.',
      date: '2023-12-20',
      author: 'Roads Department',
      category: 'Infrastructure',
      image: '/pics/Kodhiambo – Tinga road (newly opened).jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Community Participation in Development Planning',
      excerpt: 'Mihuu Ward residents are encouraged to participate in the upcoming development planning sessions scheduled for February 2024.',
      content: 'Community input is crucial for identifying priority projects and ensuring development initiatives meet local needs and expectations.',
      date: '2023-12-15',
      author: 'Community Development',
      category: 'Community',
      image: '/pics/classroom2.jpg',
      featured: false
    }
  ]

  const categories = useMemo(() => [
    { name: 'All', count: newsArticles.length },
    { name: 'Water Projects', count: newsArticles.filter(article => article.category === 'Water Projects').length },
    { name: 'Education', count: newsArticles.filter(article => article.category === 'Education').length },
    { name: 'Infrastructure', count: newsArticles.filter(article => article.category === 'Infrastructure').length },
    { name: 'Health', count: newsArticles.filter(article => article.category === 'Health').length },
    { name: 'Community', count: newsArticles.filter(article => article.category === 'Community').length },
  ], [newsArticles])

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return newsArticles
    return newsArticles.filter(article => article.category === selectedCategory)
  }, [newsArticles, selectedCategory])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Water Projects':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Education':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Infrastructure':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 'Health':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'Community':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const featuredArticle = filteredArticles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="gradient-text">News</span> from Mihuu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, project launches, progress updates, 
            and community announcements from Mihuu Ward.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 border ${
                selectedCategory === category.name
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredArticle.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Mihuu Ward News</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on projects, 
            community events, and important announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Archive Link */}
        <div className="text-center mt-12">
          <button className="btn-hover bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Clock className="w-5 h-5" />
            <span>View News Archive</span>
          </button>
        </div>
      </div>
    </section>
  )
}