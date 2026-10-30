"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/admin", label: "Admin" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[78px] max-w-[1120px] items-center justify-between gap-3 px-[clamp(1.25rem,5vw,3rem)]">
        <Link className="flex items-center gap-[0.65rem] no-underline" href="/">
          <span className="grid size-9 place-items-center rounded-[9px] bg-gradient-to-br from-ember-2 to-ember">
            <svg
              className="size-[18px] fill-[var(--on-ember)]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 .5 2 1.5 2.5 2 1.5-.5-2 0-4.5 1-6.5z" />
            </svg>
          </span>
          <b className="font-serif text-[1.3rem] font-semibold">{site.name}</b>
        </Link>

        <nav
          className="hidden gap-8 text-[0.95rem] font-semibold md:flex"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`border-b-2 px-0 py-[0.4rem] text-muted no-underline transition-colors hover:border-ember hover:text-ink ${pathname === l.href ? "border-ember text-ink" : "border-transparent"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line bg-card p-2 text-ink transition hover:border-ember md:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-br from-ember-3 to-ember-2 px-[1.1rem] py-[0.55rem] text-[0.78rem] font-bold tracking-[0.04em] text-[var(--on-ember)] uppercase no-underline shadow-[0_18px_32px_-20px_rgba(220,160,102,0.8)] transition hover:-translate-y-0.5 hover:brightness-105"
            href="/reservations"
          >
            Reserve a table
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col px-[clamp(1.25rem,5vw,3rem)] py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`rounded-xl px-3 py-3 text-base font-semibold no-underline transition ${pathname === l.href ? "bg-ember/10 text-ink" : "text-muted hover:bg-card hover:text-ink"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
