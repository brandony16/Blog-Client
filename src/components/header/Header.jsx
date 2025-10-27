import logo from "../../assets/BnB_logo.png";
import AuthButtons from "./AuthButtons.jsx";
import Searchbar from "./Searchbar.jsx";

const Header = () => {
  const headerClick = () => {
    // TODO: ROUTE TO HOME PAGE
    console.log("Routing to home page");
  };
  return (
    <div
      id="header"
      className="fixed top-0 left-0 w-screen flex items-center justify-between bg-gray-900 text-white px-8 py-4 w-100vw h-18"
    >
      <div
        id="title"
        className="flex items-center gap-3 cursor-pointer"
        onClick={headerClick}
      >
        <img src={logo} alt="" className="h-10 w-10" />
        <h1 className="text-2xl font-semibold">Bits & Breakpoints</h1>
      </div>

      <Searchbar />

      {/* If user, render settings or whatever, if not render signup/login stuff */}
      <AuthButtons />
    </div>
  );
};

export default Header;
