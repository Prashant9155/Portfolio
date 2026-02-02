import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, Instagram, Phone, MapPin, ExternalLink, Heart } from "lucide-react";

export default function ContactSocials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prashantsin2gh@gmail.com",
      href: "mailto:prashantsin2gh@gmail.com",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 91557 29247",
      href: "https://wa.me/919155729247",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prashantkumar-sde",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800"
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/Prashant9155",
      color: "hover:bg-gray-50 dark:hover:bg-gray-900/20 hover:border-gray-200 dark:hover:border-gray-800"
    },
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/",
      color: "hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-200 dark:hover:border-pink-800"
    }
  ];

  return (
    <div className={`space-y-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
        {contactInfo.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${item.color}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="shrink-0">
              <item.icon size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  className="text-gray-900 dark:text-white hover:underline font-medium transition-colors duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">{item.value}</span>
              )}
            </div>
            {item.href && item.href.startsWith('http') && (
              <ExternalLink size={16} className="text-gray-400" />
            )}
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
        <div className="grid grid-cols-1 gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className={`group flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${link.color}`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="shrink-0">
                <link.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {link.label}
              </span>
              <ExternalLink size={16} className="ml-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>

      {/* Fun Note */}
      <div className="mt-8 p-6 rounded-xl bg-linear-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200 dark:border-pink-800 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Fun Fact</h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          When I'm not coding, you'll find me exploring new coffee shops or working on side projects that push my creative boundaries!
        </p>
      </div>
    </div>
  );
}
