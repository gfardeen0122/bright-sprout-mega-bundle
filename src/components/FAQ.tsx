import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age group is this bundle for?",
    answer: "Suitable for kids aged 3–7 years — preschool, LKG, UKG, and early grades."
  },
  {
    question: "Are these digital or physical worksheets?",
    answer: "It's a digital download. You'll get instant access to printable PDFs after purchase."
  },
  {
    question: "Can teachers use these in their classrooms?",
    answer: "Absolutely! You'll get permission to print and use them for class activities."
  },
  {
    question: "Will I get updates in the future?",
    answer: "Yes! You'll receive free lifetime updates as we add new worksheets."
  },
  {
    question: "What is the refund policy?",
    answer: "If you face any access issue, a 100% refund will be provided."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-[0_4px_20px_hsl(var(--foreground)/0.08)]"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
