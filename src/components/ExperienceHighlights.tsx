
import { Wine, ChefHat, Castle, TreePine } from "lucide-react";

const experiences = [
  {
    icon: Wine,
    title: "Drink Wines You Can't Buy",
    description: "In cellars the public never sees, with winemakers who know your name."
  },
  {
    icon: ChefHat,
    title: "Dine Where Critics Can't Get In",
    description: "Bespoke menus from chefs who cook for the world's elite."
  },
  {
    icon: Castle,
    title: "Sleep in Estates That Reject Tourists",
    description: "Centuries-old villas where history meets luxury you can't book online."
  },
  {
    icon: TreePine,
    title: "Hunt Truffles with Locals Who Guard Secrets",
    description: "Join traditions passed down for generations, in places GPS can't find."
  }
];

const ExperienceHighlights = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6 scroll-reveal">
            Curated Exclusively for You
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto scroll-reveal"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className="luxury-card scroll-reveal text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <experience.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {experience.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
