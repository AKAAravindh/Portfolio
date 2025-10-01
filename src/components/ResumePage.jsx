import React from "react";
import { ArrowDownToLine } from "lucide-react"; // icon (optional)

// Make sure you put your resume in `public/` folder (e.g., public/resume.pdf)
const resumeFile = "/files/Aravindh_Raj_WebDeveloper_Resume.pdf.pdf";

export default function ResumePage() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen px-6 md:px-20 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-[#00ADB5]">Resume</span>
        </h1>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          Download my resume or view it directly below.
        </p>
      </section>

      {/* Download Button */}
      <div className="flex justify-center mb-10">
        <a
          href={resumeFile}
          download="Aravindh_Raj_WebDeveloper_Resume.pdf.pdf"
          className="flex items-center gap-2 bg-[#00ADB5] hover:bg-[#009CA3] px-6 py-3 rounded-md font-medium text-gray-950 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          <ArrowDownToLine size={20} />
          Download Resume
        </a>
      </div>

      {/* Resume Preview */}
      <div className="w-full max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-800">
        <embed
          src={resumeFile}
          type="application/pdf"
          className="w-full h-[80vh]"
        />
      </div>
    </div>
  );
}
