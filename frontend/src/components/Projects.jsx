import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Splitwise Clone",
      featured: true,
      description:
        "A modern expense sharing and management application where users can track, split, and manage expenses with friends and groups.",
      tech: ["Next.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/gunjan-puri-03/Splitwise",
      demo: "#",
    },
    {
      title: "Library Management System",
      featured: false,
      description:
        "A full-stack application for managing books, users, issue records, and role-based access using Spring Boot.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blood Donation System",
      featured: false,
      description:
        "A platform that connects blood donors and recipients with location-based search and donation management.",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
      github: "https://github.com/gunjan-puri-03/Blood-Bank",
      demo: "#",
    },
    {
      title: "PeerPay",
      featured: false,
      description:
        "A student learning platform where seniors can teach juniors and earn money through skill-sharing.",
      tech: ["Python", "HTML", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-4">
          Here are some projects I have built during my learning journey.
        </p>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-slate-800
                rounded-xl
                p-6
                border border-slate-700
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-blue-500/10
                transition-all
                duration-300
              "
            >

              {project.featured && (
                <span className="inline-flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <FaStar />
                  Featured Project
                </span>
              )}

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-blue-600/20
                      text-blue-400
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    px-4
                    py-2
                    rounded-lg
                    flex items-center gap-2
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    border border-white
                    hover:bg-white
                    hover:text-black
                    px-4
                    py-2
                    rounded-lg
                    flex items-center gap-2
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;