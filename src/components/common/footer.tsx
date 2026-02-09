import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
import { CLINIC_NAME, CLINIC_ADDRESS_FULL, CLINIC_PHONE, CLINIC_HOURS, navLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">{CLINIC_NAME}</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Your health, our priority. Compassionate care for the whole family.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider text-foreground">Contact Info</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>{CLINIC_ADDRESS_FULL}</li>
              <li>
                <a href={`tel:${CLINIC_PHONE}`} className="hover:text-primary">
                  {CLINIC_PHONE}
                </a>
              </li>
              <li>{CLINIC_HOURS}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider text-foreground">Our Mission</h4>
            <p className="mt-4 text-muted-foreground">
              To provide accessible, high-quality healthcare in a patient-first environment built on trust and ethical medical practices.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} {CLINIC_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
