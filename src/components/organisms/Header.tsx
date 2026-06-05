import { useState } from 'react';
import { NavLink } from '../molecules/NavLink';
import { navItems } from '../../data';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-8">

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-full flex items-center justify-center
                       text-dark hover:bg-primary-light transition-all duration-200"
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/WLARA23"
            target='_blank'
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="mailto:willy.lara@softcial.com"
            target='_blank'
            aria-label="Email"
          >
            <MailIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/willylaracampos/"
            target='_blank'
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="mx-auto px-6 md:px-12 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3.5C15.1615 3.5 13.341 3.87111 11.6424 4.59214C9.94387 5.31318 8.40053 6.37001 7.1005 7.70231C4.475 10.393 3 14.0424 3 17.8476C3 24.1892 7.018 29.5695 12.576 31.4778C13.276 31.5926 13.5 31.1478 13.5 30.7604V28.3357C9.622 29.1965 8.796 26.4131 8.796 26.4131C8.152 24.7488 7.242 24.304 7.242 24.304C5.968 23.4144 7.34 23.4431 7.34 23.4431C8.74 23.5436 9.482 24.9209 9.482 24.9209C10.7 27.1018 12.758 26.4561 13.556 26.1118C13.682 25.1792 14.046 24.5479 14.438 24.1892C11.33 23.8305 8.068 22.5966 8.068 17.1302C8.068 15.5376 8.6 14.2607 9.51 13.242C9.37 12.8833 8.88 11.3912 9.65 9.45424C9.65 9.45424 10.826 9.06686 13.5 10.9177C14.606 10.6021 15.81 10.4442 17 10.4442C18.19 10.4442 19.394 10.6021 20.5 10.9177C23.174 9.06686 24.35 9.45424 24.35 9.45424C25.12 11.3912 24.63 12.8833 24.49 13.242C25.4 14.2607 25.932 15.5376 25.932 17.1302C25.932 22.611 22.656 23.8162 19.534 24.1749C20.038 24.6196 20.5 25.4948 20.5 26.8292V30.7604C20.5 31.1478 20.724 31.6069 21.438 31.4778C26.996 29.5552 31 24.1892 31 17.8476C31 15.9634 30.6379 14.0977 29.9343 12.357C29.2307 10.6163 28.1995 9.0346 26.8995 7.70231C25.5995 6.37001 24.0561 5.31318 22.3576 4.59214C20.659 3.87111 18.8385 3.5 17 3.5Z" fill="#895CE4" />
    </svg>

  );
}

function MailIcon() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.9 11.5L17.5 19L5.1 11.5V8.5L17.5 16L29.9 8.5M29.9 5.5H5.1C3.3795 5.5 2 6.835 2 8.5V26.5C2 27.2956 2.32661 28.0587 2.90797 28.6213C3.48933 29.1839 4.27783 29.5 5.1 29.5H29.9C30.7222 29.5 31.5107 29.1839 32.092 28.6213C32.6734 28.0587 33 27.2956 33 26.5V8.5C33 7.70435 32.6734 6.94129 32.092 6.37868C31.5107 5.81607 30.7222 5.5 29.9 5.5Z" fill="#895CE4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z" fill="#895CE4" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
