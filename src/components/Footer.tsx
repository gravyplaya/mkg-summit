import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000d22] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <svg 
                width="48" 
                height="40" 
                viewBox="0 0 235 192" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-auto"
              >
                <path d="M60 131.505V60.0005C78.1077 60.0005 92.7868 74.6797 92.7868 92.7873V131.505H60Z" fill="#0048E5"/>
                <path d="M100.86 131.505V60.0005C119.059 60.0005 133.811 74.7534 133.811 92.9521V131.505H100.86Z" fill="#3DD1CC"/>
                <path d="M141.885 131.505V60.0005C160.083 60.0005 174.836 74.7534 174.836 92.9521V131.505H141.885Z" fill="#FFB703"/>
              </svg>
              <div>
                <h3 className="text-white font-bold text-xl">Innovators Summit</h3>
                <p className="text-white/60 text-sm">Muskegon, Michigan</p>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-md">
              Bringing together innovators, entrepreneurs, and thought leaders from across Michigan 
              to share ideas, build connections, and shape the future of our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/speakers" className="text-white/60 hover:text-[#3DD1CC] transition-colors text-sm">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-white/60 hover:text-[#3DD1CC] transition-colors text-sm">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#3DD1CC] transition-colors text-sm">
                  About the Summit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#3DD1CC] transition-colors text-sm">
                  Contact & Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Event Details</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#FFB703] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 21, 2026 at 1:00 PM</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#FFB703] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Muskegon Convention Center</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Innovators Summit. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-white/40 text-sm">
            <span>Presented by</span>
            <span className="text-white/60 font-medium">Muskegon Innovation Hub</span>
            <span className="text-white/20">|</span>
            <span className="text-white/60 font-medium">Grand Valley State University</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
