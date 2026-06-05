import { useParams, Link, useNavigate } from 'react-router-dom';
import { Badge } from '../components/atoms/Badge';
import { Button } from '../components/atoms/Button';
import { projects } from '../data';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const sorted  = [...projects].sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0'));
  const index   = sorted.findIndex((p) => p.id === id);
  const project = sorted[index];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <p className="font-heading text-7xl text-primary-light">404</p>
        <h1 className="font-heading text-3xl text-dark">Project not found</h1>
        <Link to="/portfolio">
          <Button variant="outline">← Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  const prev = sorted[index - 1] ?? null;
  const next = sorted[index + 1] ?? null;

  return (
    <article>

      {/* ── Hero ── */}
      <div
        className="relative text-white py-20 px-6 md:px-12"
        style={{ backgroundColor: project.bgColor }}
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm
                     mb-8 transition-colors duration-200"
        >
          <ChevronLeftIcon />
          Back to Portfolio
        </button>

        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat) => (
              <Badge key={cat} variant="secondary">{cat}</Badge>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-6">
            {project.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/70 text-sm">
            {project.year     && <MetaItem label="Year"     value={project.year}     />}
            {project.role     && <MetaItem label="Role"     value={project.role}     />}
            {project.duration && <MetaItem label="Duration" value={project.duration} />}
            {project.client   && <MetaItem label="Client"   value={project.client}   />}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16">

        {/* Overview + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-body leading-relaxed text-base">{project.overview}</p>
          </div>

          <aside className="bg-surface-alt rounded-2xl p-6 flex flex-col gap-4 h-fit">
            <p className="font-heading text-dark text-sm uppercase tracking-widest">Details</p>
            {project.year     && <DetailRow label="Year"     value={project.year}     />}
            {project.role     && <DetailRow label="Role"     value={project.role}     />}
            {project.duration && <DetailRow label="Duration" value={project.duration} />}
            {project.client   && <DetailRow label="Client"   value={project.client}   />}

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium
                               hover:text-primary-dark transition-colors duration-200"
                  >
                    <ExternalLinkIcon /> View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium
                               hover:text-primary-dark transition-colors duration-200"
                  >
                    <GitHubIcon /> View on GitHub
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* Challenge */}
        {project.challenge && <ContentSection label="The Challenge" body={project.challenge} accent />}

        {/* Solution */}
        {project.solution && <ContentSection label="The Solution" body={project.solution} />}

        {/* Project image */}
        {project.image && (
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Results */}
        {project.results && (
        <div className="flex flex-col gap-6">
          <SectionLabel>Results</SectionLabel>
          <ul className="flex flex-col gap-3">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary-light flex items-center
                                 justify-center flex-shrink-0">
                  <CheckIcon />
                </span>
                <span className="text-body leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        )}

        {/* Technologies */}
        {project.technologies && (
        <div className="flex flex-col gap-6">
          <SectionLabel>Technologies Used</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border text-dark text-sm
                           font-medium bg-white hover:bg-primary-light hover:border-primary
                           transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        )}

      </div>

      {/* ── Project navigation ── */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/portfolio/${prev.id}`}
              className="group flex flex-col gap-1 p-4 rounded-xl hover:bg-surface-alt
                         transition-colors duration-200"
            >
              <span className="text-xs text-body uppercase tracking-wider flex items-center gap-1">
                <ChevronLeftIcon /> Previous
              </span>
              <span className="font-heading text-dark text-base group-hover:text-primary
                               transition-colors duration-200">
                {prev.title}
              </span>
              <span className="text-body text-xs">{prev.categories.join(', ')}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/portfolio/${next.id}`}
              className="group flex flex-col gap-1 p-4 rounded-xl hover:bg-surface-alt
                         transition-colors duration-200 text-right ml-auto w-full"
            >
              <span className="text-xs text-body uppercase tracking-wider flex items-center
                               justify-end gap-1">
                Next <ChevronRightIcon />
              </span>
              <span className="font-heading text-dark text-base group-hover:text-primary
                               transition-colors duration-200">
                {next.title}
              </span>
              <span className="text-body text-xs">{next.categories.join(', ')}</span>
            </Link>
          ) : <div />}
        </div>
      </div>

    </article>
  );
}

/* ── Small helpers ── */

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 rounded-full bg-primary" />
      <h2 className="font-heading text-xl text-dark">{children}</h2>
    </div>
  );
}

function ContentSection({ label, body, accent = false }: { label: string; body: string; accent?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl p-8 ${accent ? 'bg-primary-light' : 'bg-surface-alt'}`}>
      <SectionLabel>{label}</SectionLabel>
      <p className="text-body leading-relaxed">{body}</p>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-white/50 uppercase text-[10px] tracking-widest block">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-body text-xs uppercase tracking-wider">{label}</span>
      <span className="text-dark text-sm font-medium">{value}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
               0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
               -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
               .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
               -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
               c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
               .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
               0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
