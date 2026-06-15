import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        "Node.js",
        "Express.js",
        "Java",
        "Spring Boot",
        "PHP",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        "MongoDB",
        "MySQL",
        "SQL",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "AWS",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-400 mb-4">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                bg-slate-900
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
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-blue-400">
                  {category.icon}
                </span>

                <h3 className="text-2xl font-semibold text-blue-400">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-slate-700
                      text-gray-200
                      px-3
                      py-2
                      rounded-full
                      text-sm
                      hover:bg-blue-600
                      transition
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;