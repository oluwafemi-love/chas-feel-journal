import React from "react";
import { Link } from "@tanstack/react-router";

// Profile Page Component
function ProfileDP( {imageSource} ) {
  console.log("Received:", imageSource);
  return (
    <Link to={"/ProfilePage/"}>
      <img src={"https://res.cloudinary.com/ds6na5t4s/image/upload/v1771252912/dp_user_1_oxcwq4.png"} alt="Your display avatar" />
    </Link>
  );
}

export default ProfileDP;
