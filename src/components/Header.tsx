"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/admin", label: "Admin" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link className="brand" href="/">
          <span className="mark">
            <svg viewBox="0 0 24 24">
              <path d="M12 2c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 .5 2 1.5 2.5 2 1.5-.5-2 0-4.5 1-6.5z" />
            </svg>
          </span>
          <b>{site.name}</b>
        </Link>
        <nav className="hdr-nav" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "true" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="btn primary small" href="/reservations">
          Reserve a table
        </Link>
      </div>
    </header>
  );
}
