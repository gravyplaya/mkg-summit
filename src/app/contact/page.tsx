'use client';

import { useState, FormEvent } from 'react';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type VolunteerForm = {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  experience: string;
};

const volunteerInterests = [
  { id: 'registration', label: 'Registration & Check-in' },
  { id: 'setup', label: 'Event Setup & Teardown' },
  { id: 'speakers', label: 'Speaker Support' },
  { id: 'networking', label: 'Networking Support' },
  { id: 'social', label: 'Social Media & Photography' },
  { id: 'general', label: 'General Assistance' },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'volunteer'>('contact');
  
  // Contact form state
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState<VolunteerForm>({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
  });
  const [volunteerStatus, setVolunteerStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would send to your backend
    console.log('Contact form:', contactForm);
    setContactStatus('success');
    setContactForm({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setContactStatus('idle'), 5000);
  };

  const handleVolunteerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setVolunteerStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would send to your backend
    console.log('Volunteer form:', volunteerForm);
    setVolunteerStatus('success');
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      interests: [],
      availability: '',
      experience: '',
    });
    
    setTimeout(() => setVolunteerStatus('idle'), 5000);
  };

  const handleInterestToggle = (interestId: string) => {
    setVolunteerForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about the Innovators Summit? Want to get involved? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'contact'
                    ? 'bg-[#0048E5] text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'volunteer'
                    ? 'bg-[#0048E5] text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Volunteer
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {activeTab === 'contact' && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                  >
                    <option value="" className="bg-[#001133]">Select a subject</option>
                    <option value="general" className="bg-[#001133]">General Inquiry</option>
                    <option value="sponsorship" className="bg-[#001133]">Sponsorship Opportunities</option>
                    <option value="speaking" className="bg-[#001133]">Speaking Opportunities</option>
                    <option value="media" className="bg-[#001133]">Media & Press</option>
                    <option value="other" className="bg-[#001133]">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="w-full px-6 py-4 bg-[#FFB703] text-[#001133] font-semibold rounded-lg hover:bg-[#E5A503] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {contactStatus === 'loading' ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {contactStatus === 'success' && (
                  <p className="text-[#3DD1CC] text-center">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          )}

          {/* Volunteer Form */}
          {activeTab === 'volunteer' && (
            <div id="volunteer" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Volunteer at the Summit
              </h2>
              <p className="text-white/60 mb-6">
                Join our team of volunteers and help make the Innovators Summit a success. 
                Volunteers receive free admission, exclusive swag, and networking opportunities.
              </p>
              
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vol-name" className="block text-white/80 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="vol-name"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="vol-email" className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="vol-email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="vol-phone" className="block text-white/80 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="vol-phone"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                    placeholder="(231) 555-1234"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {volunteerInterests.map((interest) => (
                      <label
                        key={interest.id}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                          volunteerForm.interests.includes(interest.id)
                            ? 'bg-[#0048E5]/20 border-[#0048E5]'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={volunteerForm.interests.includes(interest.id)}
                          onChange={() => handleInterestToggle(interest.id)}
                          className="sr-only"
                        />
                        <span className="text-white/80 text-sm">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-white/80 text-sm font-medium mb-2">
                    Availability
                  </label>
                  <select
                    id="availability"
                    value={volunteerForm.availability}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, availability: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent"
                  >
                    <option value="" className="bg-[#001133]">Select your availability</option>
                    <option value="morning" className="bg-[#001133]">Morning (Setup & Registration)</option>
                    <option value="afternoon" className="bg-[#001133]">Afternoon (Event Support)</option>
                    <option value="evening" className="bg-[#001133]">Evening (Teardown & Cleanup)</option>
                    <option value="allday" className="bg-[#001133]">All Day</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-white/80 text-sm font-medium mb-2">
                    Relevant Experience (Optional)
                  </label>
                  <textarea
                    id="experience"
                    value={volunteerForm.experience}
                    onChange={(e) => setVolunteerForm(prev => ({ ...prev, experience: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3DD1CC] focus:border-transparent resize-none"
                    placeholder="Tell us about any relevant volunteer or professional experience..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={volunteerStatus === 'loading'}
                  className="w-full px-6 py-4 bg-[#3DD1CC] text-[#001133] font-semibold rounded-lg hover:bg-[#2AA9A3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {volunteerStatus === 'loading' ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    'Apply to Volunteer'
                  )}
                </button>
                
                {volunteerStatus === 'success' && (
                  <p className="text-[#3DD1CC] text-center">
                    Thank you for your interest! We'll be in touch soon with more details.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FFB703]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFB703]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:info@innovatorssummit.org" className="text-[#3DD1CC] hover:underline">
                info@innovatorssummit.org
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#3DD1CC]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#3DD1CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:+12315551234" className="text-[#3DD1CC] hover:underline">
                (231) 555-1234
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0048E5]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0048E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-white/60 text-sm">
                Muskegon Convention Center<br />
                Muskegon, MI 49440
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
