import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center text-white pt-20"
    >
      <div className="text-center px-6 max-w-4xl">

        <h2 className="text-xl md:text-2xl text-blue-400 mb-3">
          Hello, I'm
        </h2>

        <h1 className="text-5xl md:text-8xl font-extrabold mb-4">
          Gunjan Puri
        </h1>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Full Stack Developer
        </h3>

        <p className="text-lg text-gray-400 leading-8 mb-8">
          Computer Engineering Student specializing in
          Full Stack Development using React, Node.js,
          Java, MySQL and MongoDB.
          Passionate about building scalable web applications,
          AI-powered solutions and modern software systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">

          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Me
          </a>

          <a
            href="/Gunjan_Puri_9373607548.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="https://github.com/gunjan-puri-03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-blue-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/gunjan-puri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>

          <a href="mailto:purigunjan0045r@gmail.com">
            <FaEnvelope className="hover:text-blue-400 transition" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;