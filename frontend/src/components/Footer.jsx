import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-3">
              Gunjan Puri
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about
              building scalable web applications,
              AI-powered solutions, and modern software systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/gunjan-puri-03"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gunjan-puri/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:purigunjan0045r@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">

          <p className="flex justify-center items-center gap-2 flex-wrap">
            Built with
            <FaHeart className="text-red-500" />
            using React, Tailwind CSS, Express.js & MongoDB
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Gunjan Puri. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;