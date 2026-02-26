"use client";

import { useState, useEffect } from "react";

export function RikbaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "For Drivers", href: "#drivers" },
    { label: "Safety", href: "#safety" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--brand)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 2Z" fill="white" opacity="0.3"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
                <path d="M12 8v2M12 14v2M8 12h2M14 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                color: scrolled ? "var(--brand-navy)" : "white",
              }}
            >
              Rikba
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#drivers"
              className="text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "DM Sans, sans-serif",
                borderColor: scrolled ? "var(--brand)" : "white",
                color: scrolled ? "var(--brand)" : "white",
              }}
            >
              Drive with Rikba
            </a>
            <a
              href="#waitlist"
              className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "DM Sans, sans-serif",
                background: "var(--brand)",
                boxShadow: "0 4px 14px rgba(0,102,255,0.35)",
              }}
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-0.5 w-full rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ background: scrolled ? "var(--brand-navy)" : "white" }}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : "w-full"
                }`}
                style={{ background: scrolled ? "var(--brand-navy)" : "white" }}
              />
              <span
                className={`block h-0.5 w-full rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ background: scrolled ? "var(--brand-navy)" : "white" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-96 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium py-1 border-b border-gray-50 last:border-0"
              style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-primary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#drivers"
              onClick={() => setMenuOpen(false)}
              className="text-center text-sm font-semibold px-4 py-2.5 rounded-full border-2"
              style={{ borderColor: "var(--brand)", color: "var(--brand)" }}
            >
              Drive with Rikba
            </a>
            <a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              className="text-center text-sm font-semibold px-5 py-2.5 rounded-full text-white"
              style={{ background: "var(--brand)" }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
