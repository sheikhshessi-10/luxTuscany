import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRequestItinerary: () => void;
}

const Header = ({ onRequestItinerary }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-cream/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <h2 className={`text-2xl font-display font-semibold transition-colors duration-500 ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              La Vita Toscana
            </h2>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={onRequestItinerary}
            className={`px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-xl ${
              isScrolled
                ? 'bg-gradient-to-r from-chianti-wine to-tuscan-red text-white hover:from-tuscan-red hover:to-chianti-wine'
                : 'bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold'
            }`}
          >
            Request Your Private Itinerary
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;