import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import faqs from "@/data/faq-ekspor-impor.json";

export default function FAQSection() {
  return (
    <section className="p-8 py-12 md:p-16 flex flex-col items-center">
      <h2 className="font-bold text-5xl">Frequently Ask Question</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[900px] mt-8 md:mt-12"
      >
        {faqs.map((faq, idx) => (
          <AccordionItem value={`item-${idx}`} key={idx}>
            <AccordionTrigger className="text-xl hover:no-underline font-semibold text-neutral-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-neutral-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
