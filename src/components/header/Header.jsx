import logo from "../../assets/BnB_logo.png";

const Header = () => {
  return (
    <div id="header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>Bits & Breakpoints</h1>
      </div>

      {/* If user, render settings or whatever, if not render signup/login stuff */}
    </div>
  );
};

export default Header;
