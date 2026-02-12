import Link from "next/link";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    title: "CEO, TechForward Michigan",
    topic: "The Future of AI in Manufacturing",
    bio: "Dr. Chen leads TechForward Michigan, a nonprofit dedicated to advancing technology adoption across the state's manufacturing sector. With over 20 years of experience in AI and robotics, she has helped dozens of Michigan companies modernize their operations.",
    session: "Opening Keynote",
    time: "1:00 PM - 1:45 PM",
  },
  {
    name: "Marcus Johnson",
    title: "Founder, Lake Shore Ventures",
    topic: "Building Sustainable Businesses",
    bio: "Marcus founded Lake Shore Ventures in 2018 to invest in and mentor West Michigan startups. As a serial entrepreneur, he has founded three successful companies and now focuses on helping the next generation of founders build sustainable, community-focused businesses.",
    session: "Entrepreneurship Panel",
    time: "2:00 PM - 2:45 PM",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Director, GVSU Innovation Hub",
    topic: "Academic-Industry Partnerships",
    bio: "Dr. Rodriguez directs the Grand Valley State University Innovation Hub, fostering connections between academic research and industry applications. Her work has resulted in over 50 successful partnerships and $10M in research funding.",
    session: "Innovation Workshop",
    time: "3:00 PM - 3:45 PM",
  },
  {
    name: "James Okonkwo",
    title: "VP of Engineering, Muskegon Tech",
    topic: "Scaling Tech Teams in Michigan",
    bio: "James leads engineering at Muskegon Tech, one of West Michigan's fastest-growing software companies. He has scaled the engineering team from 5 to 50+ engineers while maintaining a strong culture of innovation and inclusion.",
    session: "Tech Leadership Panel",
    time: "2:00 PM - 2:45 PM",
  },
  {
    name: "Lisa Nakamura",
    title: "Partner, Great Lakes Capital",
    topic: "Funding Your Innovation",
    bio: "Lisa is a partner at Great Lakes Capital, focusing on early-stage investments in Michigan-based startups. She has invested in over 30 companies and serves on the boards of several innovative Michigan businesses.",
    session: "Funding Workshop",
    time: "3:00 PM - 3:45 PM",
  },
  {
    name: "David Park",
    title: "Founder, Sustainable Solutions Co.",
    topic: "Green Innovation in Manufacturing",
    bio: "David founded Sustainable Solutions Co. to help manufacturers reduce their environmental impact while improving efficiency. His company has helped over 100 Michigan businesses implement sustainable practices.",
    session: "Sustainability Panel",
    time: "4:00 PM - 4:45 PM",
  },
  {
    name: "Angela Williams",
    title: "Executive Director, Muskegon Innovation Hub",
    topic: "Building Innovation Communities",
    bio: "Angela leads the Muskegon Innovation Hub, driving economic development through innovation and entrepreneurship. Under her leadership, the Hub has supported over 200 startups and created hundreds of jobs in the region.",
    session: "Closing Keynote",
    time: "5:00 PM - 5:30 PM",
  },
  {
    name: "Dr. Michael Torres",
    title: "Professor, GVSU School of Engineering",
    topic: "Research to Commercialization",
    bio: "Dr. Torres is a professor of engineering at GVSU specializing in product development and commercialization. He has helped bring 15 university research projects to market as successful products.",
    session: "Innovation Workshop",
    time: "3:00 PM - 3:45 PM",
  },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Speakers
          </h1>
          <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Learn from industry leaders, successful entrepreneurs, and innovation experts 
            who are shaping the future of Michigan's economy.
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFB703]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  {/* Speaker Avatar */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0048E5] to-[#3DD1CC] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#FFB703] transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-[#3DD1CC] text-sm mb-2">
                      {speaker.title}
                    </p>
                    <p className="text-white/60 text-sm mb-3 leading-relaxed">
                      {speaker.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0048E5]/20 text-[#0048E5] text-xs rounded-full">
                        {speaker.session}
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                        {speaker.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Speak at Innovators Summit?
            </h2>
            <p className="text-white/70 mb-6">
              We're always looking for passionate innovators to share their knowledge and experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FFB703] text-[#001133] font-semibold rounded-lg hover:bg-[#E5A503] transition-colors"
            >
              Apply to Speak
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
