import React, { useState } from "react";
import "./Form.css";
import ShowFormData from "./ShowFormData";

let initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false,
  gender: "",
};
// console.log(initState);
const Form = () => {
  const [formData, setFormData] = useState(initState);
  const [allData, setAllData] = useState([])


  const handleChange = (e) => {

    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value

    if (e.target.type === "checkbox") {
      const marriageStatus = e.target.checked ? true : false;
      setFormData({
        ...formData,
        [e.target.name]: marriageStatus,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }

    // console.log(value)
    // console.log(e.target);
  };
  const {
    firstName,
    lastName,
    email,
    password,
    phNumber,
    country,
    birthDate,
    avatar,
    marriageStatus,
    gender,
  } = formData;

  console.log(formData)

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>React Form Assignment</h1> */}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setAllData(formData)
            setFormData(initState)

          }}
          style={{
            border: "1px solid black",
            width: "60%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            // justifyContent:"full",
            // alignItems: "center",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          {/* First Name */}
          <label htmlFor="">
            First Name
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </label>

          {/* Last Name */}
          <label htmlFor="">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
          </label>
          {/* Email */}
          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>
          {/* Password */}
          <label htmlFor="">
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </label>
          {/* Phone number */}
          <label htmlFor="">
            Phone number
            <input
              type="number"
              placeholder="Phone number"
              name="phNumber"
              value={phNumber}
              onChange={handleChange}
            />
          </label>
          {/* Country Select Tage */}
          <label htmlFor="">
            Country
            <select name="country" value={country} id="" onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Russia">Russia</option>
              <option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </label>

          {/* Birth Date Selector */}
          <label htmlFor="">
            Birth Date
            <input type="date" value={birthDate} onChange={handleChange} name="birthDate" />
          </label>
          {/* Profile Pic Selector */}
          <label htmlFor="">
            Choose Avtar
            <input type="file" value={avatar} onChange={handleChange} name="avatar" />
          </label>

          {/* Married Status Selector */}
          <label htmlFor="">Select if Married</label>

          <label htmlFor="">
            {" "}
            <input
              type="checkbox"
              value={marriageStatus}
              name="marriageStatus"
              onChange={handleChange}
            />
            Married Status
          </label>


          {/* Gender Selector */}
          <label>Choose Gender...</label>
          {/* <input type="radio" name="gender" id="male" /> */}
          <label htmlFor="male">
            {" "}
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={gender === "Male"}
            />
            Male
          </label>

          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={gender === "Female"}
            />
            Female
          </label>

          <label htmlFor="other">
            {" "}
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={gender === "Other"}
            />
            Other
          </label>

          {/* Submit Button - input type submit */}
          <input type="submit" value="Submit" />
        </form>
        <ShowFormData {...allData} />
      </div>
    </div>
  );
};

export default Form;
