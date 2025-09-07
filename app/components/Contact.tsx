'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, FileText, AlertTriangle, CheckCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: '',
    attachment: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Mihuu Ward Offices', 'Bungoma County, Kenya'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+254 700 000 000', 'Emergency: 999'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@mihuuward.go.ke', 'complaints@mihuuward.go.ke'],
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 12:00 PM'],
      color: 'text-orange-500'
    }
  ]

  const serviceCategories = [
    { value: '', label: 'Select Category' },
    { value: 'service', label: 'Service Request' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'bursary', label: 'Bursary Application' },
    { value: 'project', label: 'Project Inquiry' },
    { value: 'tender', label: 'Tender Information' },
    { value: 'health', label: 'Health Facility Issue' },
    { value: 'water', label: 'Water Issue' },
    { value: 'infrastructure', label: 'Infrastructure Problem' },
    { value: 'general', label: 'General Inquiry' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: '',
        message: '',
        attachment: null
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const getAIResponse = () => {
    const category = formData.category
    let response = ''
    
    switch (category) {
      case 'bursary':
        response = 'For bursary applications, please include: 1) Student details and academic records, 2) School information and fee structure, 3) Financial need documentation, 4) Parent/guardian identification. Applications are reviewed quarterly.'
        break
      case 'project':
        response = 'Thank you for your project inquiry. Please specify the type of project (education, health, water, infrastructure) and your location within Mihuu Ward for targeted assistance.'
        break
      case 'health':
        response = 'For health facility issues, please provide: 1) Facility name and location, 2) Nature of the problem, 3) Date and time of incident, 4) Contact information for follow-up. Emergency health issues should be reported immediately.'
        break
      case 'water':
        response = 'For water-related issues, please include: 1) Specific location of the problem, 2) Type of issue (broken pipe, no supply, quality concerns), 3) Duration of the problem, 4) Number of households affected.'
        break
      case 'infrastructure':
        response = 'For infrastructure problems, please provide: 1) Exact location with landmarks, 2) Type of infrastructure (road, bridge, building), 3) Nature of the problem, 4) Safety concerns if any.'
        break
      default:
        response = 'Thank you for contacting Mihuu Ward. Please provide detailed information about your inquiry, and we will respond within 3 business days. For urgent matters, please call our office directly.'
    }
    
    setFormData(prev => ({
      ...prev,
      message: response
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact & <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We want to hear from you. For service requests, complaints, or general enquiries, 
            use the form below or contact the Ward Office during working hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 dark:text-gray-400">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                    Emergency Services
                  </h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    For urgent matters (water emergencies, health crises, security issues), 
                    call the ward office during working hours or contact emergency services directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 text-sm text-center">
                <strong>Response Time:</strong> We aim to respond to enquiries within 3 business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 dark:text-green-200">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 dark:text-red-200">
                  Failed to send message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="+254 700 000 000"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  {serviceCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Please provide detailed information about your inquiry..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={getAIResponse}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>AI Quick Response</span>
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How can I apply for a bursary?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Download the bursary form from the Education section, complete it with required documents, 
                and submit to the Ward Office or upload via the website contact form.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How can I report a broken pipe or water issue?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Use the "Report an Issue" form above with category "Water Issue" or call the 
                Ward Office emergency line for urgent water problems.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How can I get involved in ward projects?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Contact us through the form above with category "General Inquiry" and specify 
                your skills and availability. We'll match you with suitable volunteer opportunities.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Where can I find tender information?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All current tenders and procurement notices are listed in our Transparency section. 
                You can download RFPs and submit queries through the contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}