import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Atlas Health Clinic\'s mission, values, and our commitment to patient-first, ethical healthcare.',
};

const aboutImage = PlaceHolderImages.find(p => p.id === '5');

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <PageHeader
        title="About Atlas Health Clinic"
        subtitle="Dedicated to providing compassionate, ethical, and high-quality healthcare for our community."
      />

      <div className="container mx-auto px-4 space-y-16">
        {/* Our Story */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          {aboutImage && (
            <div className="order-last md:order-first rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Atlas Health Clinic was born from a desire to create a healthcare space where patients feel heard, respected, and genuinely cared for. Located in the heart of Begumpet, Hyderabad, we are a modern medical clinic committed to serving our community with integrity and warmth.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of experienced doctors and dedicated staff work together to provide comprehensive medical services in a welcoming and professional environment. We believe that good health is a partnership between patient and provider, built on a foundation of trust.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission & Values</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our practice is guided by three core principles that define every interaction and decision we make.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-2">Patient-First Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your well-being is our ultimate priority. We listen to your concerns, respect your decisions, and tailor our care to your individual needs and circumstances.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-2">Ethical Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to the highest standards of medical ethics. We provide transparent, honest, and evidence-based care, ensuring you only receive necessary and effective treatments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-2">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As members of the Hyderabad community, we are dedicated to improving local health outcomes. We strive to be a reliable and accessible healthcare resource for all our neighbors.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
