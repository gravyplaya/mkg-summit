import Link from "next/link";
import { getSponsors } from "@/lib/api";
import type { Sponsors as SponsorType } from "@/payload-types";

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    price: "$10,000",
    color: "#FFB703",
    benefits: [
      "Premier logo placement on all event materials",
      "Keynote speaking opportunity",
      "Premium booth space (20x20 ft)",
      "10 VIP passes with exclusive networking access",
      "Full-page ad in event program",
      "Social media feature campaign",
      "Logo on event lanyards and badges",
      "Exclusive networking dinner invitation",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$5,000",
    color: "#3DD1CC",
    benefits: [
      "Prominent logo placement on event materials",
      "Panel speaking opportunity",
      "Standard booth space (10x10 ft)",
      "6 passes with networking access",
      "Half-page ad in event program",
      "Social media mentions",
      "Logo on event signage",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$2,500",
    color: "#0048E5",
    benefits: [
      "Logo placement on event materials",
      "Tabletop display space",
      "4 passes to the event",
      "Quarter-page ad in event program",
      "Social media mention",
      "Logo on event website",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "$1,000",
    color: "#ffffff",
    benefits: [
      "Logo on event website",
      "2 passes to the event",
      "Social media mention",
      "Name listed in event program",
    ],
  },
];

type SponsorWithLogo = SponsorType & {
  logo?: {
    url?: string;
    alt?: string;
  } | null;
};

interface GroupedSponsors {
  platinum: SponsorWithLogo[];
  gold: SponsorWithLogo[];
  silver: SponsorWithLogo[];
  bronze: SponsorWithLogo[];
  partner: SponsorWithLogo[];
}

async function getSponsorsGroupedByTier(): Promise<GroupedSponsors> {
  try {
    const result = await getSponsors();
    const sponsors = result.docs as SponsorWithLogo[];

    return {
      platinum: sponsors.filter((s) => s.tier === "platinum"),
      gold: sponsors.filter((s) => s.tier === "gold"),
      silver: sponsors.filter((s) => s.tier === "silver"),
      bronze: sponsors.filter((s) => s.tier === "bronze"),
      partner: sponsors.filter((s) => s.tier === "partner"),
    };
  } catch (error) {
    console.error("Failed to fetch sponsors:", error);
    return {
      platinum: [],
      gold: [],
      silver: [],
      bronze: [],
      partner: [],
    };
  }
}

export default async function SponsorsPage() {
  const currentSponsors = await getSponsorsGroupedByTier();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h1>
          <div className="w-24 h-1 bg-[#FFB703] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The Innovators Summit is made possible through the generous support of our sponsors.
            Thank you for investing in Michigan&apos;s innovation future.
          </p>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            2026 Sponsors
          </h2>

          {/* Platinum Sponsors */}
          {currentSponsors.platinum.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#FFB703] text-center mb-6">
                Platinum Sponsors
              </h3>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {currentSponsors.platinum.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    size="large"
                    borderColor="#FFB703"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {currentSponsors.gold.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3DD1CC] text-center mb-6">
                Gold Sponsors
              </h3>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {currentSponsors.gold.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    size="medium"
                    borderColor="#3DD1CC"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {currentSponsors.silver.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#0048E5] text-center mb-6">
                Silver Sponsors
              </h3>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {currentSponsors.silver.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    size="small"
                    borderColor="#0048E5"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors */}
          {currentSponsors.bronze.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white/80 text-center mb-6">
                Bronze Sponsors
              </h3>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {currentSponsors.bronze.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    size="xsmall"
                    borderColor="white/30"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Partner Sponsors */}
          {currentSponsors.partner.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3DD1CC] text-center mb-6">
                Partners
              </h3>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {currentSponsors.partner.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    size="small"
                    borderColor="#3DD1CC"
                  />
                ))}
              </div>
            </div>
          )}

          {/* No sponsors message */}
          {Object.values(currentSponsors).every(arr => arr.length === 0) && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">
                Sponsor announcements coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-20 px-4 bg-[#001133]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Sponsor
            </h2>
            <div className="w-24 h-1 bg-[#3DD1CC] mx-auto rounded-full mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Partner with us to support innovation in West Michigan.
              Your sponsorship helps create opportunities for entrepreneurs and innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group"
              >
                {/* Tier Header */}
                <div
                  className="p-6 text-center"
                  style={{ backgroundColor: `${tier.color}15` }}
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-white">
                    {tier.price}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-white/70">
                        <svg
                          className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                          style={{ color: tier.color }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#0048E5]/20 to-[#3DD1CC]/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Sponsor?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Contact us to learn more about sponsorship opportunities and how your organization
              can support innovation in West Michigan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#FFB703] text-[#001133] font-semibold rounded-lg hover:bg-[#E5A503] transition-colors"
            >
              Contact Us About Sponsorship
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

// Sponsor Card Component
function SponsorCard({
  sponsor,
  size,
  borderColor
}: {
  sponsor: SponsorWithLogo;
  size: "large" | "medium" | "small" | "xsmall";
  borderColor: string;
}) {
  const sizeClasses = {
    large: "w-64 h-32",
    medium: "w-48 h-24",
    small: "w-40 h-20",
    xsmall: "px-4 py-2",
  };

  const textClasses = {
    large: "text-white/60 font-medium",
    medium: "text-white/60 text-sm font-medium",
    small: "text-white/60 text-xs font-medium text-center px-2",
    xsmall: "text-white/60 text-sm",
  };

  const logoSizeClasses = {
    large: "max-w-48 max-h-20",
    medium: "max-w-36 max-h-16",
    small: "max-w-28 max-h-12",
    xsmall: "max-w-20 max-h-8",
  };

  const content = sponsor.logo?.url ? (
    <img
      src={sponsor.logo.url}
      alt={sponsor.logo?.alt || sponsor.name}
      className={`${logoSizeClasses[size]} object-contain`}
    />
  ) : (
    <span className={textClasses[size]}>{sponsor.name}</span>
  );

  if (size === "xsmall") {
    return (
      <div
        className={`${sizeClasses[size]} bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center`}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} bg-white/10 rounded-lg flex items-center justify-center border border-[${borderColor}]/30 hover:border-[${borderColor}] transition-colors`}
      style={{ borderColor: `${borderColor}30` }}
    >
      {content}
    </div>
  );
}
