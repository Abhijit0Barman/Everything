import React from "react";
import "./ShowFormData.css";

const ShowFormData = ({ firstName, lastName, email, password, phNumber, country, birthdate, marriageStatus, avatar, gender }) => {
  return (
    <div>
      <h1>Form Data</h1>

      <h3 data-cy="first-name">First Name: {firstName}</h3>

      <h3 data-cy="last-name">Last Name: {lastName}</h3>

      <h3 data-cy="email">Email: {email}</h3>

      <h3 data-cy="password">Password: {password}</h3>

      <h3 data-cy="phNumber">Phone: {phNumber}</h3>

      <h3 data-cy="country">Country: {country}</h3>

      <h3 data-cy="birth-date">Birth Date: {birthdate}</h3>

      <h3 data-cy="marriage-status">Marriage-status:{marriageStatus ? "Yes" : "No"}</h3>

      <h3 data-cy="image-url">Image URL: {avatar}</h3>

      <h3 data-cy="gender">Gender: {gender}</h3>
    </div>
  );
};

export default ShowFormData;

