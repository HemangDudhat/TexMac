import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const FAQItems = [
    {
      question: "What types of machines does Texmac Automation offer?",
      answer: "We make machines for the home textile industry, like towel and bedsheet cutting and stitching. Our main machines include hemming machines, cross cutting machines, and blade sharpening machines."
    },
    {
      question: "Can I get a machine made as per my need?",
      answer: "Yes! We provide customized machines based on your production size, fabric type, and workflow."
    },
    {
      question: "What fabrics are your machines suitable for?",
      answer: "Our machines work with both terry and non-terry fabrics, like towels, bedsheets, and curtains."
    },
    {
      question: "Are your machines easy to use?",
      answer: "Yes. Our machines come with a simple control panel (HMI) and require minimal training to operate."
    },
    {
      question: "Do you provide installation and training?",
      answer: "Absolutely! We offer on-site installation and operator training to ensure a smooth handover of the machinery."
    },
    {
      question: "What is the typical delivery timeline?",
      answer: "We typically deliver machines within 1 to 4 weeks after the order confirmation and payment terms are met."
    },
    {
      question: "What support is available post-purchase?",
      answer: "We provide 1-year warranty support and prompt assistance from our service team for maintenance or troubleshooting."
    },
    {
    question: "What type of stitching options do you provide?",
    answer: "We offer both lock stitch and chain stitch options, with choices like Pegasus for high-end stitching or JIN for budget-friendly needs."
    },
    {
      question: "Do your machines use PLC and electric drives?",
      answer: "Yes, all our machines are equipped with PLC systems and electric drives for better control and efficiency."
    },
    {
      question: "Do you offer support after purchase?",
      answer: "Yes, we provide after-sales service including maintenance, technical support, and spare parts."
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
