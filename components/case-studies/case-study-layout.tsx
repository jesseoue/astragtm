import { ReactNode } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CaseStudyLayoutProps {
  companyName: string;
  companyLogoUrl: string;
  title: string;
  description: string;
  stats: Stat[];
  imageUrl: string;
  children: ReactNode;
}

export function CaseStudyLayout({
  companyName,
  companyLogoUrl,
  title,
  description,
  stats,
  imageUrl,
  children
}: CaseStudyLayoutProps) {
  return (
    <div className="section-bg-primary text-star-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="flex items-center gap-2 text-star-white/70 hover:text-electric-blue transition-colors">
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </div>
        
        <header className="mb-12 text-center">
          <Image src={companyLogoUrl} alt={`${companyName} Logo`} width={120} height={40} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-electric-blue to-purple-400">{title}</h1>
          <p className="text-xl text-star-white/80 max-w-3xl mx-auto">{description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-electric-blue mb-2">{stat.value}</div>
              <div className="text-star-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <Image src={imageUrl} alt={title} width={1200} height={600} className="rounded-lg shadow-2xl shadow-electric-blue/10" />
        </div>

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto">
          {children}
        </article>
      </div>
    </div>
  );
} 