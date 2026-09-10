import type { ReactElement } from "react";
import { footerColumns, site, socialLinks } from "@/data/site";

// lucide-react no longer ships brand marks, so these are minimal,
// original line-icon glyphs standing in for each platform.
function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8.5" r="1.15" fill="currentColor" />
      <path d="M8 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 17v-3.5c0-1.38 1-2.5 2.25-2.5S16.5 12.12 16.5 13.5V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" />
    </svg>
  );
}

const socialIcons: Record<string, () => ReactElement> = {
  LinkedIn: LinkedInGlyph,
  Instagram: InstagramGlyph,
  YouTube: YouTubeGlyph,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-display text-xl text-white">{site.name}</p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-stone/55">
              {site.tagline}. Responsible mineral resources development
              across Indonesia.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-body text-sm font-medium text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-stone/60 transition-colors hover:text-stone"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-stone/45">
            © 2026 {site.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone/55 transition-colors hover:text-white"
                >
                  {Icon ? <Icon /> : social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
