import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  const contactClicked = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-[#222831] text-[#EEEEEE] border-t border-gray-700 py-16 px-6 mt-8">
      {/* Call to Action */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
          Interested in collaborating?
        </h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out if you want to work together on your next
          project.
        </p>
        <Link
          to={"/contact"}
          onClick={contactClicked}
          className="bg-[#00ADB5] px-6 py-3 rounded-md text-[#222831] font-medium hover:bg-[#009CA3] transition-colors duration-300"
        >
          Contact Me
        </Link>
      </section>

      {/* Social Links */}
      <section className="text-center mb-12">
        <h3 className="text-xl font-semibold text-[#00ADB5] mb-6">
          Find Me Online
        </h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            {
              icon: (
                <FaGithub className="w-8 h-8 text-gray-200 hover:text-[#00ADB5] transition-colors duration-300" />
              ),
              label: "GitHub",
              sub: "github.com/AKAAravindh",
              link: "https://github.com/AKAAravindh",
            },
            {
              icon: (
                <FaLinkedin className="w-8 h-8 text-[#0A66C2] hover:text-[#00ADB5] transition-colors duration-300" />
              ),
              label: "LinkedIn",
              sub: "linkedin.com/in/akaaravindh",
              link: "https://www.linkedin.com/in/akaaravindh/",
            },
            {
              icon: (
                <FaInstagram className="w-8 h-8 text-pink-500 hover:text-[#00ADB5] transition-colors duration-300" />
              ),
              label: "Instagram",
              sub: "@its_aravindh_raj",
              link: "https://www.instagram.com/its_aravindh_raj/",
            },
            {
              icon: (
                <FaEnvelope className="w-8 h-8 text-red-500 hover:text-[#00ADB5] transition-colors duration-300" />
              ),
              label: "Email",
              sub: "aravindhraj206@gmail.com",
              link: "mailto:aravindhraj206@gmail.com",
            },
            {
              icon: (
                <SiNetlify className="w-8 h-8 text-[#00C8D8] hover:text-[#00ADB5] transition-colors duration-300" />
              ),
              label: "Portfolio",
              sub: "netlify.com/akaaravindh",
              link: "https://app.netlify.com/teams/akaaravindh/projects",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-[#2C333A] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#393E46]"
            >
              {item.icon}
              <div className="text-left">
                <p className="font-medium text-gray-200">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="text-center border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-sm">
          © 2025 Aravindh Raj. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
