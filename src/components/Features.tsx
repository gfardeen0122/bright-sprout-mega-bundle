import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Printer, Target, GraduationCap, Monitor, Heart, RefreshCw } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "10,000+ Worksheets",
    description: "Massive variety across skills and grades."
  },
  {
    icon: Users,
    title: "Age-Appropriate Design",
    description: "Perfect for preschool & early primary."
  },
  {
    icon: Printer,
    title: "Printable & Reusable",
    description: "Instant download; print anytime you need."
  },
  {
    icon: Target,
    title: "Skill-Based Learning",
    description: "Literacy, numeracy, logic, art & more."
  },
  {
    icon: GraduationCap,
    title: "Created by Educators",
    description: "Aligned with early childhood learning goals."
  },
  {
    icon: Monitor,
    title: "Screen-Free Activities",
    description: "Encourage creativity without devices."
  },
  {
    icon: Heart,
    title: "Parent & Teacher Friendly",
    description: "Easy to use at home or in class."
  },
  {
    icon: RefreshCw,
    title: "Lifetime Access",
    description: "One-time payment, unlimited future updates."
  }
];

export const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your Child Needs to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learn & Grow
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed by educators, loved by parents — each worksheet is crafted to make learning engaging and effective.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-[0_8px_30px_hsl(var(--foreground)/0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
