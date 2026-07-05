import { Github, Linkedin, Mail, Send } from "lucide-react";
import { PRODUCT_INFO } from "@/shared/constants/data";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: PRODUCT_INFO.socials.github, label: "GitHub" },
    { icon: Linkedin, href: PRODUCT_INFO.socials.linkedin, label: "LinkedIn" },
    { icon: Send, href: PRODUCT_INFO.socials.telegram, label: "Telegram" },
    {
      icon: Mail,
      href: `mailto:${PRODUCT_INFO.contact.email}`,
      label: "Email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-1 border-t border-white/5 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-text-1">{"<ST />"}</h3>
            <p className="text-sm text-gray-400 mt-1">Frontend Dasturchi</p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background-2 hover:bg-text-1/20 text-gray-400 hover:text-text-1 transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Samandar Turgunboyev. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
