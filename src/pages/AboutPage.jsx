import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "GSAP",
    "Vite.js",
  ];

  const journeyRef = useRef([]);
  const skillsRef = useRef([]);
  const sectionRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Journey Cards
      journeyRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate Skills
      gsap.fromTo(
        skillsRef.current,
        { autoAlpha: 0, y: 30, scale: 0.8 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current[0],
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate Sections
      sectionRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // cleanup animations on unmount
  }, []);

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      {/* Introduction Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-[#00ADB5]">Me</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Hi, I’m <span className="font-semibold">Aravindh Raj</span>, a
          passionate Full-Stack Developer building modern, responsive, and
          interactive web applications.
        </p>
      </section>

      {/* Journey & Timeline */}
      <section className="py-8 pb-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#00ADB5] mb-12 text-center">
          My Journey
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-[#00ADB5]/30"></div>

          {[
            {
              date: "2019–2022",
              role: "BCA, MG University",
              desc: "Graduated with a degree in Computer Applications.",
            },
            {
              date: "2023",
              role: "MERN Full Stack Web Development",
              desc: "Completed a 6-month program at Luminar Technolab, Kochi.",
            },
            {
              date: "2023–2025",
              role: "Web Developer",
              desc: "Maintained and enhanced websites, improving layouts, animations, and interactivity while collaborating with clients and developers to deliver high-quality web solutions.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 mb-12 relative pl-12"
              ref={(el) => (journeyRef.current[idx] = el)}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-3 w-4 h-4 bg-[#00ADB5] rounded-full border-2 border-gray-950"></div>

              {/* Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full">
                <p className="text-[#00ADB5] font-semibold mb-2">{item.date}</p>
                <h3 className="text-2xl font-bold text-gray-200 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section
        className="py-16 px-6 md:px-20 text-center border-t border-gray-800"
        ref={(el) => sectionRef.current.push(el)}
      >
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-8">
          Skills & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {skills.map((skill, idx) => (
            <div
              key={skill}
              ref={(el) => (skillsRef.current[idx] = el)}
              className="px-4 py-2 bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium hover:text-[#00ADB5]"
            >
              {skill}
            </div>
          ))}
        </div>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Full-stack development expertise, building responsive, modern, and
          interactive web applications.
        </p>
      </section>

      {/* Experience & Achievements */}
      <section
        className="py-16 px-6 md:px-20 bg-gray-900 text-center"
        ref={(el) => sectionRef.current.push(el)}
      >
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6">
          Experience
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Gained hands-on experience improving website layouts, animations, and
          interactivity. Delivered high-quality web solutions while
          collaborating effectively with clients and developers.
        </p>
      </section>

      {/* Personal Side */}
      <section
        className="py-16 px-6 md:px-20 text-center"
        ref={(el) => sectionRef.current.push(el)}
      >
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6">
          Beyond Code
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Outside coding, I enjoy playing Valorant and BGMI, exploring new tech
          trends, participating in hackathons, and sharing knowledge with
          others.
        </p>
      </section>
    </div>
  );
}
