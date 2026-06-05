import { useState } from 'react';
import { TestimonialCard } from '../molecules/TestimonialCard';
import { testimonials } from '../../data';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-primary-light">
      <div className="mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-dark text-sm font-bold tracking-[0.2em] uppercase mb-1">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary">
            What Are People Saying About My Work?
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              className={[
                'cursor-pointer transition-all duration-300',
                active === i ? 'scale-[1.02]' : 'opacity-80',
              ].join(' ')}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={[
                'rounded-full transition-all duration-300',
                active === i
                  ? 'w-6 h-3 bg-primary'
                  : 'w-3 h-3 bg-primary/30 hover:bg-primary/60',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
