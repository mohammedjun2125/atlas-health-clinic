import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { doctors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Stethoscope, Quote, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet the experienced and caring team of doctors at Atlas Health Clinic.',
};

export default function DoctorsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Our Care Team"
        subtitle="Meet the dedicated and experienced medical professionals who are committed to your health and well-being."
      />
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => {
            const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
            const initials = doctor.name.split(' ').map(n => n[0]).join('');

            return (
              <Card key={doctor.name} className="flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 border-4 border-background ring-2 ring-primary">
                    {doctorImage && (
                        <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint} />
                    )}
                    <AvatarFallback className="text-3xl bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4 text-2xl">{doctor.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-primary">
                    <Stethoscope className="h-4 w-4" /> {doctor.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground"><span className="font-semibold text-foreground">Experience:</span> {doctor.experience}</p>
                    </div>
                     <div className="flex items-start gap-3">
                      <Quote className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground italic">"{doctor.philosophy}"</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground">Languages</h4>
                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
