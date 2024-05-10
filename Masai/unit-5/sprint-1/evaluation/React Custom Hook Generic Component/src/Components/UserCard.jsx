import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

const UserCard = ({imageURL,avatarShape = "round",name,description = "Testing Description",backgroundColor = "red",title,}) => {
  return (
    <div data-testid="usercard" className={`${avatarShape} ${backgroundColor}`}>
      <img src={imageURL} alt={name} className="userImage" />
      <div className="userInformation">
        <h2 className="userName">{name}</h2>
        <p className="userTitle">{title}</p>
        <p className="userDescription">{description}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  avatarShape: PropTypes.oneOf(["round", "square"]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};
export default UserCard;
