const Profile = ({ user, onClick }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={onClick}>
      <p className="font-medium">
        {user.firstName} {user.lastName}
      </p>
      <img
        src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.id}&faceOffsetX=0,0`}
        alt="avatar"
        className="w-10 h-10 rounded-full border-2 border-blue-500"
      />
    </div>
  );
};

export default Profile;
