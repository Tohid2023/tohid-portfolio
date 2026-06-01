import { Code2, Lightbulb, Rocket, User } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintabable , scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "optimizing for speed and delevering lightning-fast user experiences.",
  },
  {
    icon: User,
    title: "Collaboration",
    description: "Working closely with team to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-64 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left section */}
          <div className="space-y-8">
            <div className="uppercase text-sm text-secondary-foreground font-medium tracking-tight ">
              <span>About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Build the future,{" "}
              <span className="text-white font-serif italic font-normal">
                {" "}
                One project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate MERN Stack Developer focused on building
                modern, responsive, and user-friendly web applications. I enjoy
                turning ideas into real projects using React, Tailwind CSS,
                Node.js, Express, and MongoDB.
              </p>
              <p>
                Currently, I’m sharpening my full stack skills, building
                impactful projects, and preparing for professional opportunities
                in the tech industry.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="font-medium text-lg italic text-foreground">
                "My mission is to build meaningful digital products and
                continuously grow as a developer."
              </p>
            </div>
          </div>

          {/* right section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
