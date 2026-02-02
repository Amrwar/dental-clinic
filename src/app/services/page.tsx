import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const services = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive preventive and restorative care to maintain your oral health.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    features: [
      'Routine Dental Exams',
      'Professional Cleanings',
      'Dental Fillings',
      'Root Canal Therapy',
      'Tooth Extractions',
      'Gum Disease Treatment',
    ],
    price: 'From $75',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced aesthetic treatments.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    features: [
      'Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Tooth Contouring',
      'Gum Reshaping',
    ],
    price: 'From $200',
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct bite issues for a healthier smile.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=500&fit=crop',
    features: [
      'Traditional Braces',
      'Clear Aligners',
      'Invisalign Treatment',
      'Retainers',
      'Early Orthodontics',
      'Adult Orthodontics',
    ],
    price: 'From $3,000',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth that look and feel natural.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    features: [
      'Single Tooth Implants',
      'Implant-Supported Bridges',
      'All-on-4 Implants',
      'Bone Grafting',
      'Sinus Lift Procedures',
      'Implant Restoration',
    ],
    price: 'From $1,500',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle, kid-friendly dental care for your little ones.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=500&fit=crop',
    features: [
      'Children\'s Exams',
      'Fluoride Treatments',
      'Dental Sealants',
      'Space Maintainers',
      'Pediatric Crowns',
      'Habit Counseling',
    ],
    price: 'From $50',
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency dental services when you need them most.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=500&fit=crop',
    features: [
      'Same-Day Appointments',
      'Toothache Relief',
      'Broken Tooth Repair',
      'Lost Crown/Filling',
      'Dental Abscess Treatment',
      'Emergency Extractions',
    ],
    price: 'From $150',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient pattern-overlay overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-accent-mint rounded-full text-accent-teal text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-display-lg text-navy-900 mb-6">
              Comprehensive Dental Care for{' '}
              <span className="text-gradient">Every Smile</span>
            </h1>
            <p className="text-body-lg text-navy-600 mb-8">
              From routine checkups to advanced procedures, we offer a full range of dental services using the latest technology and techniques.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                </div>
                {/* Price Badge */}
                <div className="absolute -bottom-4 -right-4 bg-navy-800 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <span className="text-sm text-navy-300">Starting</span>
                  <p className="font-display text-xl font-semibold">{service.price}</p>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-display-sm text-navy-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-body-md text-navy-600 mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-navy-700"
                    >
                      <div className="w-6 h-6 bg-accent-mint rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent-teal" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact">
                  Book This Service
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Insurance Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="Insurance & Payment"
            title="Flexible Payment Options"
            description="We accept most major insurance plans and offer flexible financing options to make dental care accessible to everyone."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                Insurance Accepted
              </h3>
              <p className="text-navy-600">
                We work with most major dental insurance providers to maximize your benefits.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                Payment Plans
              </h3>
              <p className="text-navy-600">
                Interest-free financing available with CareCredit and other providers.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                Membership Plans
              </h3>
              <p className="text-navy-600">
                No insurance? Join our membership plan for discounted rates on all services.
              </p>
            </Card>
          </div>

          <Button href="/contact" size="lg">
            Contact Us for Details
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>
    </>
  )
}
