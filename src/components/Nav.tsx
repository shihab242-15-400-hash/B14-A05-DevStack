import { useState } from "react";
import logoImg from "../assets/logo-text.png";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Left: Hamburger Menu Icon */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Brand Logo: Left on desktop, Center on mobile */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-initial">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".logo-fallback");
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
              <div className="logo-fallback hidden items-center gap-2">
                <span className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-sm shadow-sm">
                  DS
                </span>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Dev <span className="brand-gradient-text">Stack</span>
                </span>
              </div>
            </a>
          </div>

          {/* Center Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-semibold text-[#E11D74] transition-colors"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons: Sign In & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="px-3 sm:px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="px-4 sm:px-5 py-2 text-sm font-semibold text-white brand-gradient rounded-full shadow-sm hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden py-4 border-t border-slate-100 bg-white"
          >
            <div className="flex flex-col gap-2 px-2">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#E11D74] bg-pink-50"
              >
                Home
              </a>
              <a
                href="#technologies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Technologies
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Projects
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
