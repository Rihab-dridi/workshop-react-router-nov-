import { Link } from "react-router-dom";

function Profile({ el }) {
  return (
    <div className="Profile">
      <Link to={`/profiles/user/${el.id} `}>
        <>
          <img
            src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            alt="avatar"
          />

          <h3> {el.name}</h3>

          <h5> {el.email}</h5>
          <h5> {el.phone}</h5>
        </>
      </Link>
    </div>
  );
}

export default Profile;
