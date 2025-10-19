import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Neha Sharma",
    location: "Delhi",
    text: "My 4-year-old now asks for worksheet time! These printables made learning fun again.",
    rating: 5
  },
  {
    name: "Rakesh Iyer",
    location: "Mumbai",
    text: "Affordable and super engaging. My daughter's handwriting improved in 2 weeks.",
    rating: 5
  },
  {
    name: "Pooja Saini",
    location: "Bengaluru",
    text: "As a preschool teacher, this bundle saves me hours of planning every week!",
    rating: 5
  },
  {
    name: "Anjali Kapoor",
    location: "Pune",
    text: "Best purchase ever for early learning. I love the clear skill progression.",
    rating: 5
  },
  {
    name: "Rekha Das",
    location: "Kolkata",
    text: "My students stay focused longer with Bright Sprout sheets. They're colorful and effective.",
    rating: 5
  },
  {
    name: "Manish Bhatia",
    location: "Gurugram",
    text: "A single ₹499 bundle replaced all my paid app subscriptions — totally worth it.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              9,500+ Parents & Teachers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what families and educators are saying about Bright Sprout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-[0_8px_30px_hsl(var(--foreground)/0.12)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
