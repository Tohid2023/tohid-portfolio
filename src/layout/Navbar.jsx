// import React from "react";
// import { Button } from "../components/Button";
// import { Menu , X} from "lucide-react";
// import { useState, useEffect } from "react";

// const Navbar = () => {

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navLinks = [
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#education", label: "Academic Journey" },
//     // { href: "#testimonials", label: "Testimonials" },
//   ];

  

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
//         isScrolled ? "glass-strong py-2" : "bg-transparent py-4"
//       }  z-50`}>
//       <nav className="container mx-auto px-6 items-center justify-between flex">
//         <a
//           href=""
//           className="text-xl font-bold tracking-tight hover:text-primary"
//         >
//           TOHID <span className="text-primary">.</span>
//         </a>

//         {/* Desktop view */}
//         <div className="hidden md:flex items-center gap-1">
//           <div className="flex gap-1 items-center glass px-2 py-1  rounded-full">
//             {navLinks.map((link, index) => (
//               <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>
        
//         <div className="hidden md:block">
//           <a href="#contact"><Button size="sm">Contact</Button></a>
//         </div>

//         {/* menu icon */}
//         <button className="cursor-pointer md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
//           {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/> }
//         </button>
//       </nav>

//       {/* mobile menu */}
//       {isMobileMenuOpen && (
//       <div className="glass-strong mx-auto py-2 animate-fade-in">
//         <div className="container flex flex-col gap-3 mx-auto px-4 py-4">
//           {navLinks.map((link, index) => (
//               <a onClick={() => setIsMobileMenuOpen(false)} key={index} href={link.href} className="text-md text-muted-foreground hover:text-foreground px-2 py-3 ">
//                 {link.label}
//               </a>
//             ))}
//             <Button onClick={() => setIsMobileMenuOpen(false)} asChild>
//               <a href="#contact">Contact</a>
//             </Button>
//         </div>
//       </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Academic Journey" }
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-2" : "bg-transparent py-4"
      } z-50`}
    >
      <nav className="container mx-auto px-6 items-center justify-between flex">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          TOHID <span className="text-primary">.</span>
        </a>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex gap-1 items-center glass px-2 py-1 rounded-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact</Button>
          </a>
        </div>

        {/* menu icon */}
        <button
          className="cursor-pointer md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="glass-strong mx-auto py-2 animate-fade-in">
          <div className="container flex flex-col gap-3 mx-auto px-4 py-4">
            {navLinks.map((link, index) => (
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                key={index}
                href={link.href}
                className="text-md text-muted-foreground hover:text-foreground px-2 py-3"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Contact</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;