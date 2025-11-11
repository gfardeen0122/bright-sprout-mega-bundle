export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🌱 Bright Sprout
            </h3>
            <p className="text-muted-foreground text-sm">
              Making early learning fun, engaging, and effective for children ages 3–7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Have questions? We're here to help!
            </p>
            <a 
              href="mailto:contact@pixelpursuit.shop" 
              className="text-sm text-primary hover:underline"
            >
              contact@pixelpursuit.shop
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Bright Sprout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
