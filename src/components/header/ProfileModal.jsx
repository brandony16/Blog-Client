import { LogOut, User } from "lucide-react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { NavLink } from "react-router-dom";

const ProfileModal = React.forwardRef((props, ref) => {
  const { logout } = useContext(AuthContext);

  // Close modal and logout
  const handleLogout = () => {
    props.setShowModal(false);
    logout();
  };

  return (
    <div
      className="absolute flex flex-col top-full right-0 bg-white text-black w-xs"
      ref={ref}
    >
      <NavLink
        className="flex p-3 gap-2 cursor-pointer hover:bg-orange-100"
        to="/profile"
        onClick={() => props.setShowModal(false)}
      >
        <User /> Profile
      </NavLink>
      <div
        className="flex p-3 border-t gap-2 cursor-pointer hover:bg-orange-100"
        onClick={handleLogout}
      >
        <LogOut />
        Logout
      </div>
    </div>
  );
});

export default ProfileModal;
