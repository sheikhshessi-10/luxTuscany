import { Button } from "@/components/ui/button";

interface ProcessSectionProps {
  onRequestInvitation: () => void;
  onRequestCuratedCall: () => void;
}

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Complete short guest application (spaces limited).",
    action: "apply"
  },
  {
    number: "02", 
    title: "Curated Call",
    description: "Discuss tastes & preferences, create bespoke itinerary.",
    action: "curated-call"
  },
  {
    number: "03",
    title: "Journey to Tuscany", 
    description: "Arrive as a guest. Leave as part of the family.",
    action: "none"
  }
];

const ProcessSection = ({ onRequestInvitation, onRequestCuratedCall }: ProcessSectionProps) => {
  const handleCardClick = (action: string) => {
    if (action === "apply") {
      onRequestInvitation();
    } else if (action === "curated-call") {
      onRequestCuratedCall();
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6 scroll-reveal">
            The Process
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto scroll-reveal"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`process-step scroll-reveal text-center relative ${
                step.action !== "none" ? "cursor-pointer group" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => step.action !== "none" && handleCardClick(step.action)}
            >
              <div className="text-5xl font-display font-bold text-secondary mb-6">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed mb-6">
                {step.description}
              </p>
              
              {/* Action Button for clickable cards */}
              {step.action === "curated-call" && (
                <Button
                  className="bg-gradient-to-r from-secondary to-tuscan-red text-white hover:from-tuscan-red hover:to-secondary"
                >
                  Book Call
                </Button>
              )}
              
              {/* Hover effect for clickable cards */}
              {step.action !== "none" && (
                <div className="absolute inset-0 bg-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-secondary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
