import { Card, CardContent } from './ui/card'
import { Star, Quote, TrendingUp, DollarSign, Clock } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Financial Officer",
      company: "Metropolitan Health System",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      quote: "AIHealthRCM transformed our denial management process. We've seen a 42% increase in revenue recovery and reduced our denial rate by 60%. The AI predictions are incredibly accurate.",
      stats: {
        metric: "Revenue Recovery",
        value: "42%",
        period: "increase in 6 months"
      },
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Revenue Cycle Director",
      company: "Sunrise Medical Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: "The predictive denial prevention feature is a game-changer. We're catching issues before claims are even submitted. Our clean claim rate improved from 78% to 94%.",
      stats: {
        metric: "Clean Claim Rate",
        value: "94%",
        period: "up from 78%"
      },
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "Practice Administrator",
      company: "Coastal Family Medicine",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=400&h=400&fit=crop&crop=face",
      quote: "Implementation was seamless and the ROI was immediate. The automated appeal generation saved us 15 hours per week, and our denial recovery rate jumped to 96%.",
      stats: {
        metric: "Time Saved",
        value: "15hrs",
        period: "per week"
      },
      rating: 5
    }
  ]

  const caseStudies = [
    {
      company: "Regional Medical Center",
      specialty: "Multi-Specialty Hospital",
      challenge: "High denial rates and manual appeal processes",
      solution: "AI-powered denial management and automated appeals",
      results: [
        { metric: "Denial Rate Reduction", value: "65%" },
        { metric: "Revenue Recovery", value: "$2.3M" },
        { metric: "Processing Time", value: "80% faster" }
      ],
      timeline: "3 months"
    },
    {
      company: "Orthopedic Specialists Group",
      specialty: "Orthopedic Surgery",
      challenge: "Complex prior authorization denials",
      solution: "Predictive analytics and automated workflows",
      results: [
        { metric: "Prior Auth Approval", value: "92%" },
        { metric: "Revenue Increase", value: "$850K" },
        { metric: "Staff Efficiency", value: "45% improvement" }
      ],
      timeline: "4 months"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <Quote className="h-4 w-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how healthcare organizations are transforming their revenue cycles 
            and achieving remarkable results with our AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Stats */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{testimonial.stats.value}</div>
                      <div className="text-sm text-gray-600">{testimonial.stats.metric}</div>
                    </div>
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{testimonial.stats.period}</div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Decorative Quote */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Case Studies: Proven Results
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our AI-powered solutions deliver measurable 
              improvements in revenue cycle performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{study.company}</h4>
                      <p className="text-sm text-primary font-medium">{study.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Implementation</div>
                      <div className="font-semibold text-accent">{study.timeline}</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-4">Results</h5>
                    <div className="grid grid-cols-1 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                          <span className="text-sm text-gray-700">{result.metric}</span>
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-primary mr-2">{result.value}</span>
                            {result.metric.includes('Revenue') && <DollarSign className="h-4 w-4 text-accent" />}
                            {result.metric.includes('Time') && <Clock className="h-4 w-4 text-accent" />}
                            {result.metric.includes('Rate') && <TrendingUp className="h-4 w-4 text-accent" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by 500+ healthcare organizations nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">HIMSS</div>
            <div className="text-2xl font-bold text-gray-400">HFMA</div>
            <div className="text-2xl font-bold text-gray-400">AAHAM</div>
            <div className="text-2xl font-bold text-gray-400">MGMA</div>
            <div className="text-2xl font-bold text-gray-400">AMA</div>
          </div>
        </div>
      </div>
    </section>
  )
}