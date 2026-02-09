import type { Metadata } from 'next';
import PageHeader from '@/components/common/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about appointments, hours, and services at Atlas Health Clinic.',
};

export default function FaqPage() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions. If you can't find what you're looking for, please don't hesitate to contact us."
      />
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
