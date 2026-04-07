import { getSessions, getSpeakers } from "@/lib/api";
import type { Sessions as SessionType, Speakers as SpeakerType } from "@/payload-types";

type SpeakerMap = Record<string, { name: string; company?: string | null }>;

const trackLabels: Record<string, string> = {
  main: "Main Stage",
  "workshop-a": "Workshop Room A",
  "workshop-b": "Workshop Room B",
};

const trackColors: Record<string, string> = {
  main: "border-[#FFB703]/50",
  "workshop-a": "border-[#3DD1CC]/50",
  "workshop-b": "border-[#0048E5]/50",
};

const trackTextColors: Record<string, string> = {
  main: "text-[#FFB703]",
  "workshop-a": "text-[#3DD1CC]",
  "workshop-b": "text-[#0048E5]",
};

function getTimeKey(date: Date | null | undefined): string {
  if (!date) return "";
  const d = new Date(date);
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes === 0 ? "00" : String(minutes).padStart(2, "0");
  return `${displayHours}:${displayMinutes} ${period}`;
}

export default async function AboutPage() {
  const [sessionsResult, speakersResult] = await Promise.all([
    getSessions(),
    getSpeakers(),
  ]);

  const sessions = sessionsResult.docs as SessionType[];
  const speakers = speakersResult.docs as SpeakerType[];

  const speakerMap: SpeakerMap = {};
  for (const speaker of speakers) {
    speakerMap[speaker.id] = { name: speaker.name, company: speaker.company };
  }

  const sessionsByTimeKey = sessions.reduce<Record<string, SessionType[]>>((acc, session) => {
    if (!session.startTime) return acc;
    const key = getTimeKey(session.startTime);
    if (!acc[key]) acc[key] = [];
    acc[key].push(session);
    return acc;
  }, {});

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
      time: null,
      dbTimeKey: "2:45 PM",
      title: "Session 1",
      icon: "workshop",
    },
    {
      time: "3:30 PM",
      title: "Break",
      description: "Networking, visit exhibitors, move to breakout rooms",
      icon: "networking",
    },
    {
      time: null,
      dbTimeKey: "3:45 PM",
      title: "Session 2",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Schedule & <span className="text-[#FFA500]">Sessions</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            Join us for a day of inspiration, learning, and connection.
          </p>
        </div>
      </section>

      <section className="py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {schedule.map((item, index) => {
              const isDbSlot = !!item.dbTimeKey;
              const displayTime = isDbSlot ? item.dbTimeKey : (item.time || "");
              const dbSessions = isDbSlot ? (sessionsByTimeKey[item.dbTimeKey] || []) : [];

              return (
                <div key={index} className="flex gap-6 md:gap-12 group">
                  <div className="w-24 md:w-32 pt-1">
                    <span className="text-white/40 text-sm md:text-base font-black uppercase tracking-widest">{displayTime}</span>
                  </div>
                  <div className="flex-1 pb-12 border-l border-white/10 pl-8 md:pl-12 relative">
                    <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-[#FF4500] group-hover:scale-150 transition-transform" />

                    {isDbSlot ? (
                      <>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#3DD1CC] transition-colors">
                          {item.title}
                        </h3>
                        {dbSessions.length > 0 ? (
                          <div className="space-y-3">
                            {dbSessions.map((session) => {
                              const track = session.track || "main";
                              const sessionSpeakers = (session.speakers || [])
                                .map((id) => speakerMap[id])
                                .filter(Boolean);

                              return (
                                <div
                                  key={session.id}
                                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border ${trackColors[track] || "border-white/10"}`}
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                    <h4 className="text-base font-bold text-white">
                                      {session.title}
                                    </h4>
                                    {session.track && (
                                      <span className={`text-xs font-bold uppercase tracking-wider ${trackTextColors[track] || "text-white/40"}`}>
                                        {trackLabels[track] || session.track}
                                      </span>
                                    )}
                                  </div>
                                  {session.location && (
                                    <p className="text-white/40 text-sm mb-1">{session.location}</p>
                                  )}
                                  {sessionSpeakers.length > 0 && (
                                    <p className="text-white/50 text-sm">
                                      {sessionSpeakers.map((s) => s.name).join(" &middot; ")}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-white/60 text-base md:text-lg">
                            Breakout sessions (3 track options)
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#3DD1CC] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-base md:text-lg">
                          {item.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
