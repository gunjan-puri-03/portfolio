function Stats() {
  const stats = [
    {
      number: "2+",
      label: "Internships",
    },
    {
      number: "4+",
      label: "Projects",
    },
    {
      number: "2026",
      label: "Graduate",
    },
    {
      number: "Full Stack",
      label: "Developer",
    },
  ];

  return (
    <section className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-3xl font-bold text-blue-400">
                {stat.number}
              </h2>

              <p className="text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;