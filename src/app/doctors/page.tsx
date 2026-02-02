import { ArrowRight, Award, GraduationCap, Heart, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const doctors = [
  {
    name: 'Dr. Sarah Williams',
    role: 'Lead Dentist & Founder',
    specialty: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop',
    bio: 'With over 15 years of experience, Dr. Williams founded Bright Smile Dental with a vision of providing exceptional, patient-centered care. She specializes in smile makeovers and advanced cosmetic procedures.',
    education: [
      'DDS, Columbia University',
      'Residency, NYU Langone Health',
      'AACD Member',
    ],
    awards: [
      'Top Dentist 2023',
      'Excellence in Patient Care',
    ],
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    specialty: 'Invisalign Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop',
    bio: 'Dr. Chen is a board-certified orthodontist with expertise in both traditional braces and clear aligner therapy. He is passionate about creating beautiful, functional smiles for patients of all ages.',
    education: [
      'DMD, Harvard School of Dental Medicine',
      'Orthodontic Certificate, Penn Dental',
      'Diamond Invisalign Provider',
    ],
    awards: [
      'Invisalign Platinum Provider',
      'AAO Award of Excellence',
    ],
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Pediatric Dentist',
    specialty: 'Children\'s Dentistry',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop',
    bio: 'Dr. Rodriguez brings warmth and expertise to pediatric dental care. She creates a fun, comfortable environment that helps children develop positive attitudes toward dental health.',
    education: [
      'DDS, UCLA School of Dentistry',
      'Pediatric Residency, Children\'s Hospital LA',
      'AAPD Board Certified',
    ],
    awards: [
      'Best Pediatric Dentist 2022',
      'Patient Choice Award',
    ],
  },
  {
    name: 'Dr. James Thompson',
    role: 'Oral Surgeon',
    specialty: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=700&fit=crop',
    bio: 'Dr. Thompson is an expert in oral surgery and dental implantology. With precision and care, he performs complex procedures including implants, extractions, and bone grafting.',
    education: [
      'DMD, University of Pennsylvania',
      'Oral Surgery Residency, Johns Hopkins',
      'AAID Fellow',
    ],
    awards: [
      'Excellence in Implantology',
      'Top Oral Surgeon NYC',
    ],
  },
]

const values = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'Every decision we make puts our patients\' comfort and well-being first.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Our team stays at the forefront of dental technology and techniques.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'We invest in ongoing education to provide the best possible care.',
  },
]

export default function DoctorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient pattern-overlay overflow-hidden">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-accent-mint rounded-full text-accent-teal text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-display-lg text-navy-900 mb-6">
              Meet Our{' '}
              <span className="text-gradient">Expert Dentists</span>
            </h1>
            <p className="text-body-lg text-navy-600 mb-8">
              Our team of highly skilled dental professionals is dedicated to providing exceptional care with a personal touch.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Section background="white" padding="md">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`text-center animate-slide-up stagger-${index + 1}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-mint rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                {value.title}
              </h3>
              <p className="text-navy-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Doctors Grid */}
      <Section background="light">
        <SectionHeader
          label="The Team"
          title="Dedicated Professionals"
          description="Get to know the dental experts who will care for your smile."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={doctor.name}
              padding="none"
              className={`overflow-hidden animate-slide-up stagger-${index + 1}`}
            >
              <div className="grid lg:grid-cols-5">
                {/* Image */}
                <div className="lg:col-span-2 relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent lg:bg-gradient-to-r" />
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 bg-accent-mint text-accent-teal text-sm font-medium rounded-full mb-3">
                    {doctor.specialty}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-navy-800 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-navy-500 mb-4">{doctor.role}</p>
                  <p className="text-navy-600 text-sm mb-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Education */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-navy-800 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-accent-teal" />
                      Education & Credentials
                    </h4>
                    <ul className="space-y-1">
                      {doctor.education.map((edu) => (
                        <li key={edu} className="text-sm text-navy-600">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Awards */}
                  <div className="flex flex-wrap gap-2">
                    {doctor.awards.map((award) => (
                      <span
                        key={award}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-medium rounded-full"
                      >
                        <Award className="w-3 h-3" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-md text-white mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-body-lg text-navy-200 mb-8">
            Schedule your appointment today and experience the Bright Smile difference. Our friendly team is ready to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-800">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
