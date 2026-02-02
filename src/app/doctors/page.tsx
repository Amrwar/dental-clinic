import { ArrowRight, Award, GraduationCap, Heart, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const doctors = [
  {
    name: 'Dr. Salwa Naguib',
    role: 'Lead Dentist & Founder',
    specialty: 'Cosmetic Dentistry',
    image: '/doctors/Dr__Salwa_Naguib.avif',
    bio: 'With over 20 years of experience, Dr. Salwa Naguib founded Bright Smile Dental with a vision of providing exceptional, patient-centered care. She specializes in smile makeovers and advanced cosmetic procedures, helping patients achieve their dream smiles.',
    education: [
      'DDS, Cairo University',
      'Fellowship in Cosmetic Dentistry',
      'Member, Egyptian Dental Association',
    ],
    awards: [
      'Excellence in Dentistry 2023',
      'Best Cosmetic Dentist',
    ],
  },
  {
    name: 'Dr. Maie Magdy',
    role: 'Senior Dentist',
    specialty: 'Orthodontics & Pediatric Care',
    image: '/doctors/Dr__Maie_Magdy.avif',
    bio: 'Dr. Maie Magdy brings warmth and expertise to every patient interaction. Specializing in orthodontics and pediatric dentistry, she creates a comfortable environment for patients of all ages, with a particular passion for helping children develop healthy dental habits.',
    education: [
      'BDS, Ain Shams University',
      'MSc in Orthodontics',
      'Certified Invisalign Provider',
    ],
    awards: [
      'Patient Choice Award 2022',
      'Top Orthodontist',
    ],
  },
  {
    name: 'Dr. Mohammed E. Moussa',
    role: 'Oral Surgeon',
    specialty: 'Dental Implants & Oral Surgery',
    image: '/doctors/doc_mohammed_EMoussa.avif',
    bio: 'Dr. Mohammed E. Moussa is an expert in oral surgery and dental implantology. With precision and care, he performs complex procedures including implants, extractions, and bone grafting, ensuring optimal outcomes for every patient.',
    education: [
      'BDS, Alexandria University',
      'MSc in Oral Surgery',
      'Fellow, International Congress of Oral Implantologists',
    ],
    awards: [
      'Excellence in Implantology',
      'Advanced Surgical Skills',
    ],
  },
]

const values = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'Every decision we make puts our patients\u0027 comfort and well-being first.',
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
      <section className="relative pt-32 pb-20 hero-gradient pattern-overlay overflow-hidden">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-accent-mint rounded-full text-accent-teal text-sm font-medium mb-4">Our Team</span>
            <h1 className="text-display-lg text-navy-900 mb-6">Meet Our <span className="text-gradient">Expert Dentists</span></h1>
            <p className="text-body-lg text-navy-600 mb-8">Our team of highly skilled dental professionals is dedicated to providing exceptional care with a personal touch.</p>
          </div>
        </div>
      </section>
      <Section background="white" padding="md">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className={`text-center animate-slide-up stagger-${index + 1}`}>
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-mint rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">{value.title}</h3>
              <p className="text-navy-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section background="light">
        <SectionHeader label="The Team" title="Dedicated Professionals" description="Get to know the dental experts who will care for your smile." />
        <div className="grid lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={doctor.name} padding="none" className={`overflow-hidden animate-slide-up stagger-${index + 1}`}>
              <div className="relative h-80 overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all"><Mail className="w-5 h-5" /></a>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent-teal text-white text-sm font-medium rounded-full">{doctor.specialty}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy-800 mb-1">{doctor.name}</h3>
                <p className="text-accent-teal font-medium mb-4">{doctor.role}</p>
                <p className="text-navy-600 text-sm mb-6 leading-relaxed">{doctor.bio}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-navy-800 mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-accent-teal" />Education & Credentials</h4>
                  <ul className="space-y-1">{doctor.education.map((edu) => (<li key={edu} className="text-sm text-navy-600">• {edu}</li>))}</ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doctor.awards.map((award) => (<span key={award} className="inline-flex items-center gap-1 px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-medium rounded-full"><Award className="w-3 h-3" />{award}</span>))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section background="navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-md text-white mb-6">Ready to Meet Our Team?</h2>
          <p className="text-body-lg text-navy-200 mb-8">Schedule your appointment today and experience the Bright Smile difference. Our friendly team is ready to welcome you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">Book Appointment<ArrowRight className="w-5 h-5" /></Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-800">View Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
