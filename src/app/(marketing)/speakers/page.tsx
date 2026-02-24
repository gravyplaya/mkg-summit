import Link from "next/link";
import { getSpeakers } from "@/lib/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Speakers as SpeakerType } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type SpeakerWithPhoto = SpeakerType & {
  photo?: {
    url?: string;
    alt?: string;
  } | null;
  bio?: SerializedEditorState | null;
};

export default async function SpeakersPage() {
  let speakers: SpeakerWithPhoto[] = [];

  try {
    const result = await getSpeakers();
    speakers = result.docs as SpeakerWithPhoto[];
  } catch (error) {
    console.error("Failed to fetch speakers:", error);
  }

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
            who are shaping the future of Michigan&apos;s economy.
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {speakers.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFB703]/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    {/* Speaker Avatar */}
                    {speaker.photo?.url ? (
                      <img
                        src={speaker.photo.url}
                        alt={speaker.photo?.alt || speaker.name}
                        className="w-20 h-20 flex-shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0048E5] to-[#3DD1CC] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#FFB703] transition-colors">
                        {speaker.name}
                      </h3>
                      {speaker.jobTitle && (
                        <p className="text-[#3DD1CC] text-sm mb-2">
                          {speaker.jobTitle}{speaker.company ? `, ${speaker.company}` : ''}
                        </p>
                      )}
                      {speaker.bio && (
                        <div className="text-white/60 text-sm mb-3 leading-relaxed">
                          <RichText data={speaker.bio} />
                        </div>
                      )}
                      {speaker.socialLinks && (
                        <div className="flex gap-3">
                          {speaker.socialLinks.twitter && (
                            <a
                              href={speaker.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/40 hover:text-[#1DA1F2] transition-colors"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                          )}
                          {speaker.socialLinks.linkedin && (
                            <a
                              href={speaker.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/40 hover:text-[#0A66C2] transition-colors"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {speaker.socialLinks.website && (
                            <a
                              href={speaker.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/40 hover:text-[#3DD1CC] transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">
                Speaker announcements coming soon. Check back later!
              </p>
            </div>
          )}
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
              We&apos;re always looking for passionate innovators to share their knowledge and experience.
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
