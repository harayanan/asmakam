import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  currentPath: string;
}

export default function MobileNav({ links, currentPath }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-forest focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-sand z-50">
          <nav className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-6 py-3 font-body text-base transition-colors ${
                  currentPath === link.href
                    ? 'text-forest font-semibold bg-sand'
                    : 'text-text-primary hover:text-forest hover:bg-sand/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
