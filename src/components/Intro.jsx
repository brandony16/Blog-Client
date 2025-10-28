const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold underline">Intro:</h3>
      <p className="text-lg">
        I am Brandon Young, a CS student at Virginia Tech (Go Hokies!).
      </p>
      <p className="text-lg">
        This is a blog website where I am learning how to build a full stack
        project using React for the frontend and express for the backend, with a
        PostgreSQL database. Check out my{" "}
        <a
          className="font-semibold underline"
          href="https://www.github.com/brandony16/Blog-Client"
        >
          Github
        </a>{" "}
        for this project to see how this website was created, and to check out
        some of my other projects.
      </p>
      <p className="text-lg">
        Below you can find some articles about tech and coding. Feel free to
        read them and leave a comment!
      </p>
    </div>
  );
};

export default Intro;
