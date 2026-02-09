import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { CLINIC_ADDRESS_FULL, CLINIC_PHONE, CLINIC_HOURS, CLINIC_LOCATION } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Atlas Health Clinic. Find our address, phone number, opening hours, and location on the map.',
};

const contactImage = PlaceHolderImages.find(p => p.id === '6');

export default function ContactPage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="pb-24">
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to help. Reach out to us for appointments, inquiries, or any other questions you may have."
      />
      <div className="container mx-auto px-4 mt-16 space-y-16">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <MapPin className="mx-auto h-10 w-10 text-primary" />
              <CardTitle>Our Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{CLINIC_ADDRESS_FULL}</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <Phone className="mx-auto h-10 w-10 text-primary" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`tel:${CLINIC_PHONE}`} className="text-lg text-muted-foreground hover:text-primary">
                {CLINIC_PHONE}
              </a>
              <p className="text-sm text-muted-foreground mt-1">Call for appointments</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <Clock className="mx-auto h-10 w-10 text-primary" />
              <CardTitle>Opening Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{CLINIC_HOURS}</p>
            </CardContent>
          </Card>
        </section>

        <section id="directions" className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Find Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our clinic is located at a prime, easily accessible location in Begumpet, Hyderabad. Use the map below for precise directions.
            </p>
            <div className="mt-6 rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.232356877983!2d78.45543685!3d17.4578028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971847c234b1%3A0xb35558464b544d62!2sBegumpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1684321098765"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${CLINIC_LOCATION}`}
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Clinic Hours</h2>
             <Card className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead className="text-right">Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {days.map((day) => (
                    <TableRow key={day}>
                      <TableCell className="font-medium">{day}</TableCell>
                      <TableCell className="text-right text-muted-foreground">9:00 AM – 10:00 PM</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <div className="mt-8">
              {contactImage && <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                data-ai-hint={contactImage.imageHint}
              />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
