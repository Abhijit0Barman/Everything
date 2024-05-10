import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingle } from "../Redux/StudentReducer/action";
import axios from "axios";

const initData = {
  id: 0,
  name: "",
  batch: "",
  student_code: "",
  score: 0,
  green_card: 0,
  Poster: "",
};

export const StudentDetail = () => {

  const [student, setStudent] = useState(initData);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingle(id, setStudent));

    // axios
    //   .get(
    //     `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students/${id}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setStudent(res.data);
    //   });
  }, []);

  return (
    <div className={"student-card"}>
      <h1 className="student-id">{/* Show Student Id here */ student.id}</h1>
      <img src={student.Poster} alt={student.name} className="student-image" />
      <p className="student-name">{student.name}</p>
      <p className="student-code">{student.student_code}</p>
      <p className="student-batch">{student.batch}</p>
      <p className="student-score">{student.score}</p>
      <h3 className="student-green-card">{student.green_card}</h3>
    </div>
  );
};
