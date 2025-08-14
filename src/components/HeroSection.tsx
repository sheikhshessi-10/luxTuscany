
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onRequestInvitation: () => void;
}

const HeroSection = ({ onRequestInvitation }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/868jQUqlZYs?autoplay=1&mute=1&loop=1&playlist=868jQUqlZYs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6 animate-fade-in-up">
          Live Tuscany Like the 1%
          <span className="block text-4xl md:text-6xl text-secondary mt-2">
            Private Estates, Hidden Vineyards, Michelin Dining
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.3s] opacity-0 fill-mode-forwards">
          An invitation to moments money can't usually buy… 
          <span className="block mt-2 text-secondary font-medium">unless you know us.</span>
        </p>
        
        <Button 
          onClick={onRequestInvitation}
          className="invitation-btn text-lg animate-fade-in-up [animation-delay:0.6s] opacity-0 fill-mode-forwards"
        >
          Apply for Your Place at the Table
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
