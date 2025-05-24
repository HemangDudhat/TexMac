import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const FAQItems = [
    {
      question: "What types of machines does Techmac Automation offer?",
      answer: "We specialize in fabric cutting machines including Length Cutting Machines (LC210) and Panel Cutting Machines (PC400), along with custom automation solutions."
    },
    {
      question: "Can the machines be customized to my production needs?",
      answer: "Yes, our engineering team provides customization options based on your material, size, and automation requirements."
    },
    {
      question: "Do you provide installation and training?",
      answer: "Absolutely! We offer on-site installation and operator training to ensure a smooth handover of the machinery."
    },
    {
      question: "What is the typical delivery timeline?",
      answer: "We typically deliver machines within 6 to 8 weeks after the order confirmation and payment terms are met."
    },
    {
      question: "What support is available post-purchase?",
      answer: "We provide 1-year warranty support and prompt assistance from our service team for maintenance or troubleshooting."
    }
  ];

  return (
    <div className="bg-white px-4 md:px-10 py-16 max-w-5xl mx-auto text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium text-gray-700">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
