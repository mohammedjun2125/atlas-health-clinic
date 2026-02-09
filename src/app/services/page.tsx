import type { Metadata } from 'next';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive medical services offered at Atlas Health Clinic, from general consultations to specialized care.',
};

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Our Medical Services"
        subtitle="We provide a wide range of healthcare services to meet the needs of our community. Our goal is to offer comprehensive care under one roof."
      />
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="mt-1">{service.shortDescription}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Who is it for?
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">{service.forWhom}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      When to visit?
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">{service.whenToVisit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
