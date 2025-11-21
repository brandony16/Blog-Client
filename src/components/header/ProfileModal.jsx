import { LogOut, User } from "lucide-react";
import React from "react";

const ProfileModal = React.forwardRef((props, ref) => {
  return (
    <div
      className="absolute flex flex-col top-full right-0 bg-white text-black w-xs"
      ref={ref}
    >
      <div className="flex p-3">
        <User /> Profile
      </div>
      <div className="flex p-3 border-t">
        <LogOut />
        Logout
      </div>
    </div>
  );
});

export default ProfileModal;
