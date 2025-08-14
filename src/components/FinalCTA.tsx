
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onJoinGuestList: () => void;
}

const FinalCTA = ({ onJoinGuestList }: FinalCTAProps) => {

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-semibold text-foreground mb-6 scroll-reveal">
          Your Invitation Awaits
        </h2>
        
        <div className="w-32 h-1 bg-secondary mx-auto mb-8 scroll-reveal"></div>
        
        <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed scroll-reveal">
          We host only a handful of guests each year. If you believe life's finest moments 
          are worth seeking, request your invitation today.
        </p>
        
        <div className="scroll-reveal">
          <Button 
            onClick={onJoinGuestList}
            className="gold-btn text-lg px-8 py-4 mb-8"
          >
            Join the Guest List
          </Button>
          
          <p className="text-foreground/60 text-sm">
            Exclusive. Limited. Unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
