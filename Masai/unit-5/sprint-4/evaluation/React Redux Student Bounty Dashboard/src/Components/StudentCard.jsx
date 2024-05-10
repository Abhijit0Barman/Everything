import { useNavigate } from "react-router-dom";

export const StudentCard = ({
  id,
  name,
  batch,
  student_code,
  score,
  green_card,
  Poster,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={"student-card"}
      style={{ border: "1px solid blue", padding: "10px" }}>
      {/* Show student details here with a button to view details */}
      <img src={Poster} alt={name} className="student-image" width="150px" />
      <p className="student-name">{name}</p>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <button
        className="student-detail"
        onClick={() => navigate(`/student/${id}`)}>
        View Details
      </button>
    </div>
  );
};
