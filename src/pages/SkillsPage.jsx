import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsPage() {
  const containerRef = useRef(null);

  const frontEndSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Vite.js",
    "Tailwind CSS",
    "Bootstrap",
    "GSAP / Framer Motion",
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Firebase",
    "Git & GitHub",
  ];

  const tools = [
    { label: "Version Control", items: "Git, GitHub" },
    { label: "API Testing", items: "Postman" },
    { label: "Package Managers", items: "npm" },
    { label: "Development Environment", items: "VS Code" },
    { label: "Database", items: "MongoDB, Mongoose" },
    { label: "Authentication", items: "JWT" },
    { label: "Hosting & Deployment", items: "Vercel, Netlify" },
  ];

  const softSkills = [
    "Problem-Solving",
    "Communication",
    "Team Collaboration",
    "Creativity",
    "Time Management",
    "Adaptability",
    "Continuous Learning",
  ];

  const learning = [
    "Advanced React & Next.js",
    "Backend Development (Node.js, Express)",
    "GSAP & Framer Motion for complex animations",
    "Improving my UI/UX design workflow",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section Titles Animation
      gsap.utils.toArray(".section-title").forEach((el) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );

      // Skill Cards Animation (Front & Back End)
      gsap.utils.toArray(".skill-card").forEach((el) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8, y: 20 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "linear",
            stagger: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );

      // Tools Cards
      gsap.fromTo(
        ".tool-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".tool-card",
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Soft Skills Chips
      gsap.utils.toArray(".soft-chip").forEach((el) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );

      // Learning Items
      gsap.utils.toArray(".learning-item").forEach((el) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: -30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );
    }, containerRef);

    return () => ctx.revert(); // cleanup animations on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-950 text-gray-200 px-6 md:px-20 pt-16 pb-8"
    >
      {/* Header */}
      <div className="text-center mb-12 header">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-[#00ADB5]">Skills</span>
        </h1>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
          Skilled in front-end and back-end development using modern web
          technologies.
        </p>
      </div>

      {/* Technical Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6 text-center">
          Technical Skills
        </h2>

        {/* Front-End */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-300 mb-4 text-center">
            Front-End
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {frontEndSkills.map((skill) => (
              <div
                key={skill}
                className="skill-card flex items-center justify-center bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg hover:bg-[#00ADB5]/10 transition-all duration-300"
              >
                <span className="font-medium text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back-End */}
        <div>
          <h3 className="text-xl font-medium text-gray-300 mb-4 text-center">
            Back-End
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {backEndSkills.map((skill) => (
              <div
                key={skill}
                className="skill-card flex items-center justify-center bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg hover:bg-[#00ADB5]/10 transition-all duration-300"
              >
                <span className="font-medium text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6 text-center section-title">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map(({ label, items }) => (
            <div
              key={label}
              className="tool-card flex items-start gap-2 bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-[#00ADB5] font-semibold">{label}:</span>
              <span className="text-gray-300">{items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6 text-center section-title">
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="soft-chip bg-[#00ADB5]/20 text-[#00ADB5] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Learning */}
      <section>
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4 text-center section-title">
          Currently Learning & Exploring
        </h2>
        <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
          I’m constantly upgrading my skills to stay up-to-date with modern
          technologies. Currently, I’m focusing on:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 max-w-3xl mx-auto space-y-1">
          {learning.map((item) => (
            <li key={item} className="learning-item">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
