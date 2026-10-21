
import { Link } from "react-router";

const features = [
  {
    icon: "🔍",
    title: "Instant Search",
    desc: "Type a title and the results update automatically as you search.",
  },
  {
    icon: "🎬",
    title: "Rich Details",
    desc: "Open any card to see the poster, genres, rating, runtime and a full summary.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    desc: "A single column on mobile and a multi-column grid on desktop.",
  },
];

const techs = ["React", "React Router", "Tailwind CSS", "TVMaze API", "Vite"];

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Heading */}
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          About <span className="text-red-500">MovieExplorer</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          MovieExplorer is a simple and fast way to browse movies and shows,
          search by title, and check ratings and details without leaving the
          page.
        </p>
      </section>

      {/* Features */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Tech stack */}
      <section className="text-center mb-14">
        <h2 className="text-2xl font-bold mb-5">Built With</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-red-600/10 text-red-400 border border-red-600/30 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          to="/movies"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-bold transition"
        >
          Start Exploring →
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;