import type { NavLink, Service, Doctor, Review, FaqItem } from './types';
import { HeartPulse, Stethoscope, Baby, Shield, Activity, Users, Brain, Bone } from 'lucide-react';

// Clinic Information
export const CLINIC_NAME = 'Atlas Health Clinic';
export const CLINIC_LOCATION = 'Begumpet, Hyderabad, Telangana';
export const CLINIC_ADDRESS_FULL = '1-11-256, Street Number 1, Begumpet, Hyderabad, Telangana 500016';
export const CLINIC_HOURS = '9 AM – 10 PM (All days)';
export const CLINIC_PHONE = '094949 50458';
export const CLINIC_DESCRIPTION = 'Atlas Health Clinic offers compassionate, patient-centered healthcare in Begumpet, Hyderabad. Our services include general consultations, pediatrics, cardiology, and more.';

// Navigation
export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Our Doctors' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// Services
export const services: Service[] = [
  {
    name: 'General Consultation',
    icon: Stethoscope,
    shortDescription: 'Comprehensive care for your everyday health needs.',
    description: 'Our general practitioners provide continuous and comprehensive healthcare for individuals and families across all ages, genders, diseases, and parts of the body.',
    forWhom: 'Everyone, from children to elderly adults.',
    whenToVisit: 'For annual check-ups, common illnesses like colds and flu, managing chronic conditions, or any non-emergency health concern.',
  },
  {
    name: 'Cardiology',
    icon: HeartPulse,
    shortDescription: 'Expert care for your heart health.',
    description: 'We specialize in diagnosing and treating diseases of the cardiovascular system, including the heart and blood vessels. We focus on prevention, diagnosis, and treatment of heart conditions.',
    forWhom: 'Adults with or at risk of heart disease, high blood pressure, or high cholesterol.',
    whenToVisit: 'If you experience chest pain, shortness of breath, palpitations, or have a family history of heart disease.',
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    shortDescription: 'Caring for your little ones from birth to adolescence.',
    description: 'Our pediatricians manage the health of your child, including physical, behavioral, and mental health issues. They are trained to diagnose and treat childhood illnesses, from minor health problems to serious diseases.',
    forWhom: 'Infants, children, and adolescents.',
    whenToVisit: 'For regular well-child check-ups, vaccinations, and when your child is sick.',
  },
  {
    name: 'Preventive Care',
    icon: Shield,
    shortDescription: 'Proactive healthcare to prevent future problems.',
    description: 'Preventive care helps detect or prevent serious diseases and medical problems before they can become major. Annual check-ups, screenings, and immunizations are a cornerstone of our practice.',
    forWhom: 'All patients, regardless of age or health status.',
    whenToVisit: 'Annually for a comprehensive check-up and to stay up-to-date on recommended screenings and vaccinations.',
  },
  {
    name: 'Sports Medicine',
    icon: Activity,
    shortDescription: 'Specialized care for athletes and active individuals.',
    description: 'Our sports medicine specialists are dedicated to treating injuries related to sports and exercise, as well as providing guidance on prevention and performance enhancement.',
    forWhom: 'Athletes of all levels and anyone with an active lifestyle.',
    whenToVisit: 'For sprains, strains, fractures, or advice on safe exercise practices.',
  },
  {
    name: 'Family Medicine',
    icon: Users,
    shortDescription: 'Holistic healthcare for the entire family.',
    description: 'Family medicine is a specialty devoted to comprehensive health care for people of all ages. Our doctors provide a full spectrum of care, from preventive services to chronic disease management.',
    forWhom: 'Individuals and families of all ages.',
    whenToVisit: 'For any health concerns for any member of your family.',
  },
];

// Doctors
export const doctors: Doctor[] = [
  {
    name: 'Dr. Aarav Sharma',
    specialization: 'General Physician',
    experience: '15+ years of experience in family medicine and primary care.',
    philosophy: 'I believe in a holistic approach to medicine, treating the person as a whole, not just the illness. Building a strong doctor-patient relationship is key to effective care.',
    languages: ['English', 'Hindi', 'Telugu'],
    imageId: '2',
  },
  {
    name: 'Dr. Priya Reddy',
    specialization: 'Pediatrician',
    experience: '12 years of dedicated pediatric care, from newborns to teenagers.',
    philosophy: 'My goal is to create a comfortable and friendly environment for children. I partner with parents to ensure their child grows up healthy and happy.',
    languages: ['English', 'Telugu'],
    imageId: '3',
  },
  {
    name: 'Dr. Vikram Singh',
    specialization: 'Cardiologist',
    experience: '20+ years specializing in cardiovascular diseases and preventive cardiology.',
    philosophy: 'Heart health is central to overall well-being. I am committed to using the latest evidence-based practices to prevent and treat heart conditions, empowering patients through education.',
    languages: ['English', 'Hindi'],
    imageId: '4',
  },
];

// Patient Reviews
export const reviews: Review[] = [
  {
    author: 'Sunita K.',
    rating: 5,
    quote: 'The doctors at Atlas Health are incredibly patient and thorough. They took the time to listen to all my concerns and explained everything clearly. I felt truly cared for.',
  },
  {
    author: 'Rajesh P.',
    rating: 5,
    quote: 'A very clean and professional clinic. The staff is friendly and efficient. Wait times are minimal, and Dr. Sharma is one of the best physicians I have ever met.',
  },
  {
    author: 'Anjali M.',
    rating: 5,
    quote: 'I took my daughter to see Dr. Priya Reddy, and she was amazing with her. She made my child feel at ease and was very knowledgeable. Highly recommend this clinic for families.',
  },
  {
    author: 'Sameer V.',
    rating: 5,
    quote: 'The care and attention to detail here are outstanding. They focus on not just treatment but also on preventive measures. The follow-up care is also excellent.',
  },
  {
    author: 'Fatima B.',
    rating: 5,
    quote: 'Finding a good clinic in Hyderabad was tough, but I am so glad I found Atlas. Ethical, transparent, and genuinely caring. The entire experience was positive.',
  },
  {
    author: 'Amit G.',
    rating: 5,
    quote: 'From booking an appointment to the consultation, everything was seamless. The front desk is helpful, and the facilities are modern and well-maintained.',
  },
];

// FAQs
export const faqItems: FaqItem[] = [
  {
    question: 'Do I need an appointment?',
    answer: 'While we do accept walk-ins, we highly recommend booking an appointment to minimize your waiting time. You can call us at 094949 50458 to schedule your visit.',
  },
  {
    question: 'What are the clinic hours?',
    answer: 'We are open every day of the week, from 9:00 AM to 10:00 PM, to ensure we are available for you when you need us.',
  },
  {
    question: 'Do you accept walk-in patients?',
    answer: 'Yes, we do accommodate walk-in patients. However, priority is given to patients with prior appointments. We appreciate your patience if there is a short wait.',
  },
  {
    question: 'Where are you located?',
    answer: 'Our clinic is conveniently located in Begumpet, Hyderabad, Telangana. You can find a map and detailed directions on our Contact Us page.',
  },
  {
    question: 'What types of payment do you accept?',
    answer: 'We accept cash, all major credit and debit cards, and popular UPI payment methods for your convenience.',
  },
  {
    question: 'What should I bring for my first appointment?',
    answer: 'For your first visit, please bring a valid photo ID, any previous medical records or test results, and a list of any medications you are currently taking.',
  },
];
