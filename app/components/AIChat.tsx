'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const knowledgeBase = {
    greetings: [
      "Hello! I'm Mihuu Ward's AI assistant. How can I help you learn more about our ward services and projects?",
      "Hi there! I'm here to help you with information about Mihuu Ward projects, services, and how to get involved.",
      "Welcome! I can answer questions about ward projects, education services, health facilities, and more."
    ],
    
    projects: {
      keywords: ['project', 'development', 'construction', 'building', 'infrastructure'],
      response: "Mihuu Ward has several ongoing projects including ECDE classroom construction, borehole drilling at Nabuyole FYM Primary, health facility upgrades at Lukusi Dispensary, and road infrastructure improvements. You can view detailed progress and budgets in our Projects section."
    },
    
    education: {
      keywords: ['school', 'education', 'bursary', 'classroom', 'student', 'learning'],
      response: "Mihuu Ward serves multiple schools including Misimo Primary, Froy Lugulu Primary, Bakisa Girls Secondary, and others. We're currently constructing ECDE classrooms and provide bursary support. For bursary applications, contact the ward office with student details and financial documentation."
    },
    
    health: {
      keywords: ['health', 'hospital', 'dispensary', 'medical', 'clinic', 'treatment'],
      response: "Health services in Mihuu Ward are provided through local dispensaries including Lukusi Dispensary, which is currently being upgraded with a KSh 30M storey building project. For health facility issues or emergencies, contact the ward office immediately."
    },
    
    water: {
      keywords: ['water', 'borehole', 'drilling', 'clean water', 'supply'],
      response: "We're actively improving water access through borehole drilling projects, including the ongoing work at Nabuyole FYM Primary School. Over 1000 families have benefited from our water projects. Report water issues through our contact form."
    },
    
    contact: {
      keywords: ['contact', 'reach', 'phone', 'email', 'office', 'location'],
      response: "You can reach Mihuu Ward offices in Bungoma County. For urgent matters (water, health emergency, security), call during working hours. Use our contact form for general inquiries, service requests, or complaints."
    },
    
    transparency: {
      keywords: ['budget', 'finance', 'audit', 'procurement', 'tender', 'spending'],
      response: "Mihuu Ward is committed to transparency. We publish project budgets, procurement documents, and audit summaries. Monthly updates on project spending and upcoming tenders are available in our Transparency section."
    }
  }

  useEffect(() => {
    // Auto-open chat once, then minimize after 5 seconds
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasAutoOpened(true)
        addBotMessage(getRandomGreeting())
        
        // Auto-minimize after 5 seconds
        setTimeout(() => {
          setIsOpen(false)
        }, 5000)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getRandomGreeting = () => {
    return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)]
  }

  const addBotMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Check for greetings
    const greetingKeywords = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'help']
    if (greetingKeywords.some(keyword => message.includes(keyword))) {
      return getRandomGreeting()
    }

    // Check knowledge base
    for (const [topic, data] of Object.entries(knowledgeBase)) {
      if (topic === 'greetings') continue
      
      if (typeof data === 'object' && 'keywords' in data && 'response' in data) {
        if (data.keywords.some(keyword => message.includes(keyword))) {
          return data.response
        }
      }
    }

    // Navigation suggestions
    if (message.includes('navigate') || message.includes('go to') || message.includes('show me')) {
      return "I can help you navigate! Try asking about 'projects', 'education', 'health', 'water', 'contact', or 'transparency' to learn more about different ward services."
    }

    // Default response
    return "I'd be happy to help! You can ask me about ward projects, education services, health facilities, water projects, contact information, or transparency reports. What would you like to know?"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addUserMessage(inputValue)
    
    setTimeout(() => {
      const response = generateResponse(inputValue)
      addBotMessage(response)
    }, 500)

    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.start()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 transform hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* Chat Header */}
        <div className="bg-primary-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold">Mihuu Ward AI Assistant</h3>
              <p className="text-xs opacity-90">Online • Ready to help</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white text-sm"
            />
            <button
              onClick={startListening}
              disabled={isListening}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isListening
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}