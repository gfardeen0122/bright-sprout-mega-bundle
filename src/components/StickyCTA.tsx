import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-[0_-4px_20px_hsl(var(--foreground)/0.08)] animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Limited Time: ₹499 Only!</p>
            <p className="text-sm text-muted-foreground">10,000+ Worksheets • Lifetime Access</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300 whitespace-nowrap"
              asChild
            >
              <a href="https://superprofile.bio/vp/10k-kids-worksheet-bundle" target="_blank" rel="noopener noreferrer">
                ✅ Get Lifetime Access @ ₹499 Now
              </a>
            </Button>
            <p className="text-xs text-red-600 dark:text-red-500 font-semibold">🔥 Only 200 copies left at this price!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
