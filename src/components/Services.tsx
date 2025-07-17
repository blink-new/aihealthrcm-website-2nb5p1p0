import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  FileText, 
  BarChart3, 
  Clock, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'
import DemoModal from './DemoModal'

export default function Services() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoType, setDemoType] = useState<'live' | 'video' | 'assessment'>('live')

  const openDemoModal = (type: 'live' | 'video' | 'assessment') => {
    setDemoType(type)
    setDemoModalOpen(true)
  }

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Denial Management',
      description: 'Advanced machine learning algorithms analyze denial patterns and automatically generate appeals with 95% success rate.',
      features: ['Automated appeal generation', 'Pattern recognition', 'Real-time processing'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Predictive Denial Prevention',
      description: 'Prevent denials before they happen with our AI system that identifies potential issues in real-time.',
      features: ['Pre-submission validation', 'Risk assessment', 'Automated corrections'],
      color: 'accent'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Maximize your revenue potential with intelligent analytics and automated workflow optimization.',
      features: ['Revenue analytics', 'Workflow automation', 'Performance tracking'],
      color: 'primary'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards and reporting tools provide actionable insights into your revenue cycle.',
      features: ['Custom dashboards', 'Real-time reporting', 'KPI tracking'],
      color: 'accent'
    },
    {
      icon: FileText,
      title: 'Claims Processing',
      description: 'Streamlined claims processing with automated validation and submission workflows.',
      features: ['Automated validation', 'Batch processing', 'Status tracking'],
      color: 'primary'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your revenue cycle with instant alerts and automated responses.',
      features: ['Continuous monitoring', 'Instant alerts', 'Automated responses'],
      color: 'accent'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your revenue cycle management with our suite of AI-powered tools 
            designed specifically for healthcare providers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isAccent = service.color === 'accent'
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-6 w-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className={`h-4 w-4 mr-2 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`w-full group-hover:${isAccent ? 'bg-accent' : 'bg-primary'} group-hover:text-white transition-all duration-300`}
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      })
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Revenue Cycle?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who have increased their revenue by 40% 
            with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => openDemoModal('live')}
            >
              Schedule Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => openDemoModal('assessment')}
            >
              Get Free Assessment
            </Button>
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