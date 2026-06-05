import { Link } from 'react-router-dom';
import { ProjectCard } from '../molecules/ProjectCard';
import { Button } from '../atoms/Button';
import { projects } from '../../data';

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const byYearDesc = [...projects].sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0'));

export function ProjectsSection({ limit = 6, showViewAll = true }: ProjectsSectionProps) {
  const displayed = byYearDesc.slice(0, limit);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-dark text-sm font-bold tracking-[0.2em] uppercase mb-1">
            My Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary">
            Last Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link to="/portfolio">
              <Button variant="secondary" size="lg">
                <GridIcon />
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function GridIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
