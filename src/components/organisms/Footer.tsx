import { NavLink } from '../molecules/NavLink';
import { SocialIcon } from '../molecules/SocialIcon';
import { navItems, footerSocials } from '../../data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} footer>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {footerSocials.map((s) => (
              <SocialIcon key={s.platform} platform={s.platform} url={s.url} label={s.label} dark size="sm" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/70 text-xs">
          <p>© {year} Willy Lara Campos. All rights reserved.</p>
          <p>
            Developed by Willy Lara Campos
          </p>
        </div>
      </div>
    </footer>
  );
}

