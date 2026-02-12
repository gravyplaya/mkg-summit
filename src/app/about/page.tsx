import Link from "next/link";

const schedule = [
  {
    time: "12:30 PM",
    title: "Registration & Networking",
    description: "Check in, grab your materials, and connect with fellow attendees",
    icon: "registration",
  },
  {
    time: "1:00 PM",
    title: "Opening Keynote",
    description: "Dr. Sarah Chen - The Future of AI in Manufacturing",
    icon: "keynote",
  },
  {
    time: "2:00 PM",
    title: "Panel Sessions",
    description: "Choose from Entrepreneurship, Tech Leadership, or Innovation panels",
    icon: "panel",
  },
  {
    time: "3:00 PM",
    title: "Workshops",
    description: "Hands-on sessions on Funding, Innovation, and Sustainability",
    icon: "workshop",
  },
  {
    time: "4:00 PM",
    title: "Startup Showcase",
    description: "Meet local startups and see their innovations",
    icon: "showcase",
  },
  {
    time: "4:30 PM",
    title: "Pitch Competition",
    description: "Watch local entrepreneurs compete for prizes",
    icon: "competition",
  },
  {
    time: "5:00 PM",
    title: "Closing Keynote",
    description: "Angela Williams - Building Innovation Communities",
    icon: "keynote",
  },
  {
    time: "5:30 PM",
    title: "Networking Reception",
    description: "Continue conversations and build lasting connections",
    icon: "networking",
  },
];

const venueInfo = {
  name: "Muskegon Convention Center",
  address: "123 Convention Drive, Muskegon, MI 49440",
  description: "The Muskegon Convention Center offers state-of-the-art facilities with stunning views of Lake Michigan. Our event will utilize the main ballroom for keynotes and multiple breakout rooms for workshops and panels.",
  amenities: [
    "Free parking for all attendees",
    "Complimentary WiFi throughout the venue",
    "Accessible facilities and accommodations",
    "On-site catering and refreshments",
    "Outdoor terrace with lake views",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About the Summit
          </h1>
          <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The Innovators Summit is West Michigan's premier innovation and entrepreneurship event, 
            bringing together the region's brightest minds for an afternoon of learning, networking, and inspiration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-white/70 mb-4 leading-relaxed">
                The Innovators Summit exists to accelerate innovation and entrepreneurship in West Michigan 
                by creating meaningful connections between entrepreneurs, business leaders, researchers, and students.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Founded in 2024 by the Muskegon Innovation Hub and Grand Valley State University, 
                the Summit has quickly become a cornerstone event for the region's innovation ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#FFB703]">500+</div>
                  <div className="text-white/60 text-sm">Expected Attendees</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#3DD1CC]">20+</div>
                  <div className="text-white/60 text-sm">Expert Speakers</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#0048E5]">10</div>
                  <div className="text-white/60 text-sm">Workshops</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/60 text-sm">Startups Showcased</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Inspiring Keynotes",
                    desc: "Hear from industry leaders about the future of innovation in Michigan",
                  },
                  {
                    title: "Hands-on Workshops",
                    desc: "Learn practical skills from experts in funding, technology, and business",
                  },
                  {
                    title: "Networking Opportunities",
                    desc: "Connect with entrepreneurs, investors, and potential collaborators",
                  },
                  {
                    title: "Startup Showcase",
                    desc: "Discover innovative local companies and their products",
                  },
                  {
                    title: "Pitch Competition",
                    desc: "Watch entrepreneurs compete for funding and support",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#0048E5]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#0048E5]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-[#001133]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Schedule
            </h2>
            <div className="w-24 h-1 bg-[#3DD1CC] mx-auto rounded-full mb-6" />
            <p className="text-white/70">
              April 21, 2026 - A full afternoon of innovation and inspiration
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB703] via-[#3DD1CC] to-[#0048E5]" />
            
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-start pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-[#001133] border-2 border-[#FFB703] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex-1 hover:border-[#FFB703]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-[#FFB703] font-medium text-sm">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Venue
            </h2>
            <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              {/* Venue Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-[#0048E5]/30 to-[#3DD1CC]/30 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-white/40">Venue Image</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {venueInfo.name}
                </h3>
                <p className="text-[#3DD1CC] text-sm mb-3">
                  {venueInfo.address}
                </p>
                <p className="text-white/60 text-sm">
                  {venueInfo.description}
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Venue Amenities
              </h3>
              <ul className="space-y-3">
                {venueInfo.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-white/70">
                    <svg className="w-5 h-5 text-[#3DD1CC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">Getting There</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>• 15 minutes from Muskegon County Airport</p>
                  <p>• 45 minutes from Grand Rapids</p>
                  <p>• Free parking available on-site</p>
                </div>
              </div>
              
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center px-4 py-2 bg-[#0048E5] text-white text-sm font-medium rounded-lg hover:bg-[#0035B5] transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-4 bg-[#001133]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Presented By
          </h2>
          <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full mb-12" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0048E5] to-[#3DD1CC] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MIH</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Muskegon Innovation Hub
              </h3>
              <p className="text-white/60 text-sm">
                Driving economic development through innovation and entrepreneurship in the Muskegon region.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#3DD1CC] to-[#FFB703] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">GVSU</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Grand Valley State University
              </h3>
              <p className="text-white/60 text-sm">
                Michigan's premier public university for innovation and applied learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
