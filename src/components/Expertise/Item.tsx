import Link from 'next/link';
import { getServicePaths } from './Paths';
import { ArrowUpRight } from 'lucide-react';

interface ExpertiseItemProps {
  iconSlug: string;
  title: string;
  description: string;
  delay: number;
  slug: string;
  image?: string;
}

const ExpertiseItem = ({ iconSlug, title, description, delay, slug, image }: ExpertiseItemProps) => {
  const PATHS = getServicePaths();
  const path = PATHS[iconSlug as keyof typeof PATHS];

  return (
    <Link
      href={`/service/${slug}`}
      className="group relative h-[380px] md:h-[450px] overflow-hidden rounded-[24px] md:rounded-[40px] block bg-white border border-transparent hover:border-soft-pink hover:shadow-2xl transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image - Always Visible, Full Color */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-100 transition-transform duration-700 ease-soft group-hover:scale-105"
          />
          {/* Subtle Gradient for Text Readability Only */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-30 h-full flex flex-col justify-between p-8 md:p-10">

        {/* Top: Icon */}
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-all duration-500">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {path}
            </svg>
          </div>

          <div className="w-10 h-10 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Bottom: Text */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-medium text-black mb-4 leading-none tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-black/80 font-medium leading-relaxed line-clamp-2 font-sans">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExpertiseItem;
