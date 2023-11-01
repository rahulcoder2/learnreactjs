import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Check if user or password is incorect</div>;

  return <div>
    welcome to page user: {user.username}
  </div>;
};

export default Profile;
