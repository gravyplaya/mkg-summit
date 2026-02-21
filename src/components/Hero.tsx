import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001133] via-[#002266] to-[#001133]" />
      
      {/* Decorative Shapes */}
      {/* Yellow curved shape - top right */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#FFB703] opacity-20 rounded-bl-full"
        style={{ transform: 'translate(30%, -30%)' }}
      />
      
      {/* Teal curved shape - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#3DD1CC] opacity-20 rounded-tr-full"
        style={{ transform: 'translate(-30%, 30%)' }}
      />
      
      {/* Blue accent blob */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0048E5] opacity-10 rounded-full blur-3xl animate-pulse-glow"
      />
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#FFB703]/20 rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-24 h-24 border-2 border-[#3DD1CC]/20 rounded-full" />
      <div className="absolute top-1/3 left-20 w-16 h-16 bg-[#FFB703]/10 rounded-full" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <svg 
            width="180" 
            height="150" 
            viewBox="0 0 741 192" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg h-auto"
          >
            <path d="M60 131.505V60.0005C78.1077 60.0005 92.7868 74.6797 92.7868 92.7873V131.505H60Z" fill="#0048E5"/>
            <path d="M100.86 131.505V60.0005C119.059 60.0005 133.811 74.7534 133.811 92.9521V131.505H100.86Z" fill="#3DD1CC"/>
            <path d="M141.885 131.505V60.0005C160.083 60.0005 174.836 74.7534 174.836 92.9521V131.505H141.885Z" fill="#FFB703"/>
            <path d="M209.795 61.1334V92.6416H192.151V61.1334H209.795ZM216.102 92.6416V61.0704H231.226L245.72 75.2491V61.1334H263.364V92.6416L248.24 92.5786L233.747 78.3999V92.6416H216.102ZM269.647 92.6416V61.0704H284.771L299.265 75.2491V61.1334H316.91V92.6416L301.786 92.5786L287.292 78.3999V92.6416H269.647ZM348.012 93.2718C331.501 93.2718 322.175 87.3482 322.175 76.8875C322.175 66.4268 331.501 60.5033 348.012 60.5033C364.522 60.5033 373.848 66.4268 373.848 76.8875C373.848 87.3482 364.522 93.2718 348.012 93.2718ZM348.075 82.559C353.305 82.559 356.204 80.5425 356.204 76.8875C356.204 73.2326 353.305 71.216 348.075 71.216C342.781 71.216 339.82 73.2326 339.82 76.8875C339.82 80.5425 342.781 82.559 348.075 82.559ZM390.899 61.1334L402.115 78.3999L413.584 61.1334H431.859L410.938 92.6416H393.293L372.624 61.1334H390.899ZM458.95 87.7263H439.856L436.768 92.6416H419.754L440.675 61.1334H458.32L478.989 92.6416H461.975L458.95 87.7263ZM453.846 79.5342L449.498 72.4764L445.023 79.5342H453.846ZM518.844 71.8462H504.035V92.6416H486.391V71.8462H471.582V61.1334H518.844V71.8462ZM548.15 93.2718C531.64 93.2718 522.314 87.3482 522.314 76.8875C522.314 66.4268 531.64 60.5033 548.15 60.5033C564.661 60.5033 573.987 66.4268 573.987 76.8875C573.987 87.3482 564.661 93.2718 548.15 93.2718ZM548.213 82.559C553.444 82.559 556.342 80.5425 556.342 76.8875C556.342 73.2326 553.444 71.216 548.213 71.216C542.92 71.216 539.958 73.2326 539.958 76.8875C539.958 80.5425 542.92 82.559 548.213 82.559ZM621.51 79.0301C624.598 80.7945 626.236 83.6933 626.236 87.5373V92.6416H610.482V84.8906C610.482 82.3699 608.34 80.9836 604.496 80.9836H596.934V92.6416H579.289V61.1334H611.365C621.069 61.1334 626.551 64.7884 626.551 71.216C626.551 74.745 624.787 77.3916 621.51 79.0301ZM607.016 72.7914C609.411 72.7914 610.797 72.2873 610.797 71.4051C610.797 70.4598 609.411 69.9557 607.016 69.9557H596.934V72.7914H607.016ZM655.919 93.1457C644.324 93.2087 635.817 90.0579 632.288 84.4495L646.467 81.4247C647.979 83.2522 651.382 84.3234 655.919 84.3234C661.213 84.3234 664.174 83.7563 664.174 82.685C664.174 78.589 630.713 85.1427 630.713 71.9092C630.713 64.5993 639.787 60.5033 655.919 60.5033C667.577 60.5033 676.085 63.6541 679.55 69.3255L665.372 72.3503C663.922 70.3968 660.52 69.3255 655.919 69.3255C650.626 69.3255 647.664 69.9557 647.664 71.09C647.664 74.745 681.126 68.6324 681.126 81.8658C681.126 89.2387 672.052 93.2718 655.919 93.1457Z" fill="white"/>
            <path d="M216.097 132.146C204.502 132.209 195.995 129.058 192.466 123.449L206.645 120.425C208.157 122.252 211.56 123.323 216.097 123.323C221.39 123.323 224.352 122.756 224.352 121.685C224.352 117.589 190.89 124.143 190.89 110.909C190.89 103.599 199.965 99.5033 216.097 99.5033C227.755 99.5033 236.262 102.654 239.728 108.326L225.549 111.35C224.1 109.397 220.697 108.326 216.097 108.326C210.804 108.326 207.842 108.956 207.842 110.09C207.842 113.745 241.304 107.632 241.304 120.866C241.304 128.239 232.229 132.272 216.097 132.146ZM246.989 100.133H264.633V115.888C264.633 119.542 266.839 121.559 270.683 121.559C274.464 121.559 276.606 119.542 276.606 115.888V100.133H294.251V115.888C294.251 126.348 285.744 132.272 270.62 132.272C255.496 132.272 246.989 126.348 246.989 115.888V100.133ZM360.141 131.642H342.497V120.866L333.359 131.642H327.058L317.92 120.866V131.642H300.276V100.133H316.03L330.208 116.581L344.387 100.133H360.141V131.642ZM426.308 131.642H408.664V120.866L399.526 131.642H393.225L384.087 120.866V131.642H366.443V100.133H382.197L396.376 116.581L410.554 100.133H426.308V131.642ZM450.255 100.133V131.642H432.61V100.133H450.255ZM503.508 110.846H488.699V131.642H471.055V110.846H456.246V100.133H503.508V110.846Z" fill="white"/>
          </svg>
        </div>
        
        {/* Event Details */}
        <div className="mb-6">
          <p className="text-[#FFB703] text-lg md:text-xl font-medium tracking-wide">
            April 21, 2026 at 12:00 PM <span className="text-white/50 mx-2">|</span> World Innovation Day
          </p>
          <p className="text-white/80 text-base md:text-lg mt-2">
            Hosted by the Muskegon Innovation Hub
          </p>
          <p className="text-white/60 text-sm mt-1">
            Muskegon Convention Center
          </p>
        </div>
        
        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
          Where Innovation Meets Opportunity
        </h2>
        
        {/* Description */}
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops 
          with Michigan's brightest innovators and entrepreneurs.
        </p>
        
        {/* Registration CTA */}
        <div className="mb-8 relative z-20">
          <Link
            href="https://www.gvsu.edu/mihub/module-events-view.htm?siteModuleId=AB55EC2F-97B9-3977-1FB8FF824B6BF2B2&eventId=CD785BA0-B5E4-B275-AF231E3EC8B750F2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#001133] bg-[#FFB703] rounded-full hover:bg-white hover:text-[#001133] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,183,3,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Register Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <p className="text-white/50 text-sm mt-4">
            Space is limited. Secure your spot today.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}
