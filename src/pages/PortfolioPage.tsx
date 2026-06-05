import { useState } from 'react';
import { ProjectCard } from '../components/molecules/ProjectCard';
import { Badge } from '../components/atoms/Badge';
import { projects } from '../data';

const byYearDesc = [...projects].sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0'));
const categories = ['All', ...Array.from(new Set(byYearDesc.flatMap((p) => p.categories)))];

export function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const displayed = filter === 'All' ? byYearDesc : byYearDesc.filter((p) => p.categories.includes(filter));

  return (
    <div className="min-h-screen bg-white">

      {/* Page hero */}
      <div
        className="relative py-25 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/headers/my-work.png')" }}
      >
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10">
          <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            My Work
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Portfolio
          </h1>
          <p className="text-white/70 max-w-md mx-auto px-6 md:px-12">
            A selection of projects spanning web development, UI/UX design,
            branding, and mobile applications.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={[
                  'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-primary-light text-primary hover:bg-primary/20',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="mx-auto px-6 md:px-12 py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-body text-sm">
            Showing <span className="text-dark font-semibold">{displayed.length}</span> projects
          </p>
          {filter !== 'All' && (
            <Badge variant="primary">{filter}</Badge>
          )}
        </div>

        {displayed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-body">
            <p className="text-4xl mb-4">🗂️</p>
            <p className="font-heading text-xl text-dark mb-2">No projects found</p>
            <p className="text-sm">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
