import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Lock, RefreshCw } from "lucide-react";

const comparisonFeatures = [
  { feature: "Worksheets Count", others: "200–500", brightSprout: "10,000+" },
  { feature: "Updates", others: "No", brightSprout: "Lifetime Free" },
  { feature: "Price", others: "₹1,999+", brightSprout: "₹499 One-Time" },
  { feature: "Skill Variety", others: "Limited", brightSprout: "20+ Categories" },
  { feature: "Designed by Educators", others: "No", brightSprout: "Yes" },
  { feature: "Screen-Free", others: "Mixed", brightSprout: "100% Screen-Free" }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            ⚡ Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get Everything for Just{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ₹499
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment. Lifetime access. No subscriptions. No hidden fees.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-2 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 font-bold text-sm transform translate-x-8 translate-y-4 rotate-45">
              75% OFF
            </div>
            <CardHeader className="text-center space-y-4 pb-8">
              <h3 className="text-2xl font-bold">Bright Sprout Mega Bundle</h3>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">₹499</span>
                  <span className="text-2xl text-muted-foreground line-through">₹2,999</span>
                </div>
                <p className="text-muted-foreground">One-time payment • Lifetime access</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>10,000+ printable worksheets across 20+ skill categories</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Designed by certified educators for ages 3–7</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Instant digital download • Print unlimited copies</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Free lifetime updates with new worksheets</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bonus: Worksheet Planner PDF + Printable Reward Charts</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300 text-lg py-6"
              >
                🔥 Get Lifetime Access @ ₹499 Now
              </Button>

              <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>SSL Protected</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCw className="h-4 w-4 text-primary" />
                  <span>7-Day Guarantee</span>
                </div>
              </div>

              <div className="text-center space-y-2 pt-4">
                <p className="text-sm font-semibold text-destructive">
                  🔥 Only 200 copies left at this launch price!
                </p>
                <p className="text-sm text-muted-foreground">
                  Join 9,500+ happy parents and teachers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Bright Sprout Beats the Rest
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Other Packs</th>
                  <th className="text-center py-4 px-4 font-semibold bg-primary/5">
                    Bright Sprout
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 font-medium">{item.feature}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">
                      {item.others === "No" ? (
                        <X className="h-5 w-5 text-destructive inline-block" />
                      ) : (
                        item.others
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/5 font-semibold text-primary">
                      {item.brightSprout === "Yes" ? (
                        <Check className="h-5 w-5 text-primary inline-block" />
                      ) : (
                        item.brightSprout
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
