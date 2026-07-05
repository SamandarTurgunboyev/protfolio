"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/assets/icons";
import { PRODUCT_INFO } from "@/shared/constants/data";
import { cn } from "@/shared/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "#projects", label: "Loyihalar", isAnchor: true },
];

const socialLinks = [
  {
    href: PRODUCT_INFO.socials.telegram,
    icon: <TelegramIcon size={24} color="#12F7D6" />,
  },
  {
    href: PRODUCT_INFO.socials.github,
    icon: <GithubIcon size={24} color="#12F7D6" />,
  },
  {
    href: PRODUCT_INFO.socials.instagram,
    icon: <InstagramIcon size={24} color="#12F7D6" />,
  },
  {
    href: PRODUCT_INFO.socials.linkedin,
    icon: <LinkedinIcon size={24} color="#12F7D6" />,
  },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-background-1 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between h-20 px-6 lg:px-16">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl text-text-1 font-semibold">{"<ST />"}</h1>
          <p className="text-xl text-white font-semibold hidden sm:block">
            Samandar Turgunboyev
          </p>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isAnchor ? (
                  <a
                    href={link.href}
                    className="text-lg text-white font-normal hover:text-text-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "text-lg text-white font-normal hover:text-text-1 transition-colors",
                      isActive(link.href) && "text-text-1",
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-70 transition-opacity"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background-1 border-t border-white/5 px-6 py-4 space-y-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isAnchor ? (
                  <a
                    href={link.href}
                    className="block text-lg text-white hover:text-text-1 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "block text-lg text-white hover:text-text-1 transition-colors",
                      isActive(link.href) && "text-text-1",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-3 pt-2">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
