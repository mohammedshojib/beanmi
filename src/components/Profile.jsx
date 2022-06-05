import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Profile = () => {
  const [user, loading2, errorHook] = useAuthState(auth);
  return (
    <div className="card-c text-center">
      <h1 className="mb-2 ">{user?.displayName}</h1>
      <p>{user?.email}</p>
      <p>This page in under construction</p>
      {/* <img src={err} className="w-25" alt="" /> */}
      <div class="learn-more-btn-section">
        <button
          onClick={() => signOut(auth)}
          className="nav-link learn-more-btn btn-header"
        >
          SingOut
        </button>
      </div>
    </div>
  );
};

export default Profile;
