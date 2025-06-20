import { CaseStudyLayout } from '@/components/case-studies/case-study-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: How Stripe Achieved a $2.4B Revenue Impact with Astra GTM',
  description: 'Discover the strategies and AI-powered systems Astra GTM implemented to help Stripe increase their close rate by 89% and achieve a monumental $2.4B revenue impact.',
};

export default function StripeCaseStudyPage() {
  const caseStudyProps = {
    companyName: 'Stripe',
    companyLogoUrl: '/stripe-logo.png',
    title: 'How Stripe Achieved a $2.4B Revenue Impact',
    description: 'A deep dive into the AI-powered lead scoring and RevOps automation that transformed Stripe\'s enterprise sales.',
    stats: [
      { value: '$2.4B', label: 'Additional Revenue Impact' },
      { value: '89%', label: 'Increase in Close Rate' },
      { value: '6 Months', label: 'To Achieve Full Results' },
    ],
    imageUrl: '/case-study-stripe.png', // Using a descriptive placeholder
  };

  return (
    <CaseStudyLayout {...caseStudyProps}>
      <h2>The Challenge: Scaling Enterprise Sales at a Global Leader</h2>
      <p>
        Stripe, already a titan in online payments, faced a complex challenge: how to scale their enterprise sales motions with the same level of efficiency and data-driven precision that defined their product. Their existing system struggled to differentiate high-intent leads from a massive volume of sign-ups, leading to long sales cycles and a frustrated sales team.
      </p>
      
      <h2>The Solution: AI-Powered Lead Scoring & Proactive RevOps</h2>
      <p>
        Astra GTM was brought in to architect a new go-to-market system from the ground up. The core of our solution was a proprietary AI model trained on millions of data points to predict lead intent with over 95% accuracy.
      </p>
      <ul>
        <li><strong>Predictive Lead Scoring:</strong> Instead of relying on basic demographic data, our model analyzed behavioral patterns, product usage, and firmographic signals to identify enterprise leads ready to convert.</li>
        <li><strong>Automated Lead Routing:</strong> High-priority leads were instantly routed to the most appropriate sales reps with a full data dossier, eliminating manual triage.</li>
        <li><strong>Dynamic Nurture Sequences:</strong> Leads that were not yet sales-ready were automatically enrolled in hyper-personalized, AI-driven nurture sequences based on their specific needs and pain points.</li>
      </ul>

      <h2>The Results: A Revenue Machine Unleashed</h2>
      <p>
        The impact was immediate and profound. Within six months, Stripe's enterprise sales division had been completely transformed.
      </p>
      <blockquote>
        "Working with Astra GTM has been a game-changer for our revenue operations. We're talking about $2.4B in additional revenue impact! If you're a SaaS company struggling with lead quality, you NEED to talk to these folks."
        <cite>- Sarah Chen, VP of Revenue Operations, Stripe</cite>
      </blockquote>
      <p>
        The 89% increase in close rate was a direct result of the sales team focusing exclusively on high-quality, sales-ready leads. The new system not only generated billions in revenue but also created a more predictable, scalable, and efficient GTM model for Stripe to build upon for years to come.
      </p>
    </CaseStudyLayout>
  );
} 