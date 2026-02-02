import { ArrowRight, Star, Shield, Heart, Clock, Users, Award, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  { icon: Shield, title: 'Safe & Sterile', description: 'State-of-the-art sterilization and safety protocols' },
  { icon: Heart, title: 'Gentle Care', description: 'Compassionate treatment for anxious patients' },
  { icon: Clock, title: 'Evening Hours', description: 'Open 5 PM - 10 PM, Saturday to Thursday' },
  { icon: Users, title: 'Family Friendly', description: 'Welcoming patients of all ages' },
]

const services = [
  { title: 'General Dentistry', description: 'Comprehensive care including cleanings, fillings, and preventive treatments.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop' },
  { title: 'Endodontics', description: 'Expert root canal therapy to save your natural teeth with minimal discomfort.', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop' },
  { title: 'Pedodontics', description: 'Gentle, child-friendly dental care for your little ones.', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop' },
]

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Patient since 2019', content: 'The team at Arty Dental made me feel so comfortable. I used to dread dental visits, but now I actually look forward to them!', rating: 5 },
  { name: 'Ahmed Hassan', role: 'Patient since 2020', content: 'Professional, friendly, and thorough. Prof. Dr. Dohiem explained everything clearly and made sure I understood my treatment options.', rating: 5 },
  { name: 'Nour El-Din', role: 'Patient since 2021', content: 'Best dental experience I have ever had. The clinic is beautiful, the staff is wonderful, and my smile has never looked better!', rating: 5 },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '4', label: 'Expert Dentists' },
  { value: '99%', label: 'Satisfaction Rate' },
]

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen hero-gradient pattern-overlay overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-card mb-6">
                <Award className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium text-navy-700">Award-Winning Dental Care</span>
              </span>
              <h1 className="text-display-lg text-navy-900 mb-6">Your Journey to a <span className="text-gradient">Perfect Smile</span> Starts Here</h1>
              <p className="text-body-lg text-navy-600 mb-8 max-w-lg">Experience exceptional dental care in a warm, welcoming environment. Our expert team combines cutting-edge technology with a gentle touch.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button href="/contact" size="lg">Book Your Visit<ArrowRight className="w-5 h-5" /></Button>
                <Button href="/services" variant="outline" size="lg">Explore Services</Button>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (<div key={i} className="w-10 h-10 bg-navy-100 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-navy-600">{String.fromCharCode(64 + i)}</div>))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (<Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />))}
                  </div>
                  <p className="text-sm text-navy-600"><span className="font-semibold">500+</span> 5-star reviews</p>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up stagger-2">
              <div className="relative z-10">
                <div className="relative rounded-4xl overflow-hidden shadow-2xl">
                  <img src="/doctors/main_doctor_1.avif" alt="Prof. Dr. Mohamed M. Dohiem - Founder of Arty Dental Clinic" className="w-full h-[500px] lg:h-[600px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-display text-xl font-semibold">Prof. Dr. Mohamed M. Dohiem</p>
                    <p className="text-white/80 text-sm">Founder & CEO | Prosthodontics & Implantology</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent-mint rounded-2xl flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-accent-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">DGOI & ICOI Member</p>
                      <p className="text-sm text-navy-500">International Standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-navy-800 rounded-4xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      <Section background="white" padding="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} className={`text-center animate-slide-up stagger-${index + 1}`}>
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-mint rounded-2xl flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-accent-teal" />
              </div>
              <h3 className="font-display font-semibold text-navy-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-navy-500">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section background="light" id="services-preview">
        <SectionHeader label="Our Services" title="Comprehensive Dental Care" description="From routine checkups to advanced procedures, we offer a full range of dental services to keep your smile healthy and beautiful." />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} padding="none" className={`overflow-hidden animate-slide-up stagger-${index + 1}`}>
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover gallery-img" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">{service.title}</h3>
                <p className="text-navy-600 mb-4">{service.description}</p>
                <Button href="/services" variant="ghost" size="sm">Learn More <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/services" size="lg">View All Services<ArrowRight className="w-5 h-5" /></Button>
        </div>
      </Section>
      <Section background="navy">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center animate-slide-up stagger-${index + 1}`}>
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</p>
              <p className="text-navy-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section background="white" id="testimonials">
        <SectionHeader label="Testimonials" title="What Our Patients Say" description="Do not just take our word for it. Here is what our patients have to say about their experience." />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className={`animate-slide-up stagger-${index + 1}`}>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (<Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />))}
              </div>
              <p className="text-navy-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <p className="font-semibold text-navy-800">{testimonial.name}</p>
                  <p className="text-sm text-navy-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section background="gradient" padding="lg">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent-teal/20 rounded-full blur-3xl" />
          <h2 className="text-display-md text-navy-900 mb-6 relative">Ready to Transform Your Smile?</h2>
          <p className="text-body-lg text-navy-600 mb-8 max-w-2xl mx-auto">Schedule your appointment today and take the first step towards the smile you have always wanted. New patients receive a complimentary consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">Schedule Appointment<ArrowRight className="w-5 h-5" /></Button>
            <Button href="tel:+201003843828" variant="outline" size="lg">Call +20 100 384 3828</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
