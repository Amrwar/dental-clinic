'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Smile Avenue, Suite 200\nNew York, NY 10001',
    link: 'https://maps.google.com',
    linkText: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '(123) 456-7890\n(123) 456-7891',
    link: 'tel:+1234567890',
    linkText: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@brightsmile.com\nappointments@brightsmile.com',
    link: 'mailto:hello@brightsmile.com',
    linkText: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM\nSun: Closed',
  },
]

const services = [
  'General Checkup',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Dental Implants',
  'Orthodontics',
  'Emergency Care',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient pattern-overlay overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-accent-mint rounded-full text-accent-teal text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-display-lg text-navy-900 mb-6">
              Get in Touch{' '}
              <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-body-lg text-navy-600 mb-8">
              Have questions or ready to schedule your appointment? We&apos;re here to help. Reach out to our friendly team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section background="white" padding="md">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className={`text-center animate-slide-up stagger-${index + 1}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-mint rounded-2xl flex items-center justify-center">
                <info.icon className="w-7 h-7 text-accent-teal" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">
                {info.title}
              </h3>
              <p className="text-navy-600 text-sm whitespace-pre-line mb-3">
                {info.content}
              </p>
              {info.link && (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-accent-teal font-medium text-sm hover:underline"
                >
                  {info.linkText} →
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <SectionHeader
              label="Book Appointment"
              title="Schedule Your Visit"
              description="Fill out the form below and our team will get back to you within 24 hours."
              align="left"
            />

            {isSubmitted ? (
              <Card className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent-mint rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-accent-teal" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-navy-600 mb-6">
                  Your appointment request has been received. We&apos;ll contact you shortly to confirm your booking.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Submit Another Request
                </Button>
              </Card>
            ) : (
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-input appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA3LjVMMTAgMTIuNUwxNSA3LjUiIHN0cm9rZT0iIzYyN2Q5OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date/Time Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-navy-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-navy-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="form-input appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA3LjVMMTAgMTIuNUwxNSA3LjUiIHN0cm9rZT0iIzYyN2Q5OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 6pm)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us about your dental concerns or any special requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Appointment
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            )}
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>

            <Card className="bg-navy-800">
              <h3 className="font-display text-xl font-semibold text-white mb-4">
                Emergency Dental Care
              </h3>
              <p className="text-navy-200 mb-4">
                Experiencing a dental emergency? We offer same-day appointments for urgent cases. Call our emergency line anytime.
              </p>
              <a
                href="tel:+1234567899"
                className="inline-flex items-center gap-2 text-accent-teal font-semibold hover:underline"
              >
                <Phone className="w-5 h-5" />
                Emergency: (123) 456-7899
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
