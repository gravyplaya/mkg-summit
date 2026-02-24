import Hero from "@/components/Hero";
import Link from "next/link";
import { getFeaturedSpeakers, getSponsors } from "@/lib/api";
import type { Speakers as SpeakerType, Sponsors as SponsorType } from "@/payload-types";

type SpeakerWithPhoto = SpeakerType & {
  photo?: {
    url?: string;
    alt?: string;
  } | null;
};

type SponsorWithLogo = SponsorType & {
  logo?: {
    url?: string;
    alt?: string;
  } | null;
};

export default async function Home() {
  // Fetch featured speakers and sponsors from database
  let featuredSpeakers: SpeakerWithPhoto[] = [];
  const sponsorsByTier: Record<string, SponsorWithLogo[]> = {
    platinum: [],
    gold: [],
    silver: [],
    bronze: [],
    partner: [],
  };

  try {
    const [speakersResult, sponsorsResult] = await Promise.all([
      getFeaturedSpeakers(),
      getSponsors(),
    ]);

    featuredSpeakers = speakersResult.docs as SpeakerWithPhoto[];
    const allSponsors = sponsorsResult.docs as SponsorWithLogo[];

    // Group sponsors by tier
    allSponsors.forEach((sponsor) => {
      if (sponsorsByTier[sponsor.tier]) {
        sponsorsByTier[sponsor.tier].push(sponsor);
      }
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  // Define tier display order and colors
  const sponsorTiers = [
    { name: "Platinum Sponsors", key: "platinum" as const, color: "#FFB703" },
    { name: "Gold Sponsors", key: "gold" as const, color: "#3DD1CC" },
    { name: "Silver Sponsors", key: "silver" as const, color: "#0048E5" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Combined Tagline & About Section - Subdued Glaze Flow */}
      <section id="about" className="py-24 px-8 md:px-16 lg:px-24 bg-white/5 backdrop-blur-2xl relative overflow-hidden border-t border-white/5">
        {/* Atmosphere accents */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#0048E5]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-20" />
        <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-[#3DD1CC]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32 items-start">

            {/* Left Column: Vision & Main Registration */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#3DD1CC]">The Vision</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none uppercase tracking-tighter">
                  Where <br />Innovation <br />Meets <br /><span className="text-[#FFB703]">Opportunity</span>
                </h3>
              </div>

              <div className="relative group inline-block">
                {/* Glowing background for Registration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB703] via-[#3DD1CC] to-[#FFB703] rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <Link
                  href="https://www.gvsu.edu/mihub/module-events-view.htm?siteModuleId=AB55EC2F-97B9-3977-1FB8FF824B6BF2B2&eventId=CD785BA0-B5E4-B275-AF231E3EC8B750F2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center px-12 py-8 bg-[#FFB703] text-[#001133] text-3xl font-black rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-wider shadow-2xl"
                >
                  Register Now
                  <svg className="w-10 h-10 ml-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <p className="text-white/40 text-lg font-bold uppercase tracking-widest pl-4">
                * Limited spots available
              </p>

              {/* stats Grid - Subdued Style */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] shadow-xl">
                <div className="text-center p-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFB703] mb-1">500+</div>
                  <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Attendees</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3DD1CC] mb-1">20+</div>
                  <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Speakers</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0048E5] mb-1">10</div>
                  <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Workshops</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1">1</div>
                  <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Epic Day</div>
                </div>
              </div>
            </div>

            {/* Right Column: About Details & Stats */}
            <div className="space-y-16">
              <div className="space-y-10 text-left">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">About the Summit</h2>
                  <div className="w-20 h-2 bg-[#FFB703] rounded-full" />
                </div>
                <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed">
                  The Innovators Summit is a half-day regional event celebrating creativity, entrepreneurship, and innovation across the Muskegon Lakeshore and surrounding areas.
                  The summit will bring together 300+ entrepreneurs, creators, business leaders, and community partners to be informed, inspired, and encouraged to be bold and innovative.
                  This will be the who’s who among leaders, innovators, movers, and shakers. Big and small all in one place!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview Section - Commented out for now
      <section id="speakers" className="py-20 px-4 bg-[#002266]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Speakers
            </h2>
            <div className="w-24 h-1 bg-[#3DD1CC] mx-auto rounded-full" />
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Learn from industry leaders and innovators who are shaping the future of Michigan&apos;s economy.
            </p>
          </div>

          {featuredSpeakers.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredSpeakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFB703]/50 transition-all duration-300 group"
                >
                  {speaker.photo?.url ? (
                    <img
                      src={speaker.photo.url}
                      alt={speaker.photo?.alt || speaker.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0048E5] to-[#3DD1CC] flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white text-center mb-1 group-hover:text-[#FFB703] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-white/60 text-sm text-center mb-3">
                    {speaker.jobTitle}{speaker.company ? `, ${speaker.company}` : ''}
                  </p>
                  {speaker.shortBio && (
                    <p className="text-[#3DD1CC] text-sm text-center italic">
                      &ldquo;{speaker.shortBio}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/60">Speaker announcements coming soon!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/speakers"
              className="inline-flex items-center px-6 py-3 border-2 border-[#3DD1CC] text-[#3DD1CC] font-medium rounded-lg hover:bg-[#3DD1CC] hover:text-[#001133] transition-all"
            >
              View All Speakers
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Sponsors Preview Section - Commented out for now
      <section id="sponsors" className="py-20 px-4 bg-gradient-to-b from-[#002266] to-[#001133]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full" />
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Thank you to our generous sponsors who make the Innovators Summit possible.
            </p>
          </div>

          {Object.values(sponsorsByTier).some(arr => arr.length > 0) ? (
            <div className="space-y-8">
              {sponsorTiers.map((tier) => {
                const tierSponsors = sponsorsByTier[tier.key];
                if (tierSponsors.length === 0) return null;

                return (
                  <div key={tier.key} className="text-center">
                    <h3
                      className="text-lg font-semibold mb-4"
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                      {tierSponsors.map((sponsor) => (
                        <div
                          key={sponsor.id}
                          className="w-40 h-20 bg-white/10 rounded-lg flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors"
                        >
                          {sponsor.logo?.url ? (
                            <img
                              src={sponsor.logo.url}
                              alt={sponsor.logo?.alt || sponsor.name}
                              className="max-w-32 max-h-14 object-contain"
                            />
                          ) : (
                            <span className="text-white/60 text-sm font-medium">{sponsor.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/60">Sponsor announcements coming soon!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/sponsors"
              className="inline-flex items-center px-6 py-3 bg-[#FFB703] text-[#001133] font-semibold rounded-lg hover:bg-[#E5A503] transition-colors"
            >
              Become a Sponsor
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#001133] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0048E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3DD1CC]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Innovate?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of innovators, entrepreneurs, and thought leaders at Michigan&apos;s premier innovation event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://www.gvsu.edu/mihub/module-events-view.htm?siteModuleId=AB55EC2F-97B9-3977-1FB8FF824B6BF2B2&eventId=CD785BA0-B5E4-B275-AF231E3EC8B750F2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FFB703] text-[#001133] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#3DD1CC] text-[#3DD1CC] font-semibold rounded-lg hover:bg-[#3DD1CC] hover:text-[#001133] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact#volunteer"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
}
