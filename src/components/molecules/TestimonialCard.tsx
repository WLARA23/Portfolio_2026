import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4
                        hover:shadow-md transition-shadow duration-300 h-[stretch]">
      <QuoteIcon />
      <p className="text-body text-sm leading-relaxed flex-1">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-primary text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-dark text-sm">{testimonial.name}</p>
          <p className="text-body text-xs">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </article>
  );
}

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-primary opacity-60"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368z" />
    </svg>
  );
}
