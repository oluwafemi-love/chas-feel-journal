import React from "react";
import { Link } from "@tanstack/react-router";
import ALL_USERS from "../../data/AllUsers";

const currentUserId = "u-1a92f";
const currentUser = ALL_USERS.find(
  (user) => user.id === currentUserId,
);

// Profile Page Component
function ProfileDP() {
  return (
    <Link to={"/ProfilePage/"}>
      <img src={currentUser.displayPicture} alt="Your display avatar" />
    </Link>
  );
}

export default ProfileDP;
