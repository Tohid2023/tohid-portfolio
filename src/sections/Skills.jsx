// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";

// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiVercel,
//   SiPostman,
// } from "react-icons/si";

// import { VscVscode } from "react-icons/vsc";

// const skillGroups = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React.js", icon: FaReact },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "JavaScript", icon: FaJs },
//       { name: "HTML5", icon: FaHtml5 },
//       { name: "CSS3", icon: FaCss3Alt },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", icon: FaNodeJs },
//       { name: "Express.js", icon: SiExpress },
//       { name: "MongoDB", icon: SiMongodb },
//       { name: "REST APIs", icon: FaNodeJs },
//     ],
//   },
//   {
//     title: "Tools",
//     skills: [
//       { name: "Git", icon: FaGitAlt },
//       { name: "GitHub", icon: FaGithub },
//       { name: "Vercel", icon: SiVercel },
//       { name: "Postman", icon: SiPostman },
//       { name: "VS Code", icon: VscVscode },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-32 relative overflow-hidden">
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//             Skills
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
//             Technologies I use to{" "}
//             <span className="font-serif italic font-normal text-white">
//               build products.
//             </span>
//           </h2>

//           <p className="text-muted-foreground">
//             My core tech stack for building modern, responsive, and scalable web
//             applications.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {skillGroups.map((group, index) => (
//             <div
//               key={group.title}
//               className="glass rounded-3xl p-6 border border-primary/20 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
//               style={{ animationDelay: `${(index + 1) * 120}ms` }}
//             >
//               <h3 className="text-xl font-semibold mb-6 text-foreground">
//                 {group.title}
//               </h3>

//               <div className="space-y-4">
//                 {group.skills.map((skill) => {
//                   const Icon = skill.icon;

//                   return (
//                     <div
//                       key={`${group.title}-${skill.name}`}
//                       className="flex items-center gap-4 p-4 rounded-2xl bg-surface/60 border border-border hover:border-primary/40 hover:bg-primary/10 transition-all group"
//                     >
//                       <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
//                         <Icon className="w-5 h-5" />
//                       </div>

//                       <span className="font-medium text-muted-foreground group-hover:text-white transition-colors">
//                         {skill.name}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: FaNodeJs },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

const orbitSkills = [
  { name: "React", icon: FaReact },
  { name: "Node", icon: FaNodeJs },
  { name: "Mongo", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Technologies I use to{" "}
            <span className="font-serif italic font-normal text-white">
              build products.
            </span>
          </h2>

          <p className="text-muted-foreground">
            My core tech stack for building modern, responsive, and scalable web
            applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          {/* Left: Skill Cards */}
          <div className="space-y-6">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="glass rounded-3xl p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 120}ms` }}
              >
                <h3 className="text-xl font-semibold mb-5 text-foreground">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={`${group.title}-${skill.name}`}
                        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-surface/70 border border-border hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 transition-all"
                      >
                        <Icon className="text-lg text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: MERN Sphere */}
          <div className="relative flex items-center justify-center min-h-[460px]">
            <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute w-72 h-72 rounded-full border border-primary/20 timeline-glow" />
            <div className="absolute w-56 h-56 rounded-full border border-primary/10" />

            {/* Orbit Wrapper */}
<div className="relative flex items-center justify-center w-80 h-80">
  {/* Rotating Icons Only */}
  <div className="absolute inset-0 rounded-full animate-spin-slow">
    {orbitSkills.map((skill, index) => {
      const Icon = skill.icon;
      const angle = (360 / orbitSkills.length) * index;

      return (
        <div
          key={skill.name}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
          }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2 animate-spin-reverse">
            <div className="w-20 h-20 rounded-full glass flex flex-col items-center justify-center gap-1 border border-primary/30 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <Icon className="text-2xl text-primary" />
              <span className="text-[11px] text-muted-foreground">
                {skill.name}
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Static Center */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-44 h-44 rounded-full glass-strong glow-border border border-primary/30 flex flex-col items-center justify-center text-center px-6">
      <h3 className="text-3xl font-bold text-primary">MERN</h3>
      <p className="text-sm text-muted-foreground mt-2">
        Full Stack Developer
      </p>
    </div>
  </div>
</div>

            <div className="absolute bottom-4 text-center">
              <p className="text-sm text-muted-foreground">
                Frontend + Backend + Database
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;