import styles from "./App.module.css";

import Courses from "./Components/courses/Courses";
import MobileInfo from "./Components/mobileInfo/MobileInfo";
import Users from "./Components/users/Users";

const App = () => {
  return (
    <div>
      {/* Add h1 tag here as per the problem statement */}
      <h1 className={styles.heading} >This app contains different components like MobileInfo, Courses, Users</h1>
      {/* Add components here MobileInfo, Courses, Users here */}
      <MobileInfo/>
      <Courses/>
      <Users/>
    </div>
  );
};

export default App;
