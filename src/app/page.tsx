import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Phone, MapPin, Clock, Stethoscope, HeartPulse, User, Users, Shield } from 'lucide-react';
import StarRating from '@/components/common/star-rating';
import { services, reviews, CLINIC_LOCATION, CLINIC_PHONE, CLINIC_HOURS, faqItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const introImage = PlaceHolderImages.find(p => p.id === "1");

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);
  const featuredFaqs = faqItems.slice(0, 5);

  return (
    <div className="space-y-20 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="bg-accent">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Your Health, Our Priority.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Welcome to Atlas Health Clinic, where we provide compassionate and comprehensive medical care for your entire family.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <a href={`tel:${CLINIC_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact#directions">
                <MapPin className="mr-2 h-5 w-5" /> Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="container mx-auto -mt-40 px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <MapPin className="mx-auto h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p className="text-muted-foreground">{CLINIC_LOCATION}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Clock className="mx-auto h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Operating Hours</h3>
              <p className="text-muted-foreground">{CLINIC_HOURS}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Phone className="mx-auto h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <a href={`tel:${CLINIC_PHONE}`} className="text-muted-foreground hover:text-primary">{CLINIC_PHONE}</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Intro */}
      <section className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {introImage && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={introImage.imageUrl}
                alt={introImage.description}
                width={600}
                height={400}
                className="h-full w-full object-cover"
                data-ai-hint={introImage.imageHint}
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A Clinic That Cares About You
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Atlas Health Clinic was founded on a simple principle: to provide exceptional, patient-centered healthcare in a warm and welcoming environment. We believe in building lasting relationships with our patients based on trust, respect, and open communication.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Why Choose Atlas Health Clinic?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are committed to providing you with the best possible care.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader className="items-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2">Patient-Centric Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We prioritize your needs and comfort, ensuring a personalized and compassionate healthcare experience.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="items-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2">Experienced Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team consists of highly qualified and experienced medical professionals dedicated to your well-being.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="items-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2">Modern Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use state-of-the-art technology in a clean, modern, and welcoming environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-accent py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We offer a wide range of medical services to meet your health needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Patient Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">What Our Patients Say</h2>
          <div className="mt-4 inline-flex items-center">
            <StarRating rating={5.0} />
            <p className="ml-2 text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">5.0</span> from 5,000+ Google Reviews
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                     <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.author}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{review.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-accent py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
             Find quick answers to common questions about our clinic.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {featuredFaqs.map((item, index) => (
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
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
