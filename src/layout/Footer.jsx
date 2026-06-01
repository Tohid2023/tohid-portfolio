// import { Heart } from "lucide-react";
// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// const socialLinks = [
//   { icon: FaGithub, href: "https://github.com/Tohid2023", label: "GitHub" },
//   { icon: FaLinkedin, href: "https://www.linkedin.com/in/tohid-ladman-754450301", label: "LinkedIn" },
//   { icon: FaXTwitter, href: "#", label: "Twitter" },
// ];

// const footerLinks = [
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Projects" },
//   { href: "#education", label: "Academic Journey" },
// //   { href: "#contact", label: "Contact" },
// ];

// export const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="py-12 border-t border-border">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Logo & Copyright */}
//           <div className="text-center md:text-left">
//             <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
//               TOHID<span className="text-primary">.</span>
//             </a>
//             <p className="text-sm text-muted-foreground mt-2">
//               © {currentYear} TOHID LADMAN. All rights reserved.
//             </p>
//           </div>

//           {/* Links */}
//           <nav className="flex flex-wrap justify-center gap-6">
//             {footerLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 aria-label={social.label}
//                 className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
//               >
//                 <social.icon className="w-5 h-5" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// import { FaGithub, FaLinkedin } from "react-icons/fa6";
// import { Mail, ArrowUp } from "lucide-react";

// export const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="relative border-t border-border bg-background py-10">
//       <div className="container mx-auto px-6">
//         {/* Top Footer */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Brand */}
//           <div className="text-center md:text-left">
//             <h3 className="text-2xl font-bold text-foreground">
//               Tohid<span className="text-primary">.</span>
//             </h3>

//             <p className="text-sm text-muted-foreground mt-2">
//               MERN Stack Developer building modern web experiences.
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             <a
//               href="https://github.com/YOUR_USERNAME"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
//             >
//               <FaGithub className="w-5 h-5" />
//             </a>

//             <a
//               href="https://linkedin.com/in/YOUR_USERNAME"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
//             >
//               <FaLinkedin className="w-5 h-5" />
//             </a>

//             <a
//               href="mailto:tohidladman76@gmail.com"
//               className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>

//           {/* Scroll Top */}
//           <button
//             onClick={scrollToTop}
//             className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all"
//           >
//             <ArrowUp className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Bottom Footer */}
//         <div className="mt-8 pt-6 border-t border-border text-center">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Tohid Ladman. All rights reserved.
//           </p>

//           <p className="text-xs text-muted-foreground mt-2">
//             Built with React, Tailwind CSS & Vite.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Tohid2023", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/tohid-ladman-754450301",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Academic Journey" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Let’s build{" "}
            <span className="text-primary font-serif italic font-normal">
              something amazing.
            </span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Open to internships, freelance work and collaborations.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              TOHID<span className="text-primary">.</span>
            </button>

            <p className="text-sm text-muted-foreground mt-2">
              MERN Stack Developer building modern web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:-translate-y-1 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tohid Ladman. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground mt-2">
            Built with React, Tailwind CSS & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};