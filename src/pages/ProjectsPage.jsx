import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Canteen Website",
      description:
        "A Swiggy-inspired web application for college canteens with online ordering and admin management.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/projects/canteen.png",
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and contact information with smooth animations.",
      tech: ["React.js", "Tailwind CSS", "GSAP", "Vite.js"],
      image: "/projects/portfolio.png",
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description:
        "An online shopping platform with product listings, cart, and payment integration.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      image: "/projects/ecommerce.png",
      live: "#",
      github: "#",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(cardsRef.current).forEach((card, idx) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: idx * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // clean up animations on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 md:px-20 py-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-[#00ADB5]">Projects</span>
        </h1>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
          A showcase of my work, highlighting creativity, coding skills, and
          modern web development.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-52 md:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#00ADB5]/20 text-[#00ADB5] text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00ADB5] px-4 py-2 rounded-md text-gray-950 font-medium hover:bg-[#009CA3] transition-colors duration-300"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#00ADB5] px-4 py-2 rounded-md text-[#00ADB5] font-medium hover:bg-[#00ADB5] hover:text-gray-950 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
