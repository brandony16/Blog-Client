import { useNavigate } from "react-router-dom";
import logo from "../../assets/BnB_logo.png";
import AuthButtons from "./AuthButtons.jsx";
import Searchbar from "../Searchbar.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import Profile from "./Profile.jsx";
import ProfileModal from "./ProfileModal.jsx";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const profileRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="header"
      className="fixed top-0 left-0 w-screen flex items-center justify-between bg-gray-900 text-white px-8 py-4 h-18 z-100"
    >
      <div
        id="title"
        className="flex items-center gap-3 cursor-pointer underline underline-offset-4"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="" className="h-10 w-10" />
        <h1 className="text-2xl font-semibold">Bits & Breakpoints</h1>
      </div>

      {user ? (
        <div ref={profileRef}>
          <Profile user={user} onClick={() => setShowModal(true)} />
        </div>
      ) : (
        <AuthButtons />
      )}

      {showModal && <ProfileModal ref={modalRef} setShowModal={setShowModal} />}
    </div>
  );
};

export default Header;
