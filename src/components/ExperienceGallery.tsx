import { Button } from "@/components/ui/button";
import BehindTheScenesModal from "./BehindTheScenesModal";
import { useState } from "react";

interface ExperienceGalleryProps {
  onRequestVideo: () => void;
  onRequestCuratedCall: () => void;
}

const ExperienceGallery = ({ onRequestVideo, onRequestCuratedCall }: ExperienceGalleryProps) => {
  const [isBehindTheScenesModalOpen, setIsBehindTheScenesModalOpen] = useState(false);

  const experiences = [
    {
      image: "/images/tuscany1.jpg",
      caption: "Sipping Brunello while the sun sets behind the hills.",
      location: "Montalcino, Tuscany",
      year: "2024"
    },
    {
      image: "/images/tuscany2.jpg", 
      caption: "Laughing with friends over truffle pasta made just for you.",
      location: "San Gimignano, Tuscany",
      year: "2024"
    },
    {
      image: "/images/tuscany3.jpg",
      caption: "Private villa dinners where every moment feels like family.",
      location: "Chianti, Tuscany", 
      year: "2024"
    },
    {
      image: "/images/tuscany4.jpg",
      caption: "Walking through ancient olive groves at golden hour.",
      location: "Val d'Orcia, Tuscany",
      year: "2024"
    }
  ];

  return (
    <section className="py-24 bg-background">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {experiences.map((experience, index) => (
          <div key={index} className="relative group overflow-hidden">
            {/* Actual image instead of placeholder */}
            <img 
              src={experience.image} 
              alt={experience.caption}
              className="w-full h-full object-cover aspect-[4/3]"
            />
            
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Experience Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-2xl md:text-3xl font-display font-medium mb-2 leading-tight">
                {experience.caption}
              </p>
              <p className="text-lg text-warm-gold font-medium">
                {experience.location}
              </p>
            </div>
            
            {/* Year Badge */}
            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {experience.year} trip
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl font-display font-medium mb-2">
                  {experience.location}
                </p>
                <p className="text-warm-gold">
                  Experience the magic
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Want to see more?
          </h3>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get exclusive behind-the-scenes footage from our latest journey through Tuscany's hidden gems.
          </p>
          <Button 
            onClick={() => setIsBehindTheScenesModalOpen(true)}
            className="invitation-btn text-xl px-12 py-4 bg-gradient-to-r from-tuscan-red to-warm-gold text-white hover:from-warm-gold hover:to-tuscan-red font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request exclusive behind-the-scenes video from our last trip
          </Button>
        </div>
      </div>

      {/* Behind the Scenes Modal */}
      <BehindTheScenesModal 
        isOpen={isBehindTheScenesModalOpen}
        onClose={() => setIsBehindTheScenesModalOpen(false)}
        onRequestCuratedCall={onRequestCuratedCall}
      />
    </section>
  );
};

export default ExperienceGallery; 