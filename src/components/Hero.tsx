import { Button } from './ui/button'
import { ArrowRight, Brain, Zap, Shield, TrendingUp, Target, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import DemoModal from './DemoModal'

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState({
    denialRecovery: 0,
    revenueIncrease: 0,
    processing: 0
  })
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoType, setDemoType] = useState<'live' | 'video' | 'assessment'>('live')

  const openDemoModal = (type: 'live' | 'video' | 'assessment') => {
    setDemoType(type)
    setDemoModalOpen(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        denialRecovery: 95,
        revenueIncrease: 40,
        processing: 1247
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
              <Target className="h-4 w-4 mr-2" />
              #1 AI-Powered Denial Management
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Maximize Revenue with{' '}
              <span className="text-primary relative">
                AI-Powered
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
              </span>{' '}
              <span className="text-accent">Denial Management</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our AI prevents 95% of denials before they happen and recovers 40% more revenue 
              from existing denials. Purpose-built for healthcare providers who are tired of 
              losing money to preventable claim rejections. Led by 20+ years of US healthcare expertise.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-700">Predict denials before submission</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-700">Automated appeal generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-700">Real-time claim validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-700">24/7 revenue monitoring</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                onClick={() => openDemoModal('live')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3"
                onClick={() => openDemoModal('video')}
              >
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-primary transition-all duration-1000 ease-out">
                  {animatedStats.denialRecovery}%
                </div>
                <div className="text-sm text-gray-600">Denial Recovery Rate</div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-primary h-1 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${animatedStats.denialRecovery}%` }}
                  />
                </div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-accent transition-all duration-1000 ease-out">
                  {animatedStats.revenueIncrease}%
                </div>
                <div className="text-sm text-gray-600">Revenue Increase</div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-accent h-1 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${animatedStats.revenueIncrease}%` }}
                  />
                </div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-primary transition-all duration-1000 ease-out">
                  {animatedStats.processing.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Claims Processed Today</div>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                  <span className="text-xs text-green-600">Live Processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced AI Dashboard Animation */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-ping" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              </div>

              {/* AI Dashboard Mockup */}
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">AI Denial Management</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Live Processing</span>
                  </div>
                </div>

                {/* Enhanced Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">AI Processing</span>
                    </div>
                    <div className="text-2xl font-bold text-primary transition-all duration-1000">
                      {animatedStats.processing.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Claims analyzed today</div>
                    <div className="flex items-center mt-2">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse mr-1" />
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse mr-1" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <span className="text-xs text-primary ml-2">Processing...</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium text-gray-700">Recovery Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-accent transition-all duration-1000">
                      {animatedStats.denialRecovery}.8%
                    </div>
                    <div className="text-xs text-gray-600">This month</div>
                    <div className="text-xs text-accent mt-1">↗ +2.3% from last month</div>
                  </div>
                </div>

                {/* Enhanced Progress Bars */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">Denial Prevention</span>
                      <span className="text-primary font-bold">{animatedStats.denialRecovery}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                        style={{ width: `${animatedStats.denialRecovery}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">Revenue Recovery</span>
                      <span className="text-accent font-bold">{animatedStats.revenueIncrease + 47}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-accent to-accent/80 h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                        style={{ width: `${animatedStats.revenueIncrease + 47}%`, transitionDelay: '0.3s' }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced AI Insights */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="h-5 w-5 text-primary animate-pulse" />
                    <span className="text-sm font-semibold text-gray-800">AI Insights</span>
                    <div className="ml-auto text-xs text-gray-500">Real-time</div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Prevented 23 denials in the last hour
                    </p>
                    <p className="text-sm text-gray-700 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                      Auto-corrected 18 claims before submission
                    </p>
                    <p className="text-sm text-gray-700 flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse" />
                      Generated 5 successful appeals
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-2 w-6 h-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-ping" />
              <div className="absolute bottom-1/4 -left-2 w-4 h-4 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        demoType={demoType}
      />
    </section>
  )
}