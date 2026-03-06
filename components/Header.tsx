'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Forside' },
  { href: '/wordpress-hosting', label: 'WordPress' },
  { href: '/vps-hosting', label: 'VPS' },
  { href: '/cloud-hosting', label: 'Cloud' },
  {
    label: 'Anmeldelser',
    children: [
      { href: '/one-com-anmeldelse', label: 'One.com' },
      { href: '/surftown-anmeldelse', label: 'Surftown' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { href: '/guide/hvad-er-hosting', label: 'Hvad er hosting?' },
      { href: '/guide/shared-vs-vps', label: 'Shared vs VPS' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-indigo-400 transition-colors">
            <Server className="w-6 h-6 text-indigo-400" />
            HostingTjek
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                    className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                  >
                    {link.label} ▾
                  </button>
                  {dropdown === link.label && (
                    <div
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className="absolute top-full left-0 mt-1 w-44 rounded-xl border border-slate-700 shadow-xl py-1"
                      style={{ backgroundColor: '#1e293b' }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <Link
            href="/#sammenlign"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}
          >
            Sammenlign hosting
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-700 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
