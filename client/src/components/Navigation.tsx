// Navigation — Juris Ledger
// Transparent on hero, transitions to solid teal on scroll
// Dropdown menus for Services, Industries, Locations, About
// Parent nav items navigate to their page AND open the dropdown
// Every link scrolls to top of the destination page
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_ITEMS, FIRM } from "@/lib/siteData";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus and scroll to top on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = location === "/";

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#075c5b]/98 backdrop-blur-md shadow-[0_2px_24px_rgba(7,92,91,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" onClick={handleNavLinkClick} className="flex items-center gap-3 group">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src="/manus-storage/jl-logo-mark_2ec4061a.png"
                  alt="Juris Ledger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-['Cormorant_Garamond'] font-600 text-white leading-none tracking-wide text-xl">
                  JURIS LEDGER
                </span>
                <span className="block text-[0.6rem] font-['DM_Sans'] tracking-[0.12em] uppercase text-white/60 leading-none mt-0.5">
                  Accountants
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {/* Parent item: navigates to its href AND shows dropdown on hover */}
                    <Link
                      href={item.href!}
                      onClick={handleNavLinkClick}
                      className="flex items-center gap-1 px-3 py-2 text-white/85 hover:text-white text-sm font-['DM_Sans'] font-500 tracking-wide transition-colors duration-150"
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl border border-[#e6e0da] rounded-sm overflow-hidden z-50"
                        style={{ animation: "dropdownIn 0.18s cubic-bezier(0.23,1,0.32,1) forwards" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={handleNavLinkClick}
                            className="block px-5 py-3 text-sm text-[#2a2825] hover:bg-[#f8f7f5] hover:text-[#075c5b] hover:pl-6 font-['DM_Sans'] transition-all duration-150 border-b border-[#e6e0da]/50 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={handleNavLinkClick}
                    className="px-3 py-2 text-white/85 hover:text-white text-sm font-['DM_Sans'] font-500 tracking-wide transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${FIRM.phone}`}
                className="flex items-center gap-1.5 text-white/75 hover:text-white text-sm font-['DM_Sans'] transition-colors duration-150"
              >
                <Phone size={13} />
                {FIRM.phone}
              </a>
              <Link
                href="/contact"
                onClick={handleNavLinkClick}
                className="jl-btn-lime text-xs px-4 py-2.5"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#075c5b] pt-16 overflow-y-auto">
          <div className="px-5 py-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="flex items-center border-b border-white/10">
                      {/* Parent label navigates to its page */}
                      <Link
                        href={item.href!}
                        onClick={handleNavLinkClick}
                        className="flex-1 px-2 py-3 text-white font-['DM_Sans'] font-500 text-base"
                      >
                        {item.label}
                      </Link>
                      {/* Chevron toggles the sub-items */}
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        className="px-3 py-3 text-white/70"
                        aria-label={`Expand ${item.label}`}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 py-1 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={handleNavLinkClick}
                            className="block px-2 py-2 text-white/75 hover:text-white font-['DM_Sans'] text-sm"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={handleNavLinkClick}
                    className="block px-2 py-3 text-white font-['DM_Sans'] font-500 text-base border-b border-white/10"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3">
              <a
                href={`tel:${FIRM.phone}`}
                className="flex items-center gap-2 text-white/80 font-['DM_Sans'] text-sm"
              >
                <Phone size={14} />
                {FIRM.phone}
              </a>
              <Link
                href="/contact"
                onClick={handleNavLinkClick}
                className="jl-btn-lime w-full text-center block"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
