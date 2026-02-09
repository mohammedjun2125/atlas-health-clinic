import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string | ReactNode;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-accent">
      <div className="container mx-auto px-4 py-16 text-center md:py-20">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <div className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </div>
      </div>
    </section>
  );
}
