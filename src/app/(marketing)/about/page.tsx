import Link from "next/link";

const schedule = [
  {
    time: "12:00 PM",
    title: "Doors Open & Registration",
    description: "Networking, visiting exhibitors, grab food & beverage",
    icon: "registration",
  },
  {
    time: "1:00 PM",
    title: "Welcome",
    description: "Hub and sponsors welcome, emcee guidance",
    icon: "keynote",
  },
  {
    time: "1:30 PM",
    title: "National Keynote Speaker",
    description: "National-level innovator sharing insights",
    icon: "keynote",
  },
  {
    time: "2:30 PM",
    title: "Break",
    description: "Networking, visit exhibitors, move to breakout rooms",
    icon: "networking",
  },
  {
    time: "2:45 PM",
    title: "Session 1",
    description: "Breakout sessions (3 track options)",
    icon: "workshop",
  },
  {
    time: "3:30 PM",
    title: "Break",
    description: "Networking, visit exhibitors, move to breakout rooms",
    icon: "networking",
  },
  {
    time: "3:45 PM",
    title: "Session 2",
    description: "Breakout sessions (3 track options)",
    icon: "workshop",
  },
  {
    time: "4:45 PM",
    title: "Closing Remarks",
    description: "Main seminar wrap-up, thank yous, and next steps",
    icon: "keynote",
  },
  {
    time: "5:00 PM",
    title: "Micro Pitch Competition",
    description: "Small founders/startups compete for prize money w/ Happy Hour",
    icon: "competition",
  },
  {
    time: "6:00 PM",
    title: "Close",
    description: "Event concludes",
    icon: "registration",
  },
];

const venueInfo = {
  name: "VanDyk Mortgage Muskegon Convention Center",
  address: "123 Convention Drive, Muskegon, MI 49440",
  description: "The VanDyk Mortgage Muskegon Convention Center offers state-of-the-art facilities with stunning views of Lake Michigan. Our event will utilize the main ballroom for keynotes and multiple breakout rooms for workshops and panels.",
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
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Schedule & <span className="text-[#FFA500]">Sessions</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            Join us for a day of inspiration, learning, and connection at the <Link href="http://gvsu.edu/mihub/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3DD1CC] transition-colors underline decoration-[#3DD1CC] decoration-2 underline-offset-4">Muskegon Innovation Hub</Link>.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-12 group">
                <div className="w-24 md:w-32 pt-1">
                  <span className="text-white/40 text-sm md:text-base font-black uppercase tracking-widest">{item.time}</span>
                </div>
                <div className="flex-1 pb-12 border-l border-white/10 pl-8 md:pl-12 relative">
                  <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-[#FF4500] group-hover:scale-150 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#3DD1CC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white/5 backdrop-blur-md border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                The <span className="text-[#3DD1CC]">Venue</span>
              </h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{venueInfo.name}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{venueInfo.description}</p>
                <div className="space-y-3">
                  {venueInfo.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="aspect-video bg-white/10 rounded-[2.5rem] overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d23254.146517863224!2d-86.254974!3d43.235317!3m2!1i1024!2i768!4f13.1!2m1!1smuskegon%20convention%20center!5e0!3m2!1sen!2sus!4v1773260079418!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - VanDyk Mortgage VanDyk Mortgage Muskegon Convention Center"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
