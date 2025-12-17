const Intro = () => {
  return (
    <section className="max-w-3xl mx-auto bg-white border border-orange-200 rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-blue-700 border-b pb-2">
        Intro
      </h3>

      <p className="text-lg text-gray-800">
        I am <span className="font-semibold">Brandon Young</span>, a CS student at
        Virginia Tech (<span className="text-red-700 font-semibold">Go Hokies!</span>).
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        This is a blog website where I am learning how to build a full stack
        project using <span className="font-semibold">React</span> for the
        frontend and <span className="font-semibold">Express</span> for the
        backend, with a <span className="font-semibold">PostgreSQL</span>{" "}
        database. Check out my{" "}
        <a
          className="font-semibold text-blue-600 hover:text-blue-800 underline"
          href="https://www.github.com/brandony16/Blog-Client"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        to see how this site was built and explore my other projects.
      </p>

      <p className="text-lg text-gray-700">
        Below you can find articles about tech and coding. Feel free to read them.
      </p>
    </section>
  );
};

export default Intro;
