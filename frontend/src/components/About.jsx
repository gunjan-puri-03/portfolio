function About() {
  const aboutCards = [
    {
      title: "Education",
      description:
        "B.Tech in Computer Engineering (2026) from Bapurao Deshmukh College of Engineering.",
    },
    {
      title: "Experience",
      description:
        "Completed internships focused on Full Stack Development, web technologies, and software engineering while working on real-world projects and collaborative development.",
    },
    {
      title: "Current Focus",
      description:
        "Building full-stack web applications using React, Node.js, Java, Spring Boot, MongoDB, and cloud technologies while continuously improving problem-solving and software development skills.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          I'm a passionate Computer Engineering student
          who enjoys building modern web applications and
          solving real-world problems through technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300">
                {card.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;