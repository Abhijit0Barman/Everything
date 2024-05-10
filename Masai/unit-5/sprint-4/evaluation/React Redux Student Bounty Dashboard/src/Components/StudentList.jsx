import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getStudents } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const dispatch = useDispatch();
  // const students=useSelector(s=>s.studentReducer.students)
  const { students } = useSelector((s) => s.studentReducer);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const paramObj = {
    params: {},
  };

  useEffect(() => {
    dispatch(getStudents(paramObj));
  }, [location.search]);

  return (
    <div>
      <div
        data-testid="student-list"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 300px)",
          justifyContent: "space-between",
          gap: "40px",
          padding: "10px",
          border: "2px solid black",
        }}>
        {/* Map through the student list using StudentCard component  */}
        {students.length > 0 &&
          students.map((item) => <StudentCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};
