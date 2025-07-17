import { Button } from './ui/button'
import { Play, ArrowRight, CheckCircle, Clock, TrendingUp, Shield } from 'lucide-react'
import { useState } from 'react'

export default function RCMWorkflow() {
  const [isPlaying, setIsPlaying] = useState(false)

  const workflowSteps = [
    {
      step: '01',
      title: 'Pre-Submission Analysis',
      description: 'AI analyzes claims before submission to identify potential denial risks and automatically corrects issues',
      icon: CheckCircle,
      color: 'primary'
    },
    {
      step: '02', 
      title: 'Real-Time Denial Prevention',
      description: 'Machine learning algorithms prevent 95% of denials by validating claims against payer-specific rules',
      icon: Shield,
      color: 'accent'
    },
    {
      step: '03',
      title: 'Automated Appeal Generation',
      description: 'AI instantly generates compelling appeal letters with supporting documentation for denied claims',
      icon: Clock,
      color: 'primary'
    },
    {
      step: '04',
      title: 'Revenue Recovery Optimization',
      description: 'Continuous learning from successful appeals to maximize future denial recovery rates',
      icon: TrendingUp,
      color: 'accent'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Play className="h-4 w-4 mr-2" />
            RCM Workflow
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See AI-Powered Denial Management Automation in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our intelligent system prevents denials before they happen and automatically 
            recovers revenue from denied claims using advanced AI technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail with Play Button */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <Button
                          size="lg"
                          className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-primary hover:text-primary shadow-lg mb-4"
                          onClick={() => setIsPlaying(true)}
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </Button>
                        <p className="text-white font-medium">Watch Denial Management Automation</p>
                        <p className="text-white/80 text-sm">5:30 minutes</p>
                      </div>
                    </div>
                    
                    {/* Animated Background Elements */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
                    <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p>Loading video...</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-primary mt-2"
                        onClick={() => setIsPlaying(false)}
                      >
                        Back to thumbnail
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm">Live Demo</span>
                    </div>
                  </div>
                  <div className="text-sm opacity-80">
                    HD Quality • 5:30
                  </div>
                </div>
              </div>
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">Denial Prevention</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-accent">40%</div>
                <div className="text-sm text-gray-600">Revenue Increase</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Complete Denial Management Automation Workflow
            </h3>
            
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isAccent = step.color === 'accent'
              
              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`text-sm font-bold px-2 py-1 rounded ${
                        isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                      }`}>
                        {step.step}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  Learn More About Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by Healthcare Providers Nationwide
            </h3>
            <p className="text-gray-600">
              Join the revolution in AI-powered denial management automation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-sm text-gray-600">Revenue Recovered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-gray-600">Claims Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}