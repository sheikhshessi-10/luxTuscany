
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
// import PromiseSection from "@/components/PromiseSection";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import SocialProof from "@/components/SocialProof";
import ExperienceGallery from "@/components/ExperienceGallery";
import ProcessSection from "@/components/ProcessSection";
import SocialProofDeepDive from "@/components/SocialProofDeepDive";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ItineraryModal from "@/components/ItineraryModal";
import CuratedCallModal from "@/components/CuratedCallModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCuratedCallModalOpen, setIsCuratedCallModalOpen] = useState(false);
  useScrollReveal();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openCuratedCallModal = () => setIsCuratedCallModalOpen(true);
  const closeCuratedCallModal = () => setIsCuratedCallModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onRequestItinerary={openModal} />
      <HeroSection onRequestInvitation={openModal} />
      {/* <PromiseSection /> */}
      <SocialProof />
      <ExperienceHighlights />
      
      {/* Call to Action Button */}
      <div className="py-16 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <Button 
            onClick={openModal}
            className="invitation-btn text-xl px-12 py-4 bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Apply for Your Place at the Table
          </Button>
        </div>
      </div>
      
      {/* Immersive Experience Gallery */}
      <ExperienceGallery 
        onRequestVideo={() => {}} 
        onRequestCuratedCall={openCuratedCallModal}
      />
      
      <ProcessSection 
        onRequestInvitation={openModal}
        onRequestCuratedCall={openCuratedCallModal}
      />
      
      {/* Social Proof Deep Dive */}
      <SocialProofDeepDive />
      
      <FinalCTA onJoinGuestList={openModal} />
      <Footer />
      
      {/* Modals */}
      <ItineraryModal isOpen={isModalOpen} onClose={closeModal} />
      <CuratedCallModal isOpen={isCuratedCallModalOpen} onClose={closeCuratedCallModal} />
    </div>
  );
};

export default Index;
