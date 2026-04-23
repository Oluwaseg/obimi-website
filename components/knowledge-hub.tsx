import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';

/**
 * Knowledge Hub Preview Section
 * Built with Next.js and Tailwind CSS v4
 *
 * Design Concept:
 * - Clean, modern card-based layout with high readability.
 * - Subtle hover effects and clear CTAs.
 * - Focus on "Expertise" and "Clarity".
 */

const articles = [
  {
    title: 'Annual Reviews of EHCPs: What Parents Need to Know',
    excerpt:
      "A comprehensive guide to preparing for and navigating the annual review process for your child's EHCP.",
    category: 'Education',
    readTime: '8 min read',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Education, Health and Care Plans (EHCPs): A Step-by-Step Guide',
    excerpt:
      'Everything you need to know about the EHCP process, from initial application to final plan.',
    category: 'Guidance',
    readTime: '12 min read',
    color: 'bg-accent/20 text-accent-foreground',
  },
  {
    title: 'Understanding the SEN Support System',
    excerpt:
      'Navigating the complex world of Special Educational Needs support in schools and local authorities.',
    category: 'Support',
    readTime: '6 min read',
    color: 'bg-secondary/30 text-secondary-foreground',
  },
];

const KnowledgeHub = () => {
  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/20 relative overflow-hidden'>
      <div className='container mx-auto relative z-10'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
          <div className='max-w-2xl space-y-4'>
            <div className='inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
              <BookOpen className='w-4 h-4' />
              <span>Knowledge Hub</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              Resources & Guidance
            </h2>
            <p className='text-xl text-muted-foreground font-sans'>
              Explore practical guides and insights to help you navigate your
              journey.
            </p>
          </div>

          <button className='group flex items-center gap-2 text-lg font-heading font-bold text-primary hover:text-primary/80 transition-colors'>
            <span>View All Resources</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>

        {/* Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article, index) => (
            <div
              key={index}
              className='group relative bg-background rounded-[2.5rem] p-8 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between overflow-hidden'
            >
              {/* Hover Background Accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700' />

              <div className='space-y-6 relative z-10'>
                <div className='flex items-center justify-between'>
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider ${article.color}`}
                  >
                    {article.category}
                  </span>
                  <div className='flex items-center gap-1 text-muted-foreground text-xs font-sans'>
                    <Clock className='w-3 h-3' />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className='text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-tight'>
                  {article.title}
                </h3>

                <p className='text-muted-foreground font-sans leading-relaxed'>
                  {article.excerpt}
                </p>
              </div>

              <div className='mt-8 pt-6 border-t border-border/50 relative z-10'>
                <button className='flex items-center gap-2 text-sm font-bold font-heading text-foreground group-hover:text-primary transition-colors'>
                  Read Full Article
                  <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className='mt-20 p-8 rounded-[3rem] bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20'>
              <Sparkles className='w-6 h-6 text-white' />
            </div>
            <div>
              <h4 className='text-xl font-heading font-bold text-foreground'>
                Need specific advice?
              </h4>
              <p className='text-muted-foreground font-sans'>
                Our experts are here to help you with personalized guidance.
              </p>
            </div>
          </div>
          <button className='px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1'>
            Contact an Expert
          </button>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2' />
    </section>
  );
};

export default KnowledgeHub;
