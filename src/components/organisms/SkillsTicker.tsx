import { skills } from '../../data';

export function SkillsTicker() {
  const doubled = [...skills, ...skills];

  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <div
        className="flex items-center gap-8 w-max animate-ticker"
        style={{ willChange: 'transform' }}
      >
        {doubled.map((skill, i) => (
          <div key={`${skill}-${i}`} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-heading text-dark text-sm font-medium tracking-wide whitespace-nowrap">
              {skill}
            </span>
            <StarSeparator />
          </div>
        ))}
      </div>
    </div>
  );
}

function StarSeparator() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-dark/40 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}
