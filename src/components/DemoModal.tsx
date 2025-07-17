import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { 
  CalendarIcon, 
  Clock, 
  CheckCircle, 
  User, 
  Building, 
  Mail, 
  Phone,
  MessageSquare,
  Video,
  Users
} from 'lucide-react'
import { format } from 'date-fns'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  demoType?: 'live' | 'video' | 'assessment'
}

export default function DemoModal({ isOpen, onClose, demoType = 'live' }: DemoModalProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    teamSize: '',
    currentChallenges: '',
    preferredTime: '',
    additionalNotes: ''
  })

  const timeSlots = [
    '9:00 AM EST', '10:00 AM EST', '11:00 AM EST', 
    '1:00 PM EST', '2:00 PM EST', '3:00 PM EST', '4:00 PM EST'
  ]

  const teamSizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ]

  const roles = [
    'CEO/Executive',
    'CFO/Finance Director',
    'Revenue Cycle Manager',
    'Practice Manager',
    'IT Director',
    'Other'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    // Here you would integrate with your backend/database
    // For now, we'll simulate the submission
    const demoRequest = {
      ...formData,
      demoType,
      scheduledDate: selectedDate,
      scheduledTime: selectedTime,
      requestedAt: new Date().toISOString(),
      status: 'pending'
    }

    console.log('Demo request submitted:', demoRequest)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose()
      resetForm()
    }, 3000)
  }

  const resetForm = () => {
    setStep(1)
    setSelectedDate(undefined)
    setSelectedTime('')
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      role: '',
      teamSize: '',
      currentChallenges: '',
      preferredTime: '',
      additionalNotes: ''
    })
  }

  const getDemoTitle = () => {
    switch (demoType) {
      case 'live':
        return 'Schedule Live Demo'
      case 'video':
        return 'Watch Product Demo'
      case 'assessment':
        return 'Get Free Assessment'
      default:
        return 'Request Demo'
    }
  }

  const getDemoDescription = () => {
    switch (demoType) {
      case 'live':
        return 'Schedule a personalized 30-minute demo with our AI specialists'
      case 'video':
        return 'Watch a comprehensive overview of our AI-powered solutions'
      case 'assessment':
        return 'Get a free analysis of your current revenue cycle performance'
      default:
        return 'Learn how AIHealthRCM can transform your revenue cycle'
    }
  }

  // If it's a video demo, show the video player directly
  if (demoType === 'video') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-xl">
              <Video className="h-5 w-5 text-primary" />
              <span>Product Demo Video</span>
            </DialogTitle>
            <p className="text-gray-600">See how our AI prevents denials and automates recovery processes</p>
          </DialogHeader>

          <div className="space-y-6">
            {/* Video Player */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <video 
                controls 
                className="w-full h-full"
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iNDAiIGZpbGw9IiMyNTYzRUIiLz4KPHN2ZyB4PSIzODAiIHk9IjIwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIj4KPHA+UGxheSBCdXR0b248L3A+Cjwvc3ZnPgo8dGV4dCB4PSI0MDAiIHk9IjI2MCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCI+QUkgRGVuaWFsIE1hbmFnZW1lbnQgQXV0b21hdGlvbjwvdGV4dD4KPHR2ZXh0IHg9IjQwMCIgeT0iMjgwIiBmaWxsPSIjOUNBM0FGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkF1dG9tYXRlZCBEZW5pYWwgUHJldmVudGlvbiAmIFJlY292ZXJ5PC90ZXh0Pgo8dGV4dCB4PSI0MDAiIHk9IjMwMCIgZmlsbD0iIzEwQjk4MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj45NSUgRGVuaWFsIFByZXZlbnRpb24gUmF0ZTwvdGV4dD4KPC9zdmc+Cg=="
              >
                <source 
                  src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" 
                  type="video/mp4" 
                />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback. Please try a different browser or 
                  <Button 
                    variant="link" 
                    className="text-primary underline ml-1"
                    onClick={() => {
                      setDemoType('live')
                      // Reset to show live demo form
                    }}
                  >
                    schedule a live demo instead
                  </Button>.
                </p>
              </video>
              
              {/* Video overlay with play button for better UX */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                  <Video className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Video Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Denial Management Automation Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    AI-powered denial prediction before claim submission
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Automated appeal letter generation with supporting documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Real-time denial pattern analysis and root cause identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Automated follow-up workflows for denied claims
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Machine learning from successful appeals to improve future outcomes
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Demo Highlights</h3>
                <div className="space-y-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="font-medium text-primary text-sm">Duration: 12 minutes</div>
                    <div className="text-xs text-gray-600">Complete denial management automation walkthrough</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="font-medium text-accent text-sm">Live Denial Prevention</div>
                    <div className="text-xs text-gray-600">Watch AI identify and prevent denials in real-time</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="font-medium text-gray-700 text-sm">Automated Appeals</div>
                    <div className="text-xs text-gray-600">See how AI generates successful appeal letters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Automate Your Denial Management?
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule a personalized demo to see how our AI can prevent denials and recover more revenue
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    onClose()
                    // Trigger live demo modal
                    setTimeout(() => {
                      setDemoType('live')
                      // This will need to be handled by parent component
                    }, 100)
                  }}
                >
                  Schedule Live Demo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                    onClose()
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Request Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              {demoType === 'live' 
                ? `We'll send you a calendar invite for ${format(selectedDate!, 'MMMM d, yyyy')} at ${selectedTime}.`
                : 'We\'ll contact you within 24 hours with next steps.'
              }
            </p>
            <p className="text-sm text-gray-500">
              Check your email for confirmation details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            {demoType === 'live' && <Video className="h-5 w-5 text-primary" />}
            {demoType === 'video' && <Video className="h-5 w-5 text-primary" />}
            {demoType === 'assessment' && <Users className="h-5 w-5 text-primary" />}
            <span>{getDemoTitle()}</span>
          </DialogTitle>
          <p className="text-gray-600">{getDemoDescription()}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            {demoType === 'live' && (
              <>
                <div className={`flex-1 h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
              </>
            )}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                Your Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@healthcare.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Healthcare Provider Inc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamSizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email || !formData.company}
                  className="bg-primary hover:bg-primary/90"
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Requirements & Challenges */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Tell Us About Your Needs
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Revenue Cycle Challenges
                </label>
                <Textarea
                  value={formData.currentChallenges}
                  onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                  placeholder="Describe your main challenges with denials, revenue recovery, or claims processing..."
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes or Questions
                </label>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Any specific questions or areas you'd like us to focus on during the demo..."
                  rows={3}
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Previous
                </Button>
                <Button 
                  onClick={() => demoType === 'live' ? setStep(3) : handleSubmit()}
                  className="bg-primary hover:bg-primary/90"
                >
                  {demoType === 'live' ? 'Schedule Time' : 'Submit Request'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Schedule Time (Live Demo Only) */}
          {step === 3 && demoType === 'live' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Choose Your Preferred Time
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Demo Details</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                    <p><strong>Duration:</strong> 30 minutes</p>
                    <p><strong>Format:</strong> Video call (Zoom link will be sent)</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Previous
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-primary hover:bg-primary/90"
                >
                  Confirm Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}