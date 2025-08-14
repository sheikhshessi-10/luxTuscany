


const testimonials = [
  {
    quote: "How wonderful this week has been! Tuscan magic, new friends, exciting discoveries - we loved every minute and are grateful for your passion and enthusiasm.",
    author: "Bruce and Mary"
  },
  {
    quote: "The best week ever! Great people, a great villa and a great country!",
    author: "Susan and Archie"
  },
  {
    quote: "It was our dream trip and absolutely exceeded our expectations! Can't wait to go back!!",
    author: "Ken and Jeanne"
  },
  {
    quote: "The single most unforgettable trip of my life — I felt like I was part of Tuscany's family.",
    author: "James R.",
    location: "New York"
  },
  {
    quote: "They didn't just show us Tuscany. They introduced us to a version of Italy few will ever know.",
    author: "Elizabeth T.",
    location: "London"
  },
  {
    quote: "Every moment was pure magic. The vineyards, the food, the people - we've never experienced anything like it.",
    author: "Michael and Sarah",
    location: "California"
  },
  {
    quote: "A week in paradise! The attention to detail and personal touches made this trip truly extraordinary.",
    author: "David and Lisa",
    location: "Toronto"
  },
  {
    quote: "We've traveled the world, but nothing compares to this Tuscany experience. Simply breathtaking!",
    author: "Robert and Anna",
    location: "Melbourne"
  }
];

const publications = [
  "Robb Report",
  "Condé Nast Traveler", 
  "Forbes Travel Guide",
  "Town & Country"
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6 scroll-reveal">
            Over 90% of Our Guests Return or Refer a Friend
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We've hosted global CEOs, Michelin critics, and a certain Oscar winner. 
            <span className="block mt-2 text-secondary font-medium">
              Now it's your turn to experience Tuscany like the elite do.
            </span>
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div 
              key={index}
              className="luxury-card scroll-reveal"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <blockquote className="luxury-quote mb-6">
                {testimonial.quote}
              </blockquote>
              
              <cite className="text-secondary font-medium font-display not-italic">
                — {testimonial.author}
                {testimonial.location && <span className="text-foreground/60 ml-2">, {testimonial.location}</span>}
              </cite>
            </div>
          ))}
        </div>
        
        {/* Publications */}
        <div className="text-center scroll-reveal">
          <p className="text-foreground/60 mb-8 font-medium tracking-wider uppercase text-sm">
            As Featured In
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((publication) => (
              <div 
                key={publication}
                className="text-foreground/40 font-display font-medium text-lg hover:text-secondary transition-colors duration-300 cursor-default"
              >
                {publication}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
