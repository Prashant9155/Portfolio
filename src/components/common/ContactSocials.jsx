import { Mail, Linkedin, Github, Instagram, Phone, MapPin } from "lucide-react";

export default function ContactSocials() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <Mail size={18} />
          <a href="mailto:prashantsin2gh@gmail.com" className="hover:underline">
            prashantsin2gh@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} />
          <a href="https://wa.me/919155729247" target="_blank">
            +91 91557 29247 (WhatsApp)
          </a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span>Bengaluru, India</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 max-w-sm">
        {[
          { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/prashantkumar-sde" },
          { label: "GitHub", icon: Github, href: "https://github.com/Prashant9155" },
          { label: "WhatsApp", icon: Phone, href: "https://wa.me/919155729247" },
          { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
        ].map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition"
          >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
