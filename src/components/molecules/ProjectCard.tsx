import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/portfolio/${project.id}`} className="block">
    <article className="group relative overflow-hidden rounded-2xl cursor-pointer">
      {/* Card background */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: project.bgColor }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="font-heading text-7xl text-white/20 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Always-visible title strip */}
      <div className="bg-[#F5EEFF] px-4 py-3 flex items-center justify-between group-hover:bg-primary-light transition-colors duration-300">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-heading text-dark text-sm font-medium">{project.title}</p>
            {project.year && (
              <span className="text-[10px] text-body font-medium">{project.year}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.categories.map((cat) => (
              <span key={cat} className="text-[10px] bg-primary-light text-primary px-2 py-0.5 rounded-full">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-primary-light group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
          <ArrowIcon className="text-primary group-hover:text-white" />
        </div>
      </div>
    </article>
    </Link>
  );
}

function ArrowIcon({ className = 'text-primary' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-3.5 h-3.5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
