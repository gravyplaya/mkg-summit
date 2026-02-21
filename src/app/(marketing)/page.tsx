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
  let sponsorsByTier: Record<string, SponsorWithLogo[]> = {
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

      {/* About Preview Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#001133] to-[#002266]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About the Summit
            </h2>
            <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Connecting Michigan's Innovation Ecosystem
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                The Innovators Summit is a half-day regional event celebrating creativity, entrepreneurship,
                and innovation across the Muskegon Lakeshore and surrounding areas. It brings together
                entrepreneurs, creators, business leaders, and community partners.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Keynote presentations from industry leaders",
                  "Hands-on innovation workshops",
                  "Networking sessions with peers and mentors",
                  "Startup showcase and pitch competition",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#3DD1CC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-[#0048E5] text-white font-medium rounded-lg hover:bg-[#0035B5] transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-[#FFB703] mb-2">500+</div>
                    <div className="text-white/60 text-sm">Expected Attendees</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-[#3DD1CC] mb-2">20+</div>
                    <div className="text-white/60 text-sm">Expert Speakers</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-[#0048E5] mb-2">10</div>
                    <div className="text-white/60 text-sm">Workshops</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-white mb-2">1</div>
                    <div className="text-white/60 text-sm">Amazing Day</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFB703]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3DD1CC]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview Section */}
      <section id="speakers" className="py-20 px-4 bg-[#002266]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Speakers
            </h2>
            <div className="w-24 h-1 bg-[#3DD1CC] mx-auto rounded-full" />
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Learn from industry leaders and innovators who are shaping the future of Michigan's economy.
            </p>
          </div>

          {featuredSpeakers.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredSpeakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFB703]/50 transition-all duration-300 group"
                >
                  {/* Speaker Avatar */}
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

      {/* Sponsors Preview Section */}
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

          {/* Check if there are any sponsors */}
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
            Join hundreds of innovators, entrepreneurs, and thought leaders at Michigan's premier innovation event.
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
    </div>
  );
}
