import React from "react";

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "BUILD INDIA GREATER FOUNDATION",
      duration: "Oct 2023 - Aug 2025",
      description:
        "Updated and maintained websites, improved layouts, implemented small design and animation enhancements, and optimized existing features while coordinating with clients and external developers.",
    },
    {
      id: 2,
      role: "Full Stack Developer (Internship)",
      company: "Luminar Technolab, Kochi",
      duration: "Jan 2023 - Jun 2023",
      description:
        "Developed multiple projects including e-commerce websites using React, Node.js, MongoDB, and Tailwind CSS. Implemented APIs, authentication, and responsive design.",
    },
    {
      id: 3,
      role: "Web Developer (Student Projects)",
      company: "College & Peer Support",
      description:
        "Voluntarily designed and developed websites for fellow students’ college projects and personal portfolios, focusing on frontend development, UI/UX design, and modern web functionalities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 md:px-20 py-16">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-[#00ADB5]">Experience</span>
        </h1>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
          A journey of learning, working, and growing as a web developer.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="relative">
        <div className="border-l border-[#00ADB5]/50 absolute h-full left-4 md:left-6"></div>
        <div className="flex flex-col gap-12 ml-8 md:ml-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline Dot */}
              <div className="w-4 h-4 bg-[#00ADB5] rounded-full absolute -left-6 md:-left-8 top-2"></div>

              {/* Experience Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#00ADB5] mb-1">
                  {exp.role}
                </h3>
                <span className="text-gray-400 text-sm mb-2 block">
                  {exp.company} {exp.duration ? "•" : ""} {exp.duration}
                </span>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6 text-center">
          Key Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Updated and improved existing websites with design and animation
            enhancements.
          </li>
          <li>
            Optimized web layouts and features for better usability and
            performance.
          </li>
          <li>
            Developed websites for student projects and personal portfolios.
          </li>
          <li>
            Gained experience collaborating with clients and external
            developers.
          </li>
        </ul>
      </section>
    </div>
  );
}
