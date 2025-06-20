import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Astra GTM',
  description: 'Insights, strategies, and deep dives into SaaS growth, marketing, and sales from the Astra GTM team.',
};

// Dummy data for blog posts - this would typically come from a CMS
const blogPosts = [
  {
    slug: 'the-definitive-guide-to-saas-pricing',
    title: 'The Definitive Guide to SaaS Pricing Strategies in 2025',
    description: 'Explore the pros and cons of value-based, competitor-based, and cost-plus pricing models to find the perfect fit for your SaaS business.',
    author: 'Lisa Park, Pricing Strategist',
    date: 'January 22, 2025',
    tags: ['Pricing', 'Strategy', 'Revenue'],
    readTime: '15 min read',
  },
  {
    slug: 'ai-in-revops',
    title: 'Beyond the Hype: Practical AI Applications in RevOps',
    description: 'Move past the buzzwords. We break down 3 practical ways you can implement AI in your revenue operations today to see a measurable lift in efficiency.',
    author: 'Dr. Emily Zhang, AI Strategist',
    date: 'January 18, 2025',
    tags: ['AI', 'RevOps', 'Automation'],
    readTime: '12 min read',
  },
  {
    slug: 'decoding-product-led-growth',
    title: 'Decoding Product-Led Growth: Is It Right for Your B2B SaaS?',
    description: 'A comprehensive checklist and framework to determine if a product-led growth model is the right move for your company, and how to implement it.',
    author: 'Alex Chen, Head of Growth',
    date: 'January 15, 2025',
    tags: ['PLG', 'Growth', 'Strategy'],
    readTime: '20 min read',
  }
];

export default function BlogPage() {
  return (
    <div className="section-bg-primary text-star-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-electric-blue to-purple-400">Astra GTM Blog</h1>
          <p className="text-xl text-star-white/80 max-w-3xl mx-auto">Insights, strategies, and deep dives into SaaS growth, marketing, and sales from the Astra GTM team.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-electric-blue/50 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/10">
              <CardHeader className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => <Badge key={tag} variant="outline" className="border-electric-blue/30 text-electric-blue">{tag}</Badge>)}
                </div>
                <CardTitle className="text-2xl font-bold text-star-white mb-3 group-hover:text-electric-blue transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-star-white/70">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center justify-between text-sm text-star-white/60">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center mt-4 font-semibold text-electric-blue">
                  Read More
                  <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 