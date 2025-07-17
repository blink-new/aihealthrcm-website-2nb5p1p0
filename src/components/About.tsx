import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Healthcare Providers', icon: Users },
    { number: '$2.5B+', label: 'Revenue Recovered', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'AI Monitoring', icon: Lightbulb }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI technology to solve complex healthcare revenue challenges.'
    },
    {
      title: 'Results Driven',
      description: 'Our focus is on delivering measurable improvements to your bottom line.'
    },
    {
      title: 'Healthcare Focused',
      description: 'Deep expertise in healthcare revenue cycle management and compliance requirements.'
    },
    {
      title: 'Partnership Approach',
      description: 'We work as an extension of your team to ensure long-term success.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About AIHealthRCM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of healthcare revenue cycle management through 
            artificial intelligence and innovative technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Transforming Healthcare Revenue Through AI Innovation
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AIHealthRCM was founded with a simple mission: to help healthcare providers 
              maximize their revenue potential while reducing administrative burden. Our 
              AI-powered platform specializes in denial management, combining advanced 
              machine learning with deep healthcare industry expertise.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">AI-Powered Automation</h4>
                  <p className="text-gray-600">Advanced algorithms that learn and adapt to your specific denial patterns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Healthcare Expertise</h4>
                  <p className="text-gray-600">Deep understanding of healthcare regulations and payer requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-gray-600">Track record of increasing revenue by 40% on average for our clients.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              Learn More About Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-gray-50/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leadership
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Led by industry veterans with deep expertise in healthcare revenue cycle management
            </p>
          </div>

          {/* CEO Spotlight */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  Chief Executive Officer
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                  Manikandan Govindan
                </h4>
                <p className="text-xl text-gray-600 mb-6">
                  20+ Years of US Healthcare Experience
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Manikandan brings over two decades of deep expertise in US healthcare operations, 
                  revenue cycle management, and healthcare technology innovation. His extensive 
                  experience spans across multiple healthcare sectors, from provider operations 
                  to payer systems, giving him unique insights into the challenges facing 
                  healthcare organizations today.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Expert in US Healthcare Regulations & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Proven Track Record in Revenue Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Visionary Leader in Healthcare AI Innovation</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">MG</span>
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "Our mission is to eliminate the revenue leakage that plagues healthcare 
                      providers through intelligent automation and AI-driven insights."
                    </blockquote>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">Manikandan Govindan</div>
                      <div>CEO & Founder, AIHealthRCM</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Built by Healthcare Technology Experts
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team combines decades of healthcare industry experience with cutting-edge 
            AI expertise to deliver solutions that truly understand your challenges.
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Years Healthcare Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">AI Engineers & Specialists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}