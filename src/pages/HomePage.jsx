import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../public/images/IMG_3236.png";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { SiGithub, SiInstagram, SiLeetcode, SiLinkedin } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const buttonsRef = useRef([]);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GSAP",
    "Vite.js",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations (only h1 + intro-text + links)
      const heroElements =
        heroRef.current.querySelectorAll("h1, .intro-text, a");
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "linear",
          immediateRender: true, // 👈 fixes flicker
        }
      );

      const heroSocialLinks =
        heroRef.current.querySelectorAll(".heroSocialLinks");
      gsap.fromTo(
        heroSocialLinks,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "linear",
          immediateRender: true,
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector("img"),
        { opacity: 0, scale: 0.8, rotate: 10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.4,
          ease: "linear",
          delay: 0.3,
          immediateRender: true,
        }
      );

      // Section Titles Fade-in
      gsap.utils.toArray("section h2").forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "linear",
            scrollTrigger: {
              trigger: title,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
            immediateRender: true,
          }
        );
      });

      // Paragraphs Fade-in
      gsap.utils.toArray("section p").forEach((para) => {
        gsap.fromTo(
          para,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "linear",
            scrollTrigger: {
              trigger: para,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
            immediateRender: true,
          }
        );
      });

      // Buttons Pop-in
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "linear",
          scrollTrigger: {
            trigger: buttonsRef.current[0],
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
          immediateRender: true,
        }
      );

      // Skills Grid Animation
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.querySelectorAll("div"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "linear",
            stagger: 0.1,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
            immediateRender: true,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col-reverse md:flex-row items-center justify-between  md:px-20 py-20 overflow-hidden box-border xl:px-[10%]"
        ref={heroRef}
      >
        {/* Hero Text */}
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-[#00ADB5]">Aravindh Raj</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg intro-text">
            Full Stack Developer & Creative Coder building interactive, modern,
            and scalable web applications with smooth UI/UX and animations.
          </p>
          <div className="flex space-x-4 mt-6 text-center">
            <Link
              to="/projects"
              className="bg-[#00ADB5] hover:bg-[#009CA3] px-6 py-3 rounded-md font-medium transition-colors duration-300 w-36"
            >
              View Details
            </Link>
            <Link
              to="/resume"
              className="border border-gray-500 hover:border-[#00ADB5] px-6 py-3 rounded-md font-medium transition-colors duration-300 w-36"
            >
              Hire Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 bottom-20 mt-10">
            <div>
              <SiGithub
                className="w-6 h-6 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300 heroSocialLinks"
                onClick={() =>
                  window.open("https://github.com/AKAAravindh", "_blank")
                }
              />
              <p>GitHub</p>
            </div>
            <div>
              <SiLinkedin
                className="w-6 h-6 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300 heroSocialLinks"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/its-aravindh/",
                    "_blank"
                  )
                }
              />
              <p>LinkedIn</p>
            </div>
            <div>
              <SiLeetcode
                className="w-6 h-6 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300 heroSocialLinks"
                onClick={() =>
                  window.open("https://leetcode.com/u/AKAAravindh/", "_blank")
                }
              />
              <p>LeetCode</p>
            </div>
            <div>
              <SiInstagram
                className="w-6 h-6 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300 heroSocialLinks"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/its_aravindh_raj/",
                    "_blank"
                  )
                }
              />
              <p>Instagram</p>
            </div>
            <div>
              <FaEnvelope
                className="w-6 h-6 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300 heroSocialLinks"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=aravindhraj206@gmail.com&body=Type%20your%20message%20here%20and%20I'll%20get%20back%20to%20you.",
                    "_blank"
                  )
                }
              />
              <p>Mail</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative w-full flex justify-center items-center mb-12 md:mb-0">
          <div className="w-120 aspect-square overflow-hidden relative shadow-2xl cursor-pointer">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover rounded-[25%]"
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#00ADB5]">About Me</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          I am a Full Stack Developer with expertise in frontend and backend
          technologies, building interactive and modern web applications. I
          enjoy working on responsive designs, animations, and immersive user
          experiences.
        </p>
        <Link
          to="/about"
          className="bg-[#00ADB5] hover:bg-[#009CA3] px-6 py-3 rounded-md font-medium transition-colors duration-300 btn"
          ref={(el) => (buttonsRef.current[2] = el)}
        >
          Learn More
        </Link>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-6 md:px-20 text-center" ref={skillsRef}>
        <h2 className="text-3xl font-bold text-[#00ADB5] mb-4">Skills</h2>
        <p className="text-gray-400 mb-8">
          A blend of front-end and back-end technologies I frequently work with.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-gray-800 rounded-md text-sm text-gray-200 hover:bg-[#00ADB5]/10 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 px-6 md:px-20 bg-gray-900 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#00ADB5]">Experience</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Designed, maintained, and fine-tuned websites and web projects.
          Focused on frontend design improvements, animations, and interactive
          features.
        </p>
        <Link
          to="/experience"
          className="bg-[#00ADB5] hover:bg-[#009CA3] px-6 py-3 rounded-md font-medium transition-colors duration-300 btn"
          ref={(el) => (buttonsRef.current[3] = el)}
        >
          View Details
        </Link>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#00ADB5] mb-4">
          Let’s Work Together
        </h2>
        <p className="text-gray-400 mb-6">
          Interested in collaborating or hiring me for your next project?
        </p>
        <Link
          to="/contact"
          className="bg-[#00ADB5] hover:bg-[#009CA3] px-6 py-3 rounded-md font-medium transition-colors duration-300 btn"
          ref={(el) => (buttonsRef.current[4] = el)}
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
}
