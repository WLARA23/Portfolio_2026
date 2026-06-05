import type { SocialPlatform } from '../../types';

interface SocialIconProps {
  platform: SocialPlatform;
  url: string;
  label: string;
  dark?: boolean;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export function SocialIcon({ platform, url, label, dark = false, showLabel = false, size = 'md' }: SocialIconProps) {
  const sizeClass = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize  = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        sizeClass,
        'rounded-full flex items-center justify-center transition-all duration-200',
        dark
          ? 'bg-white/10 text-white hover:bg-white hover:text-primary'
          : 'bg-primary-light text-primary hover:bg-primary hover:text-white',
      ].join(' ')}
    >
      <PlatformSvg platform={platform} className={iconSize} />
      {showLabel && <span className="ml-2 text-sm">{label}</span>}
    </a>
  );
}

interface ContactInfoItemProps {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export function ContactInfoItem({ platform, label, url }: ContactInfoItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group"
    >
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0
                      group-hover:bg-primary-dark transition-colors duration-200">
        <PlatformSvg platform={platform} className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-xs text-body uppercase tracking-wide font-medium">
          {platformDisplayName(platform)}
        </p>
        <p className="text-sm text-dark font-medium group-hover:text-primary transition-colors duration-200">
          {label}
        </p>
      </div>
    </a>
  );
}

function platformDisplayName(platform: SocialPlatform): string {
  const names: Record<SocialPlatform, string> = {
    github:    'GitHub',
    linkedin:  'LinkedIn',
    twitter:   'Twitter / X',
    instagram: 'Instagram',
    whatsapp:  'WhatsApp',
    email:     'Email',
    behance:   'Behance',
  };
  return names[platform];
}

function PlatformSvg({ platform, className }: { platform: SocialPlatform; className: string }) {
  switch (platform) {
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case 'email':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      );
    case 'behance':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.16 1.35-.49.36-1.06.61-1.71.75-.65.15-1.32.22-2.03.22H0V4.50h6.938zm-.41 5.44c.59 0 1.07-.14 1.44-.44.37-.3.55-.75.55-1.36 0-.33-.06-.6-.18-.82-.12-.21-.3-.38-.51-.5-.21-.12-.45-.2-.72-.24-.27-.04-.55-.06-.84-.06H3.5v3.42h3.03zm.19 5.68c.32 0 .62-.03.9-.09s.53-.17.74-.33c.21-.17.38-.39.5-.67.12-.28.19-.63.19-1.04 0-.82-.22-1.4-.67-1.72-.45-.32-1.04-.48-1.78-.48H3.5v4.33h3.22zm10.48.02c.4.39.98.58 1.73.58.54 0 1-.13 1.4-.4.4-.27.64-.56.73-.86h2.54c-.41 1.27-1.03 2.18-1.87 2.72-.84.54-1.86.81-3.06.81-.83 0-1.58-.13-2.24-.4-.66-.27-1.22-.65-1.67-1.14-.45-.49-.8-1.08-1.04-1.76-.24-.68-.36-1.43-.36-2.25 0-.8.12-1.54.37-2.21.25-.68.6-1.26 1.05-1.75.45-.49 1-.87 1.66-1.14.65-.27 1.38-.41 2.18-.41.9 0 1.68.17 2.35.52.67.35 1.22.82 1.65 1.4.43.58.74 1.25.93 2 .19.75.26 1.54.2 2.37h-7.57c0 .83.28 1.57.68 1.96zm3.03-5.27c-.32-.35-.82-.53-1.5-.53-.44 0-.81.07-1.1.22-.29.15-.53.33-.71.56-.18.22-.31.46-.38.72-.07.26-.11.5-.13.73h4.42c-.1-.74-.28-1.35-.6-1.7zm-4.7-5.02h5.47v1.36h-5.47V5.35z" />
        </svg>
      );
  }
}
