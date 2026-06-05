import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: string;
  onClick?: () => void;
  dark?: boolean;
  footer?: boolean;
}

export function NavLink({ to, children, onClick, dark = false, footer = false }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => [
        'relative text-sm font-medium tracking-wider transition-colors duration-200 font-heading',
        'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full',
        'after:origin-left after:scale-x-0 after:transition-transform after:duration-200',
        footer
            ? 'text-[#D5B4FF] hover:text-[#ffffff] after:hover:scale-x-100 after:bg-primary'
            : isActive
              ? 'text-primary after:scale-x-100 after:bg-primary'
                : dark
                  ? 'text-white/70 hover:text-white after:hover:scale-x-100 after:bg-white'
                  : 'text-[#D5B4FF] hover:text-primary after:hover:scale-x-100 after:bg-primary',
      ].join(' ')}
    >
      {children}
    </RouterNavLink>
  );
}
