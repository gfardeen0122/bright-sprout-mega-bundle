import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-child.jpg";
import { Star, Clock } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Social Proof Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>9,536+ Parents & Teachers Trust Bright Sprout</span>
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                🌱 Grow Little Minds Brightly with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  10,000+ Worksheets
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Make learning fun, structured, and screen-free with thousands of printable worksheets — 
                trusted by parents and teachers to boost creativity, logic, and confidence in early learners.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
              <Clock className="h-5 w-5 text-accent animate-pulse" />
              <CountdownTimer />
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300 text-lg px-8 py-6"
                onClick={scrollToPricing}
              >
                🔥 Get Lifetime Access @ ₹499
              </Button>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 9,500+ happy parents</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_hsl(var(--foreground)/0.12)]">
              <img 
                src={heroImage} 
                alt="Happy child learning with Bright Sprout worksheets"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
