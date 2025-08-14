import React from "react";

const videos = [
  {
    title: "A weekend among vintners",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop&crop=center",
  },
  {
    title: "Stories at the villa table",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop&crop=center",
  },
  {
    title: "Into the cypress hills",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
  },
];

const SocialProofDeepDive = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Real Stories from Real Guests
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Experience the magic through the eyes of those who've lived it. 
            <span className="block mt-2 text-secondary font-medium">
              Every testimonial is a window into your future adventure.
            </span>
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <article key={i} className="scroll-reveal">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl shadow">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={v.poster}
                  controls
                  playsInline
                >
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
              <h3 className="mt-4 font-display text-lg text-foreground/90">{v.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofDeepDive; 