import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    courses: [
      { label: 'Open Water', href: '#courses' },
      { label: 'Advanced Diving', href: '#courses' },
      { label: 'Rescue Diver', href: '#courses' },
      { label: 'Dive Master', href: '#courses' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#booking' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Dive Sites', href: '#experiences' },
      { label: 'Safety Guide', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  };

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0a0e27] border-t border-white/10">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent mb-4">
                AQUA DIVE
              </h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                Your gateway to extraordinary underwater adventures. Certified training, premium equipment, and unforgettable experiences.
              </p>
            </motion.div>

            <div className="space-y-3">
              <a href="mailto:info@aquadive.com" className="flex items-center gap-3 text-white/70 hover:text-[#00d4ff] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d4ff]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@aquadive.com</span>
              </a>
              <a href="tel:+971501234567" className="flex items-center gap-3 text-white/70 hover:text-[#00d4ff] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d4ff]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+971 50 123 4567</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Dubai Marina, UAE</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all group"
                  whileHover={{ y: -4 }}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-[#00d4ff] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {links.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Aqua Dive. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
