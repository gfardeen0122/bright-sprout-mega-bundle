import benefitsImage from "@/assets/parent-child-learning.jpg";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Structured Skill Growth",
    description: "From tracing letters to solving logic puzzles, each worksheet helps your child build real skills step by step."
  },
  {
    title: "Learning Made Fun",
    description: "Engaging visuals and games turn study time into playtime."
  },
  {
    title: "Save Time & Money",
    description: "No need to buy multiple books or subscriptions — everything's included forever."
  }
];

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_hsl(var(--foreground)/0.12)]">
              <img 
                src={benefitsImage} 
                alt="Parent and child enjoying Bright Sprout worksheets together"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Parents Choose{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Bright Sprout
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Transform learning time into quality bonding moments with worksheets designed to inspire and educate.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
