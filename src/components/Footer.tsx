
const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-semibold mb-4 text-secondary">
              La Vita Toscana
            </h3>
            <p className="text-cream/80 text-lg mb-6">
              Curated Journeys for the Discerning Traveler
            </p>
            <div className="w-24 h-0.5 bg-secondary mb-6"></div>
            <div className="flex flex-col gap-2 text-cream/60">
              <p>Florence, Italy • By Invitation Only • Est. 2024</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-4 text-secondary">Contact</h4>
            <div className="space-y-3 text-cream/80">
              <a href="mailto:hello@lavita-toscana.com" className="block hover:text-secondary transition-colors">
                hello@lavita-toscana.com
              </a>
              <a href="tel:+393551234567" className="block hover:text-secondary transition-colors">
                +39 355 123 4567
              </a>
              <a href="https://wa.me/393551234567" className="block hover:text-secondary transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-4 text-secondary">Navigate</h4>
            <div className="space-y-3 text-cream/80">
              <a href="/" className="block hover:text-secondary transition-colors">Home</a>
              <a href="/tours" className="block hover:text-secondary transition-colors">Private Tours</a>
              <a href="/about" className="block hover:text-secondary transition-colors">Our Story</a>
              <a href="/contact" className="block hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Instagram Feed Preview */}
        <div className="mb-12">
          <h4 className="text-xl font-display font-semibold mb-6 text-secondary text-center">
            Current Tuscany Journeys
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-warm-gold/20 rounded-lg hover:bg-warm-gold/30 transition-colors cursor-pointer">
                <div className="w-full h-full flex items-center justify-center text-warm-gold/60">
                  <span className="text-xs">@lavita_toscana</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-cream/60">Follow Our Journey:</span>
              <div className="flex gap-4">
                <a href="https://instagram.com/lavita_toscana" className="text-cream/60 hover:text-secondary transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/lavitatoscana" className="text-cream/60 hover:text-secondary transition-colors">
                  Facebook
                </a>
                <a href="https://youtube.com/lavitatoscana" className="text-cream/60 hover:text-secondary transition-colors">
                  YouTube
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-cream/60 text-sm">
              © 2024 La Vita Toscana. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
