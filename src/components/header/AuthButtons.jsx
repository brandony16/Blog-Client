const AuthButtons = () => {
  const btnStyles =
    "px-4 py-2 font-medium rounded-lg transition cursor-pointer box-border";
  return (
    <div id="authButtons" className="flex items-center gap-4">
      <button
        id="authBtn"
        className={btnStyles + " text-white bg-blue-600 hover:bg-blue-500"}
      >
        Login
      </button>
      <button
        id="authBtn"
        className={
          btnStyles +
          " bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;
