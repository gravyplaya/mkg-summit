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
  // Page commented out - will be added back later
  return null;
  /*
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001133] via-[#002266] to-[#001133]">
      ...
    </div>
  );
  */
}
